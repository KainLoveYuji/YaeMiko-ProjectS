module.exports.config = {
  name: "musicv2",
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
  var thinh = (await axios.get("https://api-kainriyu-project.onrender.com/Poem/love")).data.data;
  axios.get('https://api-kainriyu-project.onrender.com/vdmusicv2').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `『 🎶 』𝐌𝐔𝐒𝐈𝐂『 🎶 』\n▭▭▭▭▭▭▭▭▭▭▭▭\n『 🌺 』 ➜𝐌𝐮𝐬𝐢𝐜\n『 💟 』 ➜𝐕𝐚̣𝐧 𝐊𝐢𝐞̂́𝐩 𝐂𝐡𝐢̉ 𝐘𝐞̂𝐮 𝐌𝐨̣̂𝐭 𝐌𝐢̀𝐧𝐡 𝐄𝐦\n『 🥀 』➜𝐊𝐚𝐢𝐧 𝐍𝐚𝐣𝐢 - 𝐓𝐡𝐞 𝐒𝐩𝐞𝐜𝐭𝐫𝐞\n▭▭▭▭▭▭▭▭▭▭▭▭\n『 ♥️ 』➜𝐒𝐮̛̣ 𝐓𝐡𝐚̣̂𝐭 𝐒𝐞̃ Đ𝐮̛𝐨̛̣𝐜 𝐁𝐚̣̂𝐭 𝐌𝐢́ 𝐕𝐚̀𝐨 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐊𝐡𝐨̂𝐧𝐠 𝐗𝐚\n『 💬 』➜𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』`,
            attachment: fs.createReadStream(__dirname + `/cache/speedup.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/speedup.${ext}`), event.messageID);
        };      request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/speedup.${ext}`)).on("close", callback);
      })
                        }
