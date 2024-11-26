module.exports.config = {
    name: 'goibot',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by Ahri
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Gọi bot',
    usages: '[hey simi]',
    cooldowns: 2,
};
const {
    get
} = require('axios');
const CN = `https://api-kainriyu-project-oofm.onrender.com/sim?type=ask&ask=`
//https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=sim%20%C6%A1i
module.exports.run = () => {};
module.exports.handleEvent = async function( {
    api, event
}) {
const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🐾","🪷","🌿","☘️","🍀","🍓","🍰","🔮","🍒"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
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
var hm =[
    "💓 Kêu bot có gì hok?",
    "🌸 ơi bot nghe nè",
    "🌸 ơi anh/chị bot nghe",
    "💓 có gì hog bot nè",
    "bot nè",
    "💞 kêu em có gì không",
    "💞 em nghe",
    "em đây",
    "hmmmm",
    "😅 Đừng spam em nha :<<",
    "🔥 Đừng để em nóng!!!",
    "cậu gọi bot có gì không?",
    "😑 mệt kêu hoài -.-",
    "📚 Chăm chỉ học hành đi",
    "🍱 Bae ăn cơm chưa?",
    "✈️ Tuyển phi công nè ạ",
    "💕 Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3",
    "🤔 Đang làm gì vậy?",
    "😂 Được của ló :)))",
    "💍 Làm chồng em không ạ?",
    "🚶 đi ga chỗ khác chơi",
    "👸 Công chúa em sao đấy?",
    "🍔 Có gì ăn không:(( đói quáaa",
    "❤️ Yêu em không?",
    "🤯 cậu bị làm sao í@@",
    "🏆 Bạn là nhất!!!",
    "😜 Kêu chi lắm thế? Bộ thích tao rồi à :v",
    "😅 Chần chờ gì chồng ơi em đâyyy",
    "🙄 Em... Sao em lại nói những cái lời đó chi zay em?",
    "📖 Thầy dạy phờ ri màaa",
    "💖 Yeu em rat nhieu ^^",
    "🐷 Đồ con lợn lùn :))",
    "🚽 Đợi xí. Đi ẻ cái :()",
    "💰 500k bao phòng!!!",
    "💘 Yeu anh den luy ^^",
    "💪 Nên nhớ đừng bao giờ cướp vợ của em admin :))",
    "😡 Anh quát em à?\nNói to thế á?",
    "👖 Trả quần cho em huhu",
    "💍 Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3",
    "😂 Tao cười tao đi toilet=))",
    "💔 Hãy nên nhớ, cuộc tình nào cũng có lúc tàn phai",
    "🌹 hoa hồng nở rộ 4 mùa...nối tiếp đi:)",
    "🎶 lalalalaaaa",
    "💔 Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!",
    "🌷 Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔",
    "🍗 Nuôi cậu để thịt ~~",
    "🌃 Overnight không?",
    "📞 Hãy gọi cho admin tôi để được yêu thương<3",
    "🎤 Hát đi cho kẹo 🍭",
    "💍 vợ gọi có việc gì không?",
    "👋 Dzạaaaaa~~~",
    "🙈 gọi bot có gì hemm :3",
    "😃 Dzạ em đây :>",
    "😘 sao thế bae yêu dấu :>",
    "👸 Sao thế công chúa",
    "😂 Được của ló :)))",
    "😭 Nếu một ngày nào đó bạn gọi tôi mà tôi không trả lời nghĩa là bot bị payyy acccc ;-;",
    "👋 Em đây",
    "🤖 chào bạn tôi là bot của (Ahri)",
    "💍 Vợ gọi có việc gì không?",
    "☎️ Sử dụng /callad để liên lạc với admin!",
    "👋 Em đây~~~~",
    "💖 Yêu chị Ahri nhất",
    "💘 chị ấy là bae của Hanh",
    "👸 Sao thế công chúa nhõng nhẽo của em",
    "😢 Đừng làm em đau ~~~~",
    "✈️ Tuyển máy bay trực thăng nè ai yêu em hog",
    "😔 Cậu có cô đơn ko để mik tâm sự",
    "❤️ Yêu ko ạ vã quá!!!",
    "🤖 bot dthw như chủ của bot ạ",
    "😅 Đừng khen anh ngại quá hí hí",
    "💍 Làm vợ anh ko ạ?",
    "😅 Đừng spam anh nha :<<, cậu chủ anh mệt lắm ời",
    "😏 Cút ra😏 tớ có vợ rồi😏🖕",
    "💍 Ai Làm Vợ Em Hog?",
    "🎶 Alaba Trap",
    "⛔ không được spam bot nhé các bae",
    "❤️ Yêu anh ko?",
    "💍 Vợ anh đây rồi",
    "🤖 chủ tớ là thứ hai hong ai là nhất",
    "💍 làm Vợ em đuy😏",
    "👑 Chủ Em Đẹp Zai Khoai To Lắm UwU",
    "❤️ Yêu Tất Cả Mụi Người:3",
    "😏 Tuyển Ghệ nè các bbi😏🖕y ạ :3",
    "💬 Tôi đã học được tìm kiếm hạnh phúc bằng cách giới hạn những ham muốn của mình, hơn là tìm cách thỏa mãn chúng.",
    "🎯 Nếu bạn muốn thành công trong thế giới này, hãy hứa hẹn mọi thứ, và chẳng trao gì đi.",
    "💪 Lòng can đảm không phải là có sức lực để đi tiếp - đó là đi tiếp khi bạn không còn sức lực.",
    "💸 Mục đích của tôn giáo là để ngăn cản kẻ nghèo không giết kẻ giàu.",
    "🦅 Trừ phi bạn giang rộng đôi cánh, bạn sẽ không biết mình bay được bao xa.",
    "💳 Tình bạn có thể giống như các tài khoản ngân hàng. Khi bạn kiếm được tiền, bạn gửi vào tài khoản tiết kiệm, và khi bạn cần tiền, bạn rút tiền. Bạn càng tiết kiệm được nhiều, bạn càng có nhiều để giúp mình vượt qua được thời buổi khó khăn. Tương tự như vậy, khi bạn đối xử tốt với ai đó, bạn bổ sung cho tình bạn (gửi vào 'ngân hàng tin cậy' của mình), và khi bạn làm ai đó tổn thương, bạn dùng bớt tình bạn. Nếu một người bạn cứ mãi rút ra từ tài khoản tình bạn của bạn, người đó sẽ làm nó cạn kiệt theo thời gian.",
    "🔨 Hãy nhớ rằng nợ nần chỉ là một công cụ, giống như búa hoặc cưa. Nó có thể được sử dụng để giúp bạn xây dựng một tương lai tài chính vững mạnh, hoặc đẩy sụp tương lai ấy. Bạn là người quyết định mình muốn sử dụng nó như thế nào.",
    "😠 Những người đáng sợ không phải là người bất đồng ý kiến với bạn, mà là người bất đồng ý kiến với bạn nhưng quá hèn nhát để cho bạn biết điều đó.",
    "🤔 Kẻ ngốc nói về quá khứ, người khôn nói về hiện tại, kẻ khờ nói về tương lai.",
    "💪 Thà sống cuộc đời của riêng mình một cách không hoàn hảo còn hơn bắt chước cuộc đời của người khác một cách hoàn hảo.",
    "📈 Luyện tập không cho bạn sự hoàn hảo.Luyện tập làm giảm sự không hoàn hảo.",
"🎮 Đang chơi game gì đấy?",
"🎤 Hát thử một bài cho bot nghe nào!",
"🍕 Có món ăn yêu thích nào không?",
"💤 Buồn ngủ quá, nghỉ chút đi!",
"🌟 Bạn là ngôi sao sáng nhất hôm nay!",
"😎 Ngầu đấy, tiếp tục phát huy!",
"🚀 Sẵn sàng bay cao chưa?",
"🎉 Chúc mừng bạn đã hoàn thành công việc!",
"🤖 Cần bot giúp gì không?",
"🍀 Chúc bạn một ngày may mắn!",
"🌈 Hãy nhìn vào mặt tích cực của mọi việc nhé!",
"👻 Cẩn thận kẻo bot dọa đấy!",
"🎧 Nghe nhạc gì để relax vậy?",
"🎯 Mục tiêu hôm nay của bạn là gì?",
"🎁 Có món quà gì đặc biệt không?"]
  var t = hm[Math.random()*hm.length<<0]
    if (['bot', 'hi bot','bot đâu','bot off','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bye bot'].includes(event.body.toLowerCase())) {
       api.sendMessage({body: `『 🍓 』𝐘𝐀𝐄 𝐌𝐈𝐊𝐎『 🍓』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay}\n◆━━━◆『 ${icon} 』◆━━━◆ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💝 』 ➣ 𝐃𝐮̀𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐁𝐨𝐭 𝐂𝐨́ 𝐓𝐡𝐞̂̉ 𝐁𝐢𝐞̂́𝐭 𝐓𝐡𝐞̂𝐦 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧\n『 💬 』 ➣ 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠: ${t}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 📒 』 ➣ 𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐁𝐨𝐭 𝐒𝐞̃ 𝐓𝐫𝐚̉ 𝐋𝐨̛̀𝐢 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project-oofm.onrender.com/Images/animevip2')).data.data,
method: "GET",
responseType: "stream"
})).data
  }, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🐾","🪷","🌿","☘️","🍀","🍓","🍰","🔮","🍒"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
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
    const res = await get(`${CN}${encodeURI(event.body)}`);
   if (res.data.error) return api.sendMessage(`${res.data.error}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `『 🍓 』𝐘𝐀𝐄 𝐌𝐈𝐊𝐎『 🍓』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 ${global.data.userName.get(event.senderID)} 𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉ \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰ 』 ➣ 𝐍𝐠𝐚̀𝐲: ${ngay}\n◆━━━◆『 ${icon} 』◆━━━◆ \n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thơ} 』\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💝 』 ➣ 𝐃𝐮̀𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐁𝐨𝐭 𝐂𝐨́ 𝐓𝐡𝐞̂̉ 𝐁𝐢𝐞̂́𝐭 𝐓𝐡𝐞̂𝐦 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧\n『 💬 』 ➣ 𝐁𝐨𝐭 𝐏𝐡𝐚̉𝐧 𝐇𝐨̂̀𝐢: ${res.data.answer}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 📒 』 ➣ 𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐞̂́𝐩 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐁𝐨𝐭 𝐒𝐞̃ 𝐓𝐫𝐚̉ 𝐋𝐨̛̀𝐢 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project-oofm.onrender.com/anime')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};
