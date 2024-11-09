module.exports.config = {
    name: "ad",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Văn Tân", //Mod By Ahri
    description: "",
    commandCategory: "𝐍𝐨 𝐏𝐫𝐞𝐟𝐢𝐱",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }

};

module.exports.onLoad = () => {
    const axios = require('axios');
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });

    if (!fs.existsSync(dirMaterial + "ad1.mp4")) request("https://i.imgur.com/Dmf88xO.jpeg").pipe(fs.createWriteStream(dirMaterial + "ad1.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🐾","🪷","🌿","☘️","🍀","🍓","🍰","🔮","🍒"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
    const dcm = process.uptime(); 
    var ahri = Math.floor(dcm / (60 * 60));
    var ht = Math.floor((dcm % (60 * 60)) / 60);
	  var bt = Math.floor(dcm % 60);
	  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY');
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    var msg = {
               
                body: `『 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${name} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n◆━━━◆『 ${icon} 』◆━━━◆\n𝐘𝐚𝐞 𝐌𝐢𝐤𝐨 - 𝐍𝐚𝐫𝐮𝐤𝐚𝐦𝐢 𝐒𝐡𝐫𝐢𝐧𝐞\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🌿 』 ➣ 𝐀𝐝𝐦𝐢𝐧 𝐂𝐮̉𝐚 𝐁𝐨𝐭 - 𓂄𓆩𑁍𝑨𝒉𝒓𝒊𑁍𓆪𓂁\n『 🍓 』 ➣ 𝐋𝐢𝐧𝐤: Fb.me//KainFoxy.1911\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${time} 』`,

                attachment:  fs.createReadStream(__dirname + `/noprefix/ad1.mp4`) }

    if (event.body.toLowerCase() == "Admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "admin bot"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ahri"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

                       }