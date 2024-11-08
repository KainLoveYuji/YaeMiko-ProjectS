module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Gửi ảnh từ API KainRiyuProject",
  commandCategory: "NSFW",
  usages: "sex",
  cooldowns: 0,
  dependencies: {
    "axios": ""
  }
};

const axios = require('axios');

module.exports.run = async ({ api, event }) => {
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
  const threadID = event.threadID;

  try {
    // Gửi yêu cầu đến API lấy ảnh
    
    var so = [
  "1"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://api-kainriyu-project.onrender.com/Images/sex`);
    return res.data.data;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
    // Gửi yêu cầu đến API lấy bài thơ
    const poemResponse = await axios.get('https://api-kainriyu-project.onrender.com/poem/love');
    const poem = poemResponse.data.data;

    if (!imageUrls || !poem) {
      return api.sendMessage("Không tìm thấy ảnh hoặc bài thơ nào.", threadID);
    }
    // Gửi ảnh và bài thơ đến người dùng
    api.sendMessage({
      body: `『 📒 』𝐈𝐌𝐀𝐆𝐄𝐒『 📒 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: ${poem}\n『 ${gio} || ${ngay} 』\n『 🌱 』 ➣ 𝐀̉𝐧𝐡 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐁𝐞̂𝐧 𝐃𝐮̛𝐨̛́𝐢!`,
      attachment: imgurl
    }, threadID);

  } catch (error) {
    console.error("Lỗi khi gửi yêu cầu đến API:", error);
    api.sendMessage("Đã có lỗi xảy ra khi gửi yêu cầu đến API.", threadID);
  }
};
