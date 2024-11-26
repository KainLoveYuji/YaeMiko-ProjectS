module.exports.config = {
  name: "music",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Random Music",
  commandCategory: "Random-Music",
  usages: "",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  
  // Lấy thơ từ API (không cần trong trường hợp này nhưng có thể giữ lại nếu cần)
  // var thơ = (await axios.get("https://api-kainriyu-project-oofm.onrender.com/poem/love")).data.data;

  // Lấy video ngẫu nhiên từ JSON
  const video = require('./../../YaeMiko ProjectS/Data/music.json');
  var video1 = video[Math.floor(Math.random() * video.length)].trim();
  const ext = 'mp3';

  // Hàm callback để gửi tin nhắn sau khi tải xong video
  let callback = function () {
    api.sendMessage({
      attachment: fs.createReadStream(__dirname + `/cache/music.${ext}`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/music.${ext}`), event.messageID);
  };
  
  // Tải video từ liên kết và lưu vào cache
  request(video1).pipe(fs.createWriteStream(__dirname + `/cache/music.${ext}`)).on("close", callback);
};
