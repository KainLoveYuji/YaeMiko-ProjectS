module.exports.config = {
	name:"uptv3",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Mirai Project",
	description: "Random ảnh theo api - uptime",
	commandCategory: "Hệ thống",
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
module.exports.run = async ({ api, event, args }) => {
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
  const { commands } = global.client;
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const axios = require('axios')
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/UTM%20Avo.ttf`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
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
      msg += `Trang ( ${page}/${numPage} )\nDùng ${global.config.PREFIX}${this.config.name} list < số trang >`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 883) +1
  } else {
    var id = k
  }
  const loz = ["https://i.imgur.com/9jbBPIM.jpg","https://i.imgur.com/cPvDTd9.jpg","https://i.imgur.com/ZT8CgR1.jpg","https://i.imgur.com/WhOaTx7.jpg","https://i.imgur.com/BIcgJOA.jpg","https://i.imgur.com/EcJt1yq.jpg","https://i.imgur.com/0dtnQ2m.jpg"]
    const lengthchar = (await axios.get('https://raw.githubusercontent.com/KainLoveYuji/Data_Project/main/dataimganime.json')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1111231.png`;
    let pathAva = __dirname + `/tad/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI((loz[Math.floor(Math.random() * loz.length)])), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id - 1].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(l1, 800, -160, 1100, 1100);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id - 1].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText("Mirai Project", 95, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#fdfdfd";
    ctx.fillText(`${hours} : ${minutes} : ${seconds} `, 180, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("@" + "KainFoxy.1911", 250, 515)
    ctx.fillText("@" + "KainFoxy1911", 250, 575)
   //ctx.fillText("@" + "DVFB.VietLe.pro", 405, 750)
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
