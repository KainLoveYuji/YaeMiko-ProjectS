module.exports.config = {
  name: "nsfwv3",
  version: "1.4.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Gửi ảnh theo nhiều tag từ API Danbooru và số lượng ảnh không trùng lặp",
  commandCategory: "Random-img",
  usages: "/r34 tag: <tag1>+<tag2>+...+<tagN> amount: <số lượng>",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
  let tags = [];
  let count = 1; // Số lượng mặc định

  // Phân tích cú pháp lệnh
  args.forEach(arg => {
    if (arg.startsWith('tag:')) {
      tags.push(arg.replace('tag:', '').trim());
    } else if (arg.startsWith('amount:')) {
      count = parseInt(arg.replace('amount:', '').trim());
    }
  });

  const queryTags = tags.join('+');
  const threadID = event.threadID;

  if (!queryTags) {
    return api.sendMessage("Vui lòng nhập ít nhất một tag để tìm kiếm ảnh.", threadID);
  }

  try {
    // Gửi yêu cầu đến API để lấy danh sách ảnh dựa trên tag
    const response = await axios.get(`https://yande.re/post.json?tags=${queryTags}`);

    const data = response.data;
    if (data.length === 0) {
      return api.sendMessage("Không tìm thấy ảnh nào với các tag bạn chọn.", threadID);
    }

    const selectedUrls = new Set(); // Tập hợp để lưu các URL không trùng lặp
    const selectedImages = [];

    // Chọn ngẫu nhiên các ảnh không trùng lặp
    while (selectedImages.length < count && selectedUrls.size < data.length) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const imageUrl = data[randomIndex].file_url;

      if (!selectedUrls.has(imageUrl)) {
        selectedUrls.add(imageUrl);
        selectedImages.push(imageUrl);
      }
    }

    // Gửi từng ảnh theo yêu cầu
    for (let i = 0; i < selectedImages.length; i++) {
      const imageStream = (await axios({
        url: selectedImages[i],
        method: 'GET',
        responseType: 'stream'
      })).data;

      api.sendMessage({
        body: `Ảnh ${i + 1}/${selectedImages.length} cho tag: ${queryTags}`,
        attachment: imageStream
      }, threadID);
    }

  } catch (error) {
    console.error("Lỗi khi gửi yêu cầu đến API:", error);
    api.sendMessage("Đã có lỗi xảy ra khi gửi yêu cầu đến API.", threadID);
  }
};
