module.exports.config = {
  name: "tinderv3",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Ahri",//Ahri Mod Text
  description: "Ghép đôi có chọn giới tính",
  commandCategory: "Tinder", 
  usages: "ghép Nam/Nữ", 
  cooldowns: 10
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
   const axios = require('axios');
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
  var thinh = (await axios.get("https://api-kainriyu-project.onrender.com/Poem/love")).data.data;
/*var data = await Currencies.getData(event.senderID);
var money = data.money
if( money = 0) api.sendMessage(`Bạn muốn 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 à kiếm đủ 1000$ mị mới ghép cho nhé\nSố tiền bạn hiện có: ${money}$`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 1000})*/
	return api.sendMessage(`『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 ⚠️ 』➣ 𝐂𝐡𝐮𝐚̂̉𝐧 𝐁𝐢̣ 𝐆𝐡𝐞́𝐩\n『 🪷 』➣ 𝐏𝐡𝐚̉𝐧 𝐇𝐨̂̀𝐢 Đ𝐞̂̉ 𝐂𝐡𝐨̣𝐧 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🍓 』𝐌𝐄𝐍𝐔『 🍓 』\n𝟏. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝟐 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 💗【 𝐁𝐨𝐲 】\n𝟐. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝟐 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 💗【 𝐆𝐢𝐫𝐥 】\n𝟑. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝟐 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 𝐌𝐚̀𝐮 𝐇𝐨̂̀𝐧𝐠 💓【 𝐁𝐨𝐲 】 \n𝟒. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝟐 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 𝐌𝐚̀𝐮 𝐇𝐨̂̀𝐧𝐠 💓【 𝐆𝐢𝐫𝐥 】 \n𝟓. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 𝐌𝐚̀𝐮 𝐇𝐨̂̀𝐧𝐠 💕【 𝐁𝐨𝐲 】 \n𝟔. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 𝐌𝐚̀𝐮 𝐇𝐨̂̀𝐧𝐠 💕【 𝐆𝐢𝐫𝐥 】 \n𝟕. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 𝐒𝐚̆́𝐜 𝐌𝐚̀𝐮 🌈【 𝐁𝐨𝐲 】\n𝟖. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 𝐒𝐚̆́𝐜 𝐌𝐚̀𝐮 🌈【 𝐆𝐢𝐫𝐥 】\n𝟗. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 ❤【 𝐁𝐨𝐲 】 \n𝟏𝟎. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐓𝐫𝐚́𝐢 𝐓𝐢𝐦 𝐂𝐡𝐮̛̃ 𝐋𝐨𝐯𝐞 ❤【 𝐆𝐢𝐫𝐥 】 \n𝟏𝟏. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐆𝐚̂́𝐮 𝐂𝐮𝐭𝐢 🐻‍❄️【 𝐁𝐨𝐲 】\n𝟏𝟐. 𝐆𝐡𝐞́𝐩 Đ𝐨̂𝐢 𝐇𝐢̀𝐧𝐡 𝐆𝐚̂́𝐮 𝐂𝐮𝐭𝐢 🐻‍❄️【 𝐆𝐢𝐫𝐥 】\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ⚠️ 』➣ 𝐑𝐞𝐩𝐥𝐲 𝐒𝐨̂́ 𝐓𝐡𝐮̛́ 𝐓𝐮̛̣ Đ𝐞̂̉ 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠\n『 🍀 』➣ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐂𝐨́ 𝟔 𝐊𝐢𝐞̂̉𝐮 𝐓𝐢𝐧𝐝𝐞𝐫 Đ𝐞̂̉ 𝐁𝐚̣𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠\n『 📌 』➣ 𝐔𝐩𝐝𝐚𝐭𝐞 𝐒𝐨𝐨𝐧...`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "tinder",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
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
  var thinh = (await axios.get("https://api-kainriyu-project.onrender.com/Poem/love")).data.data;
const tile = (Math.random() * 50)+50;
const emoji = [
    "♥️", "❤️", "💛", "💚", "💙", "💜", "🖤", "💖", "💝", "💓", "💘", "💍", 
    "💗", "💝", "🌹", "🌺", "🌸", "🌼", "💐", "🌻", "🍀", "🍃", "🌿", "✨", 
    "🌟", "🔥", "💫", "🌙", "🌞", "🌍", "🕊️", "🌈", "🦋", "🐦", "🦄", "💋", 
    "👑", "🎉", "🎀", "🥰", "😍", "😘", "😻", "🥳", "🌷", "🍁", "🌺"
];
const random = ["Chúc hai bạn trăm năm hạnh phúc 💍",
    "Chúc hai bạn yêu nhau tới già 🌹",
    "Sớm sinh quý tử nhé! 👶",
    "Mãi mãi bên nhau nhé! 💕",
    "Chúc hai bạn sớm nên duyên vợ chồng 💑",
    "Chúc đôi bạn hạnh phúc trọn đời 🥰",
    "Yêu nhau thật lâu và mãi bên nhau 💖",
    "Chúc tình yêu của các bạn như hoa nở mãi 🌺",
    "Chúc hai bạn mỗi ngày đều ngập tràn hạnh phúc 🌟",
    "Mong rằng tình yêu của hai bạn sẽ bền lâu như thiên thu 🌙",
    "Mong hai bạn bên nhau suốt đời, không xa rời ✨",
    "Chúc tình yêu của bạn bền vững như những ngôi sao trên bầu trời 🌠",
    "Chúc hai bạn luôn ở bên nhau trong mọi hoàn cảnh 🌸",
    "Mong đôi bạn sẽ luôn yêu thương và ủng hộ nhau mỗi ngày 💐",
    "Chúc hai bạn một cuộc sống ngọt ngào như mía lùi 🍯",
    "Chúc tình yêu của hai bạn ngày càng thăng hoa 🌷",
    "Mong hai bạn luôn giữ được sự ngọt ngào trong tình yêu 💌",
    "Chúc hai bạn luôn tìm thấy niềm vui trong từng khoảnh khắc bên nhau 🕊",
    "Mong tình yêu này sẽ mãi vững bền như đá 🌑",
    "Chúc hai bạn luôn làm chủ trái tim của nhau 💓",
    "Chúc hai bạn mãi là một đôi đẹp nhất trên đời 💕"
];
    switch(handleReply.type) {
        case "tinder": {
          switch(event.body) {
					case "1": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/8hc4uzL.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
          case "2": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/8hc4uzL.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
         var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "3": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Dmnn6fR.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "4": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Dmnn6fR.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "5": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/9FaZgbt.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "6": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/9FaZgbt.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
         case "7": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/s0QwjWj.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
            var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "8": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/s0QwjWj.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "9": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/stOFHg4.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "10": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/stOFHg4.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "11": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/eFrT3jV.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "12": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/eFrT3jV.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

           var msg = {body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${tile.toFixed(2)}%\n『 ${random[Math.floor(Math.random() * random.length)]} 』\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n『 🍓 』 ➣ 𝐓𝐢𝐧𝐝𝐞𝐫 𝐁𝐲 ${global.config.BOTNAME}\n▭▭▭▭『 𝐌𝐞𝐢🥀 』▭▭▭▭\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
          }