module.exports.config = {
  name: "hi",
  version: "3.0.0",
  hasPermssion: 0,
  credit: "Vtuan", // Mod By Ahri
  description: "Gửi sticker và hình ảnh với lời chào",
  commandCategory: "Nhóm",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Threads, Users }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");

  // Lấy thời gian hiện tại
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  const hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');

  // Định nghĩa ngày trong tuần bằng tiếng Việt
  const daysOfWeek = {
    Sunday: '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡',
    Monday: '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖',
    Tuesday: '𝑇ℎ𝑢̛́ 𝐵𝑎',
    Wednesday: '𝑇ℎ𝑢̛́ 𝑇𝑢̛',
    Thursday: '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚',
    Friday: '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢',
    Saturday: '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
  };
  const thu = daysOfWeek[moment.tz('Asia/Ho_Chi_Minh').format('dddd')];

  // Kiểm tra xem thread có bật chế độ 'hi' hay không
  let thread = global.data.threadData.get(event.threadID) || {};
  if (thread["hi"] === false) return;

  const KEYWORDS = ["hello", "hi", "hai", "chào", "chao", "hí", "híí", "hì", "hìì", "lô", "hii", "helo", "hê nhô"];
  if (KEYWORDS.includes(event.body.toLowerCase())) {
    // Tạo ngẫu nhiên sticker và hình ảnh
    const stickerData = ["526214684778630","526220108111421","526220308111401","526220484778050","526220691444696","526220814778017","526220978111334","526221104777988","526221318111300","526221564777942","526221711444594","526221971444568","2523892817885618","2523892964552270","2523893081218925","2523893217885578","2523893384552228","2523892544552312","2523892391218994","2523891461219087","2523891767885723","2523891204552446","2523890691219164","2523890981219135","2523890374552529","2523889681219265","2523889851219248","2523890051219228","2523886944552872","2523887171219516","2523888784552688","2523888217886078","2523888534552713","2523887371219496","2523887771219456","2523887571219476", "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
      "2041011389459668",
      "2041011569459650",
      "2041011726126301",
      "2041011836126290",
      "2041011952792945",
      "2041012109459596",
      "2041012262792914",
      "2041012406126233",
      "2041012539459553",
      "2041012692792871",
      "2041014432792697",
      "2041014739459333",
      "2041015016125972",
      "2041015182792622",
      "2041015329459274",
      "2041015422792598",
      "2041015576125916",
      "2041017422792398",
      "2041020049458802",
      "2041020599458747",
      "2041021119458695",
      "2041021609458646",
      "2041022029458604", 
      "2041022286125245",
      "526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568"
      // ... danh sách các ID sticker
    ];
    const imagesData = require('./../../YaeMiko ProjectS/Data/gaivip.json');
    const sticker = stickerData[Math.floor(Math.random() * stickerData.length)];
    const image1 = imagesData[Math.floor(Math.random() * imagesData.length)].trim();
    const image2 = imagesData[Math.floor(Math.random() * imagesData.length)].trim();
   function ahri(image,htbt,callback){
      request(image).pipe(fs.createWriteStream(__dirname + `/`+htbt)).on("close", callback);
    }
    // Xác định khoảng thời gian trong ngày
    const session = getSession(hours);

    // Tạo ngẫu nhiên lời chúc
    const greetings = ["𝐇𝐚𝐩𝐩𝐲=))", "𝐯𝐮𝐢 𝐯𝐞̉:𝟑", "𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 ❤", "𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐯𝐮𝐢 😘"];
    const text = greetings[Math.floor(Math.random() * greetings.length)];

    // Lấy tên người dùng
    const name = await Users.getNameUser(event.senderID);
    const mentions = [{ tag: name, id: event.senderID }];

    // Hàm tải và gửi hình ảnh
    const sendImage = (imagePath, callback) => {
      request(imagePath).pipe(fs.createWriteStream(__dirname + `/temp.png`)).on("close", callback);
    };

    const callback = () => {
      api.sendMessage({
        body: `❤️✨『 𝐀𝐔𝐓𝐎𝐍𝐎𝐓𝐈 』✨❤️\n━━━━━━━━━━━━━\n➜ 𝐇𝐞𝐥𝐥𝐨 ${name} 𝐜𝐮𝐭𝐢 𝐩𝐡𝐨̂ 𝐦𝐚𝐢 𝐪𝐮𝐞\n『 🌱 』 ➜𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}`,
        attachment:[fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
               }, event.threadID, () => {
                 fs.unlinkSync(__dirname + `/1.png`);
                 fs.unlinkSync(__dirname + `/2.png`);
               },event.messageID);
             };
                 ahri(image1,'1.png',()=>{ahri(image2,'2.png',callback)})
			
    // Gửi sticker sau một khoảng thời gian
    api.sendMessage({}, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({ sticker: sticker }, event.threadID);
      }, 1500);
    }, event.messageID);
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  data["hi"] = !data["hi"];
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] ? getText("on") : getText("off"))} ${getText("successText")}`, threadID, messageID);
}

// Hàm xác định khoảng thời gian trong ngày
function getSession(hours) {
  if (hours > 0001 && hours <= 400) return "𝐬𝐚́𝐧𝐠 𝐭𝐢𝐧𝐡 𝐦𝐨̛";
  if (hours > 401 && hours <= 700) return "𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦";
  if (hours > 701 && hours <= 1000) return "𝐬𝐚́𝐧𝐠";
  if (hours > 1001 && hours <= 1200) return "𝐭𝐫𝐮̛𝐚";
  if (hours > 1201 && hours <= 1700) return "𝐜𝐡𝐢𝐞̂̀𝐮";
  if (hours > 1701 && hours <= 1800) return "𝐜𝐡𝐢𝐞̂̀𝐮 𝐭𝐚̀";
  if (hours > 1801 && hours <= 2100) return "𝐭𝐨̂́𝐢";
  if (hours > 2101 && hours <= 2400) return "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧";
  return "lỗi";
}
