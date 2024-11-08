module.exports.config = {
	name: "uptv2",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai-Team",
  hide: true,
	description: "Random ảnh theo api - uptime",
	commandCategory: "quản trị viên",
	cooldowns: 3,
  dependencies: {
		"pidusage": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args , Threads}) => {
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
  const axios = require('axios')
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const { commands } = global.client;
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/UTM-Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/phenomicon.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/CaviarDreams.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/KainLoveYuji/Data_Project/main/dataanime.json')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://raw.githubusercontent.com/KainLoveYuji/Data_Project/main/dataimganime.json')).data
    console.log(lengthchar.length)
    const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/${id}.png`;
    let pathAva = __dirname + `/tad/${event.senderID}.png`;
    let background = (await axios.get(encodeURI(`https://i.imgur.com/qPK49Z0.png","https://i.imgur.com/pnEadBs.png","https://i.imgur.com/lyGG9BE.png","https://i.imgur.com/NfkDMAP.png","https://i.imgur.com/jGaFwI9.png","https://i.imgur.com/owy3hDP.png","https://i.imgur.com/nOLoKY2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
  ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText("Raiden Ei", 900, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${hours} : ${minutes} : ${seconds} `, 980, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("Kain Naji", 930, 540)
    ctx.fillText("Kain Love Yuji", 930, 610)
    ctx.fillText("ꕤ Kain Najiᰔ", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `「𝐔𝐏𝐓𝐈𝐌𝐄 𝐑𝐎𝐁𝐎𝐓」\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ⏳️ 』 ➣ 𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞: ${hours} 𝐆𝐢𝐨̛̀ ${minutes} 𝐏𝐡𝐮́𝐭 ${seconds} 𝐆𝐢𝐚̂𝐲 💓\n『 ⏰️ 』 ➣ 𝐓𝐢𝐦𝐞: 『 ${timeNow} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🍁 』 ➣ 𝐊𝐚𝐢𝐧𝐑𝐢𝐲𝐮 - 𝐏𝐫𝐨𝐣𝐞𝐜𝐭\n『 ☘️ 』 ➣ 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭: ${global.config.BOTNAME}\n『 🎀 』 ➣ 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n『 🪷 』 ➣ 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n『 🌺 』 ➣𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐁𝐨𝐭: ${commands.size} 𝐋𝐞̣̂𝐧𝐡\n『 📑 』 ➣ 𝐓𝐢̀𝐧𝐡 𝐓𝐫𝐚̣𝐧𝐠 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠: 『Tốt💖』\n『 🌿 』 ➣ 𝐓𝐨̂̉𝐧𝐠 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐃𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n『 🌈 』 ➣ 𝐓𝐨̂̉𝐧𝐠 𝐍𝐡𝐨́𝐦: ${global.data.allThreadID.length}\n『 ⚙️ 』 ➣ 𝐂𝐏𝐔: ${pidusage.cpu.toFixed(1)}%\n『 🗂 』 ➣ 𝐑𝐀𝐌: ${byte2mb(pidusage.memory)}\n『 📒 』 ➣ 𝐈𝐃 𝐍𝐡𝐚̂𝐧 𝐕𝐚̣̂𝐭: ${id}\n『 𓂄𓆩𑁍𝑬𝒍𝒚𝒔𝒊𝒂✿𝒀𝒐𝒖𝒏𝒈𑁍𓆪𓂁 』`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
      }
