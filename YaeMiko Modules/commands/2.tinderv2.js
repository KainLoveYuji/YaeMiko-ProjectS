module.exports.config = {
  name: "tinderv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ahri",
  description: "Ghép đôi có chọn giới tính",
  commandCategory: "Tinder",
  usages: "Nam/Nữ",
  cooldowns: 10
};

const axios = require("axios");
const fs = require("fs-extra");
const token = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

module.exports.run = async ({ api, event, handleReply, Users }) => {
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
  var thinh = (await axios.get("https://api-kainriyu-project-yv9i.onrender.com/Poem/love")).data.data;
  const { threadID, messageID, senderID } = event;

  return api.sendMessage(
    `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🎎 』 ➣ 𝐂𝐡𝐮𝐚̂̉𝐧 𝐛𝐢̣ 𝐦𝐚𝐢 𝐦𝐨̂́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠!\n『 🍓 』 ➣ 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐜𝐡𝐨̣𝐧 𝐠𝐢𝐨̛́𝐢 𝐭𝐢́𝐧𝐡 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐦𝐚̣̆𝐭 "𝐍𝐚𝐦 𝐡𝐨𝐚̣̆𝐜 𝐍𝐮̛̃"\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』`,
    threadID,
    (error, info) => {
      global.client.handleReply.push({
        type: "tinder",
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      });
    }
  );
};

module.exports.handleReply = async ({ api, event, handleReply, Users }) => {
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
  var thinh = (await axios.get("https://api-kainriyu-project-yv9i.onrender.com/Poem/love")).data.data;
  const { threadID, messageID, senderID, body } = event;
  const emojiList = [
    "♥️", "❤️", "💛", "💚", "💙", "💜", "🖤", "💖", "💝", "💓", "💘", "💍", 
    "💗", "💝", "🌹", "🌺", "🌸", "🌼", "💐", "🌻", "🍀", "🍃", "🌿", "✨", 
    "🌟", "🔥", "💫", "🌙", "🌞", "🌍", "🕊️", "🌈", "🦋", "🐦", "🦄", "💋", 
    "👑", "🎉", "🎀", "🥰", "😍", "😘", "😻", "🥳", "🌷", "🍁", "🌺"
];

  const randomMessages = [
    "Chúc hai bạn trăm năm hạnh phúc 💍",
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


  let chosenGender = body.toLowerCase();
  let ThreadInfo = await api.getThreadInfo(threadID);
  let allMembers = ThreadInfo.userInfo.filter(user => user.gender && user.id !== senderID);

  // Gửi tin nhắn đang tìm đối tượng và thu hồi tin nhắn gốc
  api.unsendMessage(handleReply.messageID);
  const waitingMessage = await api.sendMessage("• Vui lòng chờ, bot đang tìm đối tượng phù hợp cho bạn...", threadID);

  let targetGender = chosenGender === "nam" ? "MALE" : "FEMALE";
  let matchedUser = allMembers.find(user => user.gender.toUpperCase() === targetGender);
  if (!matchedUser) return api.sendMessage(`Không tìm thấy người phù hợp.`, threadID);

  let userName = (await Users.getData(senderID)).name;
  let matchedUserName = (await Users.getData(matchedUser.id)).name;
  let matchRate = (Math.random() * 50) + 50;

  const [avatar1, avatar2, loveGif] = await Promise.all([
    axios.get(`https://graph.facebook.com/${matchedUser.id}/picture?height=1500&width=1500&access_token=${token}`, { responseType: "arraybuffer" }),
    axios.get(`https://graph.facebook.com/${senderID}/picture?height=1500&width=1500&access_token=${token}`, { responseType: "arraybuffer" }),
    axios.get("https://i.imgur.com/8hc4uzL.png", { responseType: "arraybuffer" })
  ]);

  fs.writeFileSync(__dirname + "/cache/avt1.png", Buffer.from(avatar1.data, "utf-8"));
  fs.writeFileSync(__dirname + "/cache/avt2.png", Buffer.from(avatar2.data, "utf-8"));
  fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(loveGif.data, "utf-8"));

  const msg = {
    body: `『 🌿 』𝐓𝐈𝐍𝐃𝐄𝐑『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 ${gio} || ${ngay} 』\n『 🌺 』 ➣ 𝐌𝐚𝐢 𝐌𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠!\n『 ❤️ 』 ➣ 𝐓𝐢̉ 𝐋𝐞̣̂ 𝐇𝐨̛̣𝐩 𝐍𝐡𝐚𝐮: ${matchRate.toFixed(2)}%\n『 ${randomMessages[Math.floor(Math.random() * randomMessages.length)]} 』\n『 ${matchedUserName} 』${emojiList[Math.floor(Math.random() * emojiList.length)]}『 ${userName} 』`,
    mentions: [{ id: senderID, tag: userName }, { id: matchedUser.id, tag: matchedUserName }],
    attachment: [
      fs.createReadStream(__dirname + "/cache/avt1.png"),
      fs.createReadStream(__dirname + "/cache/giflove.png"),
      fs.createReadStream(__dirname + "/cache/avt2.png")
    ]
  };

  // Gửi tin nhắn kết quả và thu hồi tin nhắn chờ
  return api.sendMessage(msg, threadID, async () => {
    api.unsendMessage(waitingMessage.messageID);
    fs.unlinkSync(__dirname + "/cache/avt1.png");
    fs.unlinkSync(__dirname + "/cache/avt2.png");
    fs.unlinkSync(__dirname + "/cache/giflove.png");
  });
};
