module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Ahri",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🐾","🪷","🌿","☘️","🍀","🍓","🍰","🔮","🍒"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
  const timeStart = Date.now();
  /*const res = await axios.get(`https://tan.kizz-kinncuti.repl.co/images/cosplay`);
var tpk = res.data.url;*/
  const moment = require("moment-timezone");
  const ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
     var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
  const time = process.uptime(),
ahri = Math.floor(time / (60 * 60)),
ht = Math.floor((time % (60 * 60)) / 60),
bt = Math.floor(time % 60);
  const dateNow = Date.now();
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "𝐓𝐨̂́𝐭🌿":
  xuly > 10 && xuly < 100 ? "𝐎̂̉𝐧 - 𝐁𝐢̀𝐧𝐡 𝐓𝐡𝐮̛𝐨̛̀𝐧𝐠🌱" : "𝐃𝐞𝐥𝐚𝐲🪷";
var so = [
  "1"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://api-kainriyu-project-yv9i.onrender.com/vdanimev2`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
  const msg = {
    body: `『  ${global.config.BOTNAME}  』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🎀 』 ➣ 𝐒𝐚𝐢 𝐥𝐞̣̂𝐧𝐡 𝐫𝐨̂̀𝐢 𝐛𝐚̣𝐧 𝐨̛𝐢 !!\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay}\n◆━━━◆『 ${icon} 』◆━━━◆ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ⚙️ 』 ➣ 𝐓𝐢̀𝐧𝐡 𝐓𝐫𝐚̣𝐧𝐠 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠: 𝐓𝐨̂́𝐭🌿\n『 🥀 』 ➣ 𝐓𝐨̂́𝐜 𝐃𝐨̣̂ 𝐗𝐮̛̉ 𝐋𝐲́ : ${Date.now() - dateNow} ms\n『 ⏳ 』 ➣ 𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞 : ${ahri} 𝐆𝐢𝐨̛̀ ${ht} 𝐏𝐡𝐮́𝐭 ${bt} 𝐆𝐢𝐚̂𝐲 🧸\n『 𝐌𝐲 𝐋𝐨𝐯𝐞 𝐘𝐚𝐞 𝐌𝐢𝐤𝐨 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${timeNow} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』\n\n𝗧𝗵𝗮̉ 𝗖𝗮̉𝗺 𝗫𝘂́𝗰 "🐾" 𝗩𝗮̀𝗼 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻`,
    attachment: imgurl
};
api.sendMessage(msg, event.threadID, (err, info) => {
        if (err) return console.error(err);
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID
        });
    });
};
if (event.messageID !== handleReaction.messageID || event.senderID !== handleReaction.author) return;
    if (event.reaction !== "🐾") return;
    try {
        const imageUrl = (await axios.get("https://api-kainriyu-project-yv9i.onrender.com/animevipv2")).data.url;
        const imageStream = (await axios({ url: imageUrl, method: "GET", responseType: "stream" })).data;
const menu = {
body: `『 🌿 』𝐌𝐄𝐍𝐔『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🍓 』 ➣ 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐂𝐚́𝐜 𝐋𝐞̣̂𝐧𝐡 𝐏𝐡𝐨̂̉ 𝐁𝐢𝐞̂́𝐧 𝐓𝐡𝐮̛𝐨̛̀𝐧𝐠 𝐃𝐮̀𝐧𝐠\n『 ☘️ 』 ➣ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐂𝐮̉𝐚 𝐁𝐨𝐭\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🍊 』𝐀𝐃𝐌𝐈𝐍『 🍊 』\n『 🌹 』 ➣ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐀𝐝𝐦𝐢𝐧`
attachment: imageStream
    };

    // Gửi menu
    api.sendMessage(menu, event.threadID, (err, info) => {
        if (err) return console.error(err);

        // Lắng nghe sự kiện reaction
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID, // ID tin nhắn gốc
            author: event.senderID // Người gửi menu
        });
    });
} catch (error) {
    console.error("Error sending message:", error);
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
 const moment = require("moment-timezone");
  const ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
     var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const poem = require('./../../YaeMiko ProjectS/Poem/love.json');
  var thơ = poem[Math.floor(Math.random() * poem.length)].trim();
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID,reaction,messageID, userID } = event;
if (event.messageID !== handleReaction.messageID || event.senderID !== handleReaction.author) return;
    if (event.reaction !== "🌹") return;
    const video = require('./../../YaeMiko ProjectS/Data/video.json');
    var video1 = video[Math.floor(Math.random() * video.length)].trim();
    const ext = 'mp4';
    api.unsendMessage(handleReaction.messageID);

    // Tải video từ liên kết và lưu vào cache
    request(video1).pipe(fs.createWriteStream(__dirname + `/cache/adahri.${ext}`)).on("close", () => {
        return api.sendMessage(
            {
                body: `『 🪷 』𝐀𝐃𝐌𝐈𝐍『 🪷 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n
『 🥀 』➣ 𝐓𝐞̂𝐧: Ahri
『 💞 』➣ 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: Ahri ( Hagoromo Gitsune )
『 🍀 』➣ 𝐓𝐮𝐨̂̉𝐢: 31
『 🦋 』➣ 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: ...
『 💝 』➣ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠: \n『 - 』2m 𝐱 85𝐊𝐠
『 ❤️ 』➣ 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: Có Vợ Là Tần Nguyệt
『 🎀 』➣ 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: TP HCM
『 🌺 』➣ 𝐆𝐮: Sao cx được!!🧸
『 💸 』➣ 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: 𝐕𝐮𝐢 𝐓𝐢́𝐧𝐡 , 𝐇𝐨̀𝐚 Đ𝐨̂̀𝐧𝐠, 𝐇𝐚𝐲 𝐂𝐨̣𝐜
『 💫 』➣ 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: 𝐂𝐡𝐨̛𝐢 𝐆𝐚𝐦𝐞
『📝』➣ 𝐁𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐀𝐡𝐫𝐢`,
                attachment: fs.createReadStream(__dirname + `/cache/adahri.${ext}`)
            },
            event.threadID,
            () => fs.unlinkSync(__dirname + `/cache/adahri.${ext}`),
            event.messageID
        );
    });
  else if (reaction == '🍓') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage({body: `==== [ 𝐒𝐡𝐢𝐫𝐚𝐨𝐫𝐢🦋 ] ====
━━━━━━━━━━━━━━━━━━
🐧 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐧
==== [ 𝗡𝗵𝗼́𝗺 𝗼𝗿 𝗯𝗼𝘅 ] ====
━━━━━━━━━━━━━━━━━━
🌸 𝗱𝘂̀𝗻𝗴 /𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
💞 𝗱𝘂̀𝗻𝗴 /𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
👤 /𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🌷 𝗱𝘂̀𝗻𝗴 /𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 /𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅
☠️ /𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 /𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗿𝗼̀ 𝗰𝗵𝗼̛𝗶 𝗼𝗿 𝗴𝗶𝗮̉𝗶 𝘁𝗿𝗶́ ] ====
━━━━━━━━━━━━━━━━━━
💍 /𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ /𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
😻 /𝗴𝗵𝗲𝗽𝗱𝗼𝗶: 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗿𝗲𝗽𝗹𝘆
━━━━━━━━━━━━━━━━━━
==== [ 𝗩𝗶𝗱𝗲𝗼 𝗼𝗿 𝗻𝗵𝗮̣𝗰 ] ====
━━━━━━━━━━━━━━━━━━
💓 /𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 /t𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 /𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
📺 /𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻: 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘂𝗿𝗹
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗶𝗲̣̂𝗻 𝗶́𝗰𝗵 ] ====
━━━━━━━━━━━━━━━━━━
🔗 /𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 /𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 /𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 /𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
📆 /𝗮𝗴𝗲 + 𝗻𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘀𝗶𝗻𝗵 𝗿𝗮
━━━━━━━━━━━━━━━━━━
======『 🦋𝐄𝐢🐅 』======`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project-yv9i.onrender.com/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
}
else if (reaction == '☘️') {
  api.unsendMessage(handleReaction.messageID);
    return api.sendMessage({body: `『 🍊 』𝐁𝐎𝐓 𝐏𝐑𝐎𝐉𝐄𝐂𝐓『 🍊 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💞 』𝐁𝐨𝐭 𝐘𝐚𝐞 𝐌𝐢𝐤𝐨 - 𝐍𝐢𝐧𝐨 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐒\n『 💟 』𝐁𝐨𝐭 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:  ${global.config.VERSION}\n『 🦋 』𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭: 𓂄𓆩𑁍𝑨𝒉𝒓𝒊𑁍𓆪𓂁\n『 🎀 』𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n『 📒 』𝐂𝐨𝐦𝐦𝐚𝐧𝐝 ${client.commands.size} 𝐋𝐞̣̂𝐧𝐡\n『 💝 』𝐓𝐞̂𝐧 𝐁𝐨𝐭: ${global.config.BOTNAME}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ☘️ 』𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: fb.com/AhriCuuViThienHo\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🥀 』𝐓𝐤𝐬 𝐔𝐬𝐢𝐧𝐠 𝐁𝐨𝐭 𝐎𝐟 𝐀𝐡𝐫𝐢\n『 🎀 』𝐁𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐀𝐡𝐫𝐢`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project-yv9i.onrender.com/animevipv2')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
}
  else if (reaction == '😍') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`
🎊 Đ𝗮̂𝘆 𝗹𝗮̀ 𝗠𝗶𝗿𝗮𝗶 𝗯𝗼𝘁 𝗞𝗶𝘇𝘇😻𝗞𝗶𝗻𝗻 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗹𝗮̂́𝘆 𝘁𝘂̛̀ 𝘀𝗿𝗰 𝗱 - 𝗷𝘂𝗸𝗲 𝗰𝘂̉𝗮 𝗱𝗶𝗲̣̂𝗻 𝘃𝗲̂̀ 𝘃𝗮̀ 𝗺𝗼𝗱 𝗹𝗮̣𝗶 đ𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗽𝗵𝗮́𝘁 𝘁𝗿𝗶𝗲̂̉𝗻
𝗠𝗼̣𝗶 𝘁𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻
🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/tony.derby.773
`, event.threadID, event.messageID);
  }
    };
