module.exports.config = {
  name: "vdsex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Random Video Sex",
  commandCategory: "NSFW",
  usages: "",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  
  // Lấy thơ từ API
  var thơ = (await axios.get("https://api-kainriyu-project.onrender.com/poem/love")).data.data;
  
  const video = require('./../../YaeMiko ProjectS/Data/vdsex.json');
  var video1 = video[Math.floor(Math.random() * video.length)].trim();
  const ext = 'mp4';
  
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  
  // Chuyển đổi ngày sang tiếng Việt
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭';
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢';
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚';
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛';
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦';
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮';
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲';

  // Hàm callback để gửi tin nhắn sau khi tải xong video
  let callback = function () {
    api.sendMessage({
      body: `『 🌺 』𝐀𝐈 𝐇𝐎𝐒𝐇𝐈𝐍𝐎『 🌺 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ✨️️ 』 ➣  𝐇𝐢 ! 𝐕𝐢𝐝𝐞𝐨 𝐀𝐢 𝐇𝐨𝐬𝐡𝐢𝐧𝐨 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n『 ⏳️ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay} (${thu})\n『 ⚘️ 』 ➣ 𝐓𝐢𝐦𝐞:  『 ${gio} 』\n『 🍁 』 ➣ 𝐋𝐮̛𝐮 𝐘́ Đ𝐮̛̀𝐧𝐠 𝐒𝐩𝐚𝐦 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐚\n『 🩵 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n▭▭▭▭『 𝐊𝐚𝐢𝐧𝐧🥀 』▭▭▭▭`,
      attachment: fs.createReadStream(__dirname + `/cache/vdsex.${ext}`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vdsex.${ext}`), event.messageID);
  };
  
  // Tải video từ liên kết và lưu vào cache
  request(video1).pipe(fs.createWriteStream(__dirname + `/cache/vdsex.${ext}`)).on("close", callback);
};
