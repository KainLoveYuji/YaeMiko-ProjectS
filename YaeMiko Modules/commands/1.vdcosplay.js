module.exports.config = {
  name: "vdcosplay",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Kain Naji",
  description: "Video Cosplay", 
  commandCategory: "Video Noprefix",
  usages: "¹",
  cooldowns: 0
};
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "CosplayVip" || (body.toLowerCase() == "Cosplay") ||  (body.toLowerCase() == "Vdcos") || (body.toLowerCase() == "cos")) {
       api.sendMessage({body: `『 🍓 』𝐕𝐃 𝐂𝐎𝐒𝐏𝐋𝐀𝐘『 🍓 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 ⚘️ 』 ➣ 𝐕𝐢𝐝𝐞𝐨 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐍𝐞̀ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』\n『 ${gio} || ${ngay} 』`, attachment: (await axios.get((await axios.get(`https://api-kainriyu-project-oofm.onrender.com/Images/vdcosplay`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
 
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const axios = global.nodemodule["axios"];
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🌿") return;
 api.unsendMessage(handleReaction.messageID);
    var msg =`『 🍓 』𝐕𝐃 𝐂𝐎𝐒𝐏𝐋𝐀𝐘『 🍓 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 ⚘️ 』 ➣ 𝐕𝐢𝐝𝐞𝐨 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐍𝐞̀ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』\n『 ${gio} || ${ngay} 』`
    return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://api-kainriyu-project-oofm.onrender.com/Images/vdcosplay`)).data.data,  {
                    responseType: 'stream'
                })).data},event.threadID); 
    }
