module.exports.config = {
  name: "sendmedia",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Gửi ảnh từ API KainRiyuProject",
  commandCategory: "Random-IMG",
  usages: "sendmedia",
  cooldowns: 0,
  dependencies: {
    "axios": ""
  }
};

const axios = require('axios');
const fs = require('fs');
const { fetchAndSaveMedia } = require('./../../YaeMiko ProjectS/Data/ApiData/apiService.js'); 
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
const tempMediaPath = await fetchAndSaveMedia();
    // Gửi yêu cầu đến API lấy bài thơ
    const poemResponse = await axios.get('https://api-kainriyu-project.onrender.com/poem/love');
    const poem = poemResponse.data.data;

    if (!poem) {
      return api.sendMessage("Không tìm thấy ảnh hoặc bài thơ nào.", threadID);
    }

    // Tải ảnh từ URL

    // Gửi ảnh và bài thơ đến người dùng
    api.sendMessage({
      body: `『 🍓 』𝐒𝐄𝐍𝐃𝐌𝐄𝐃𝐈𝐀『 🍓 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n『 🌺 』 ➣ 𝐀̉𝐧𝐡 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐍𝐞̀! \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${poem} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ${gio} || ${ngay} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』`,
                  attachment: fs.createReadStream(tempMediaPath)
        }, event.threadID, () => {
            // Xóa file sau khi gửi xong
            fs.unlink(tempMediaPath, (err) => {
                if (err) console.error("Không thể xóa tệp tin:", err);
            });
        });

    } catch (error) {
        console.error(error);
        return api.sendMessage("Đã có lỗi xảy ra khi gửi media.", event.threadID, event.messageID);
    }
};
