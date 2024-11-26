module.exports.config = {
  name: "musicv3",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Kain Naji",//Độ Text By Kain Naji
  description: "Random nhạc",
  commandCategory: "Random-Music",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
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
  var thinh = (await axios.get("https://api-kainriyu-project-yv9i.onrender.com/Poem/love")).data.data;
  axios.get('https://api-kainriyu-project-yv9i.onrender.com/vdnhac').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `『 🎶 』𝐌𝐔𝐒𝐈𝐂『 🎶 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ⏰️ 』 ➣ 𝐓𝐢𝐦𝐞: 『 ${gio} || ${ngay} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 🌱 』 ➣ 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝐍𝐠𝐡𝐞 𝐍𝐡𝐚̣𝐜 𝐕𝐮𝐢 𝐕𝐞̉!\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`,
            attachment: fs.createReadStream(__dirname + `/cache/vdnhac.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vdnhac.${ext}`), event.messageID);
        };      request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vdnhac.${ext}`)).on("close", callback);
      })
                        }
