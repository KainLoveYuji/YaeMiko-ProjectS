module.exports.config = {
  name: "r34",
  version: "1.3.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Gửi ảnh theo nhiều tag từ API và số lượng ảnh không trùng lặp",
  commandCategory: "Random-img",
  usages: "/r34 tag: <tag1> tag2: <tag2> ... amount: <số lượng>",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
  let tags = [];
  let count = 1; // Số lượng mặc định

  args.forEach(arg => {
    if (arg.startsWith('tag:')) {
      tags.push(arg.replace('tag:', '').trim());
    } else if (arg.startsWith('tag2:')) {
      tags.push(arg.replace('tag2:', '').trim());
    } else if (arg.startsWith('tag3:')) {
      tags.push(arg.replace('tag3:', '').trim());
    } else if (arg.startsWith('tag4:')) {
      tags.push(arg.replace('tag4:', '').trim());
    } else if (arg.startsWith('tag5:')) {
      tags.push(arg.replace('tag5:', '').trim());
    } else if (arg.startsWith('amount:')) {
      count = parseInt(arg.replace('amount:', '').trim());
    }
  });

  const queryTag = tags.join('_');
  const threadID = event.threadID;

  if (!queryTag) {
    return api.sendMessage("Vui lòng nhập ít nhất một tag để tìm kiếm ảnh.", threadID);
  }

  try {
    // Gửi yêu cầu đến API để lấy danh sách ảnh dựa trên tag
    const response = await axios.get(`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${queryTag}&json=1`);

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
        body: `Ảnh ${i + 1}/${selectedImages.length} cho tag: ${queryTag}`,
        attachment: imageStream
      }, threadID);
    }

  } catch (error) {
    console.error("Lỗi khi gửi yêu cầu đến API:", error);
    api.sendMessage("Đã có lỗi xảy ra khi gửi yêu cầu đến API.", threadID);
  }
};
