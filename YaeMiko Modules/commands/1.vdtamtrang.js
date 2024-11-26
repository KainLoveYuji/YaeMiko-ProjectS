module.exports.config = {
  name: "vdtamtrang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kain Naji",
  description: "Random Tâm Trạng",
  commandCategory: "Random-VIDEO",
  usages: "",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://api-kainriyu-project-yv9i.onrender.com/Poem/love")).data.data;
  axios.get('https://api-kainriyu-project-yv9i.onrender.com/vdtamtrangv2').then(res => {
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
            body: `『 🌺 』𝐓𝐀̂𝐌 𝐓𝐑𝐀̣𝐍𝐆『 🌺 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ✨️️ 』 ➣  𝐇𝐢 ! 𝐕𝐢𝐝𝐞𝐨 𝐒𝐮𝐲 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n『 ⏳️ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay} (${thu})\n『 ⚘️ 』 ➣ 𝐓𝐢𝐦𝐞:  『 ${gio} 』\n『 🍁 』 ➣ 𝐋𝐮̛𝐮 𝐘́ Đ𝐮̛̀𝐧𝐠 𝐒𝐩𝐚𝐦 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐚\n『 🩵 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n▭▭▭▭『 𝐊𝐚𝐢𝐧𝐧🥀 』▭▭▭▭`,
            attachment: fs.createReadStream(__dirname + `/cache/tamtrang.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tamtrang.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/tamtrang.${ext}`)).on("close", callback);
      })
}
  
