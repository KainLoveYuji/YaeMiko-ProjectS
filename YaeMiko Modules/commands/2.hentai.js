module.exports.config = {
  name: "hentai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Random Images 210",
  commandCategory: "NSFW",
  usages: "hentai",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://api-kainriyu-project.onrender.com/Poem/love")).data.data;
  axios.get('https://api-kainriyu-project.onrender.com/Images/hentaivip').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
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
  let callback = function () {
          api.sendMessage({
            body: `『 📒 』𝐈𝐌𝐀𝐆𝐄𝐒『 📒 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: ${thơ}\n『 ${gio} || ${ngay} (${thu}) 』\n『 🌱 』 ➣ 𝐀̉𝐧𝐡 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐁𝐞̂𝐧 𝐃𝐮̛𝐨̛́𝐢!`,
            attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback);
      })
}
  
