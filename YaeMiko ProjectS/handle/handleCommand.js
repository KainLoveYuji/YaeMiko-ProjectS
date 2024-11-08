module.exports = function ({ api, models, Users, Threads, Currencies }) {
  const stringSimilarity = require('string-similarity'),
    escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    logger = require("../../utils/log.js");
  const axios = require('axios')
  const moment = require("moment-timezone");
  return async function ({ event }) {
    const dateNow = Date.now()
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss DD/MM/YYYY");
    const { allowInbox, PREFIX, ADMINBOT, NDH, DeveloperMode, adminOnly, keyAdminOnly, ndhOnly,adminPaOnly } = global.config;
    const { userBanned, threadBanned, threadInfo, threadData, commandBanned } = global.data;
    const { commands, cooldowns } = global.client;
    var { body, senderID, threadID, messageID } = event;
    var senderID = String(senderID),
      threadID = String(threadID);
    const threadSetting = threadData.get(threadID) || {}
    const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : PREFIX)})\\s*`);
    if (!prefixRegex.test(body)) return;
    const adminbot = require('./../../config.json');
//// admin -pa /////
    if(!global.data.allThreadID.includes(threadID) && !ADMINBOT.includes(senderID) && adminbot.adminPaOnly == true)
    return api.sendMessage({body: "[ 𝐌𝐎𝐃𝐄 ] - 𝐂𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐭𝐫𝐨𝐧𝐠 𝐜𝐡𝐚𝐭 𝐫𝐢𝐞̂𝐧𝐠 ❤️", attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.data,
method: "GET",
responseType: "stream"
})).data                                      }, threadID, messageID)
    ////end 
    if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) {
      if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) return api.sendMessage({body: '[ 𝐌𝐎𝐃𝐄 ] - 𝐂𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 ❤️', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.data,
method: "GET",
responseType: "stream"
})).data                                      }, threadID, messageID)
    }
    if (!NDH.includes(senderID) && !ADMINBOT.includes(senderID) && adminbot.ndhOnly == true) {
      if (!NDH.includes(senderID) && !ADMINBOT.includes(senderID) && adminbot.ndhOnly == true) return api.sendMessage({body: '[ 𝐌𝐎𝐃𝐄 ] - 𝐂𝐡𝐢̉ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐡𝐨̂̃ 𝐭𝐫𝐨̛̣ 𝐛𝐨𝐭 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 😽', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.data,
method: "GET",
responseType: "stream"
})).data                                      }, threadID, messageID)
    }
    const dataAdbox = require('./../../YaeMiko Modules/commands/hethong/data.json');
    var threadInf = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const findd = threadInf.adminIDs.find(el => el.id == senderID);
    if (dataAdbox.adminbox.hasOwnProperty(threadID) && dataAdbox.adminbox[threadID] == true && !ADMINBOT.includes(senderID) && !findd && event.isGroup == true) return api.sendMessage({body: '[ 𝐌𝐎𝐃𝐄 ] - 𝐂𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭 🍄', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.data,
method: "GET",
responseType: "stream"
})).data                                      }, event.threadID, event.messageID)
    if (userBanned.has(senderID) || threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) {
      if (!ADMINBOT.includes(senderID.toString())) {
        if (userBanned.has(senderID)) {
          const { reason, dateAdded } = userBanned.get(senderID) || {};
          return api.sendMessage(global.getText("handleCommand", "userBanned", reason, dateAdded), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
        } else {
          if (threadBanned.has(threadID)) {
            const { reason, dateAdded } = threadBanned.get(threadID) || {};
            return api.sendMessage(global.getText("handleCommand", "threadBanned", reason, dateAdded), threadID, async (err, info) => {
              await new Promise(resolve => setTimeout(resolve, 5 * 1000));
              return api.unsendMessage(info.messageID);
            }, messageID);
          }
        }
      }
    }
    const [matchedPrefix] = body.match(prefixRegex),
      args = body.slice(matchedPrefix.length).trim().split(/ +/);
    commandName = args.shift().toLowerCase();
    var command = commands.get(commandName);
    if (!command) {
      var allCommandName = [];
      const commandValues = commands['keys']();
      for (const cmd of commandValues) allCommandName.push(cmd)
      const moment = require("moment-timezone");
  const noleak = moment.tz("Asia/Ho_Chi_Minh").format("(DD/MM/YYYY)  (HH:mm:ss)");
      const apiUrl = 'https://api-kainriyu-project.onrender.com/animevipv2';
const numOfCalls = ["1"];
const array = [];

const randomIndex = Math.floor(Math.random() * numOfCalls.length);
const numCalls = parseInt(numOfCalls[randomIndex]);

for (let i = 0; i < numCalls; i++) {
  const res = await axios.get(apiUrl);
  const data = res.data.data;
  const downloadFile = (await axios.get(data, { responseType: 'stream' })).data;
  array.push(downloadFile);
}
      const timeStart = Date.now();
      const dateNow = Date.now()
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thinh = poem[Math.floor(Math.random() * poem.length)].trim();
  
      const time = process.uptime(); 
      var ahri = Math.floor(time / (60 * 60));
	var ht = Math.floor((time % (60 * 60)) / 60);
	var bt = Math.floor(time % 60);
       var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
	    const allicon = [
  "🌈", "✨", "💫", "🎈", "🧸", "🎉", "🎂", "🍭", "🍬", "🍩",
  "🍓", "🍒", "🍉", "🥝", "🌻", "🦋", "🐣", "🐱", "🐶", "🦄",
  "🐥", "🌺", "💌", "💟", "🎀", "🧁", "🦊", "🍄", "🌞", "❄️",
  "🍯", "🌵", "🐻", "🌼", "🌺", "🎶", "🍰", "🍪", "🫧", "🍦",
  "🪅", "🥳", "🐥", "🐰", "🪴", "🐢", "🐼", "🐹", "🌙", "🪐",
  "💖", "🌸", "💝", "🍃", "🎈", "🍰", "🧸", "🐨", "🐧", "🍦",
  "🌊", "🌌", "🌹", "🌿", "🕊️", "🧃", "🎊", "🐞", "🐳", "🐚",
  "🦩", "🌷", "💎", "🎠", "🍉", "🍭", "🍀", "🍫", "🦕", "🐢",
  "🍔", "🥞", "🛼", "🐯", "🍕", "🧋", "🪶", "💐", "🥂", "💜",
  "🐙", "🌻", "🍁", "🪷", "🦦", "🦔", "🐬", "🪸", "🍒", "🍇"
];
    const icon = allicon[Math.floor(Math.random()*allicon.length)];
    const ten = await Users.getNameUser(event.senderID)
 let uid = event.senderID;
      const checker = stringSimilarity.findBestMatch(commandName, allCommandName);
      if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target);
      else return api.sendMessage({body: `『 ${global.config.BOTNAME} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${noleak} 』\n『 ⚘️ 』 ➣ 𝐒𝐚𝐢 𝐥𝐞̣̂𝐧𝐡 𝐫𝐨̂̀𝐢 𝐛𝐚̣𝐧 𝐨̛𝐢 !!\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n◆━━━◆『 ${icon} 』◆━━━◆ \n『 🎀 』 ➣ 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n『 🪷 』 ➣ 𝐏𝐢𝐧𝐠: ${Date.now() - dateNow}ms\n『 🌺 』 ➣𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐁𝐨𝐭: ${client.commands.size} 𝐋𝐞̣̂𝐧𝐡\n▭▭▭▭『 𝐊𝐚𝐢𝐧𝐧🥀 』▭▭▭▭\n${global.getText("handleCommand", "commandNotExist", checker.bestMatch.target, noleak,ahri,ht,bt,thinh,ten)}`, attachment:array} , event.threadID, event.messageID);
    }
    if (commandBanned.get(threadID) || commandBanned.get(senderID)) {
      if (!ADMINBOT.includes(senderID)) {
        const banThreads = commandBanned.get(threadID) || [],
          banUsers = commandBanned.get(senderID) || [];
        if (banThreads.includes(command.config.name))
          return api.sendMessage({body: global.getText("handleCommand", "commandThreadBanned", command.config.name),attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.url,
method: "GET",
responseType: "stream"
})).data
}, threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000))
            return api.unsendMessage(info.messageID);
          }, messageID);
        if (banUsers.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandUserBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
      }
    }
    if (command.config.commandCategory.toLowerCase() == 'nsfw' && !global.data.threadAllowNSFW.includes(threadID) && !ADMINBOT.includes(senderID))
      return api.sendMessage({body:global.getText("handleCommand", "threadNotAllowNSFW"), attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/anime2')).data.url,
method: "GET",
responseType: "stream"
})).data                                      }, threadID, async (err, info) => {

        await new Promise(resolve => setTimeout(resolve, 5 * 1000))
        return api.unsendMessage(info.messageID);
      }, messageID);
    var threadInfo2;
    if (event.isGroup == !![])
      try {
        threadInfo2 = (threadInfo.get(threadID) || await Threads.getInfo(threadID))
        if (Object.keys(threadInfo2).length == 0) throw new Error();
      } catch (err) {
        logger(global.getText("handleCommand", "cantGetInfoThread", "error"));
      }
 const times = process.uptime(),hours = Math.floor(times / (60 * 60)),minutes = Math.floor((times % (60 * 60)) / 60),seconds = Math.floor(times % 60);  //upt
  const poem2 = require('./../../YaeMiko ProjectS/Poem/love.json');
  var nmtv2 = poem2[Math.floor(Math.random() * poem2.length)].trim();
       const kainv2 = moment.tz("Asia/Ho_Chi_Minh").format("(DD/MM/YYYY)  (HH:mm:ss)");
const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
      var permssion = 0;
    var threadInfoo = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const find = threadInfoo.adminIDs.find(el => el.id == senderID);
    if (NDH.includes(senderID.toString())) permssion = 2;
    if (ADMINBOT.includes(senderID.toString())) permssion = 3;
    else if (!ADMINBOT.includes(senderID) && !NDH.includes(senderID) && find) permssion = 1;
    if (command.config.hasPermssion > permssion) return api.sendMessage({body:global.getText("handleCommand", "permssionNotEnough", command.config.name, hours,minutes,seconds,kainv2,name,nmtv2,), attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/Images/animevip2')).data.data,
method: "GET",
responseType: "stream"
})).data
   }, event.threadID, event.messageID);
       if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
	  const timesv2 = process.uptime(),hoursv2 = Math.floor(times / (60 * 60)),minutesv2 = Math.floor((times % (60 * 60)) / 60),secondsv2 = Math.floor(times % 60);  //upt
  const tp = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const timestamps = client.cooldowns.get(command.config.name);;
    const expirationTime = (command.config.cooldowns || 1) * 1000;
    if (timestamps.has(senderID) && dateNow < timestamps.get(senderID) + expirationTime)
//return api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐫𝐨𝐧𝐠 𝐭𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀ ⏳\n𝐭𝐫𝐚́𝐧𝐡 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐬𝐚𝐮 👻", threadID, messageID);
    return api.sendMessage({body: `『 𝗦𝗨̛̉ 𝗗𝗨̣𝗡𝗚 𝗤𝗨𝗔́ 𝗡𝗛𝗔𝗡𝗛 』\n━━━━━━━━━━━━━━━━━━\n[☁️] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴 : ${name}\n[🍎] → 𝗕𝗮̣𝗻 đ𝗮𝗻𝗴 𝘁𝗿𝗼𝗻𝗴 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀!\n[🧸] → 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 𝘀𝗮𝘂\n[💓] → 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝘃𝗮̂̃𝗻 𝗰𝗼̂́ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘀𝗽𝗮𝗺 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻 🪷\n[⚘️] → 𝗟𝗲̣̂𝗻𝗵 ( ${command.config.name} ) 𝗕𝗮̣𝗻 Đ𝗮𝗻𝗴 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 𝗖𝗼́ 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗖𝗵𝗼̛̀ 𝗟𝗮̀: ${command.config.cooldowns} 𝗚𝗶𝗮̂𝘆\n[🍁] → 𝗧𝗿𝗮́𝗻𝗵 Đ𝗲̂̉ 𝗕𝗼𝘁 𝗕𝗶̣ 𝗦𝗽𝗮𝗺 𝗕𝗮̣𝗻 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗖𝗵𝗼̛̀ ${((timestamps.get(senderID) + expirationTime - dateNow)/1000).toString().slice(0, 5)}𝘀 𝗩𝗮̀ 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 𝗟𝗮̣𝗶 𝗦𝗮𝘂\n━━━━━━━━━━━━━━━━━━\n[🍒] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ : ${kainv2}\n[🍎] → 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰 : ${hoursv2} 𝗴𝗶𝗼̛̀ ${minutesv2} 𝗽𝗵𝘂́𝘁 ${secondsv2} 𝗴𝗶𝗮̂𝘆💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project.onrender.com/Images/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID, messageID);
    var getText2;
    if (command.languages && typeof command.languages == 'object' && command.languages.hasOwnProperty(global.config.language))
      getText2 = (...values) => {
        var lang = command.languages[global.config.language][values[0]] || '';
        for (var i = values.length; i > 0x2533 + 0x1105 + -0x3638; i--) {
          const expReg = RegExp('%' + i, 'g');
          lang = lang.replace(expReg, values[i]);
        }
        return lang;
      };
    else getText2 = () => { };
    try {
      const Obj = {};
      Obj.api = api
      Obj.event = event
      Obj.args = args
      Obj.models = models
      Obj.Users = Users
      Obj.Threads = Threads
      Obj.Currencies = Currencies
      Obj.permssion = permssion
      Obj.getText = getText2
      command.run(Obj);
      timestamps.set(senderID, dateNow);
      if (DeveloperMode == !![])
        logger(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), (Date.now()) - dateNow), "[ DEV MODE ]");
      return;
    } catch (e) {
      return api.sendMessage(global.getText("handleCommand", "commandError", commandName, e), threadID);
    }
  };
};
