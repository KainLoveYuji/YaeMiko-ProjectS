module.exports.config = {
  name: "vdanimev2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kain Naji",
  description: "Random Video Anime",
  commandCategory: "Random-VIDEOV2",
  usages: "",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const video = require('./../../YaeMiko ProjectS/Video/anime.json');
  const randomVideo = video[Math.floor(Math.random() * video.length)].trim();
  const fileName = '1.mp4';
  const filePath = __dirname + `/${fileName}`;

  function downloadAndSendImage(image, fileName, callback) {
    request(image).pipe(fs.createWriteStream(fileName)).on("close", callback);
  }
  let callback = function () {
          api.sendMessage({
            body: `『 🌺 』𝐀𝐍𝐈𝐌𝐄『 🌺 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ✨️️ 』 ➣  𝐇𝐢 ! 𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n『 ⏳️ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay} (${thu})\n『 ⚘️ 』 ➣ 𝐓𝐢𝐦𝐞:  『 ${gio} 』\n『 🌿 』 ➣ 𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)}\n『 🍁 』 ➣ 𝐋𝐮̛𝐮 𝐘́ Đ𝐮̛̀𝐧𝐠 𝐒𝐩𝐚𝐦 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐚\n『 🩵 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n▭▭▭▭『 𝐊𝐚𝐢𝐧𝐧🥀 』▭▭▭▭`,
            attachment:[
        fs.createReadStream(filePath)
      ]
    }, event.threadID, () => {
      fs.unlinkSync(filePath);
    }, event.messageID);
  };
  downloadAndSendImage(randomVideo, filePath, callback);
}
