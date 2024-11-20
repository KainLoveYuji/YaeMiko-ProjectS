const { exec } = require('child_process');

// Cấu hình cảm xúc và mục tiêu
const emotions = ["LIKE", "LOVE", "HAHA", "WOW", "SAD", "ANGRY"]; // Các cảm xúc ngẫu nhiên
const posts = [ 
  "3894686270768469"
]; // ID của bài viết hoặc bình luận cần thả cảm xúc

// Hàm chờ ngẫu nhiên
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Hàm thả cảm xúc
async function reactToPosts(api) {
  for (const postID of posts) {
    // Chọn cảm xúc ngẫu nhiên
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];

    try {
      await api.setReaction(emotion, postID, (err) => {
        if (err) {
          console.log(`Lỗi khi thả cảm xúc: ${err}`);
        } else {
          console.log(`Đã thả cảm xúc ${emotion} cho bài viết ${postID}`);
        }
      });

      // Tạo độ trễ ngẫu nhiên (10 - 30 giây)
      const randomDelay = Math.floor(Math.random() * 20000) + 10000;
      await delay(randomDelay);
    } catch (error) {
      console.error(`Lỗi: ${error}`);
    }
  }
}

// Lệnh chạy khi được gọi
module.exports.run = async ({ api, event }) => {
  const { threadID } = event;

  api.sendMessage(
    "Bot sẽ bắt đầu thả cảm xúc ngẫu nhiên dạo trên các bài viết!",
    threadID,
    async () => {
      await reactToPosts(api);
      api.sendMessage("Đã hoàn thành việc thả cảm xúc dạo!", threadID);
    }
  );
};

// Thông tin lệnh
module.exports.config = {
  name: "react",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Ahri",
  description: "Bot tự động thả cảm xúc dạo trên các bài viết",
  commandCategory: "Fun",
  cooldowns: 5,
};
