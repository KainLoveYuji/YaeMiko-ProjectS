module.exports.config = {
  name: "ảnhv2",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "vnhhoang",
  description: "Xem ảnh réply",
  commandCategory: "Tiện ích",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("『 🌺 』𝐕𝐈𝐃𝐄𝐎『 🌺 』\n▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭\n\n𝟭. 𝗩𝗶𝗱𝗲𝗼 𝗔𝗻𝗶𝗺𝗲 📺\n𝟮. 𝗩𝗶𝗱𝗲𝗼 𝗚𝗮́𝗶 🐰\n𝟯. 𝗩𝗶𝗱𝗲𝗼 𝗖𝗵𝗶𝗹𝗹 🎊\n𝟰. 𝗩𝗶𝗱𝗲𝗼 𝗚𝗲𝗻𝘀𝗵𝗶𝗻 ♥️\n𝟱. 𝗔𝗻𝗶𝗺𝗲 𝘃𝟮 🧸\n𝟲. 𝗩𝗶𝗱𝗲𝗼 𝗔𝗻𝗶𝗺𝗲 𝗖𝗵𝗶𝗹𝗹 🌟\n𝟳. 𝗩𝗶𝗱𝗲𝗼 𝘁𝐚̂𝗺 𝘁𝗿𝗮̣𝗻𝗴 💓\n𝟴. 𝗠𝘂𝘀𝗶𝗰 𝗰𝗵𝗶𝗹𝗹\n𝟵. 𝗩𝗶𝗱𝗲𝗼 𝗦𝗵𝘆 🥰\n𝟭𝟬. 𝗩𝗶𝗱𝗲𝗼 𝗨𝘆𝗼 🔮\n『 🦋 』𝐈𝐌𝐀𝐆𝐄𝐒『 🦋 』\n▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭\n\n𝟭𝟭. 𝗔̉𝗻𝗵 𝗚𝗮́𝗶 💞 \n𝟭𝟮. 𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 💕\n𝟭𝟯. 𝗔̉𝗻𝗵 𝗠𝗼̂𝗻𝗴 🍑\n𝟭𝟰. 𝗔̉𝗻𝗵 𝗔𝗶 𝗛𝗼𝘀𝗵𝗶𝗻𝗼 🎀\n𝟭𝟱. 𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 🌚\n𝟭𝟲. 𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 😻\n𝟭𝟳. 𝗔̉𝗻𝗵 𝗦𝗲𝘅𝘆 🔥\n𝟭𝟴. 𝗔̉𝗻𝗵 𝗞𝗮𝗻𝗮 🌸\n𝟭𝟵. 𝗔̉𝗻𝗵 𝗗𝘂́ 🎀\n𝟮𝟬. 𝗔̉𝗻𝗵 𝗔𝗻𝗶𝗺𝗲 💸\n𝟮𝟭. 𝗔̉𝗻𝗵 𝗟𝗼𝗹𝗶 📌\n𝟮𝟮. 𝗔̉𝗻𝗵 𝗛𝗶𝗻𝗮 🌸\n𝟮𝟯. 𝗔̉𝗻𝗵 𝗦𝗲𝗻𝘆𝗮𝗺𝗶𝗸𝘂 🥀\n𝟮𝟰. 𝗔̉𝗻𝗵 𝗣𝗵𝗼𝗻𝗴 𝗖𝗮̉𝗻𝗵 🌻\n𝟮𝟱. 𝗔̉𝗻𝗵 𝗦𝘂𝗴𝗼𝗶 𝗦𝘂𝗴𝗼𝗶 💦\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗧𝗵𝗲𝗼 𝗦𝗧𝗧 𝗔̉𝗻𝗵 𝗛𝗼𝗮̣̆𝗰 𝗩𝗶𝗱𝗲𝗼 𝗕𝗮̣𝗻 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗡𝗵𝗲́ 🐧", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: "[ 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ] →  𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ 🐧️",
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://api-kainriyu-project-yv9i.onrender.com/vdanimev2";
        else if ("2" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/vdgaiv2";
        else if ("3" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/videochill";
        else if ("4" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/vdgenshinv2";
        else if ("5" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/anime";
        else if ("6" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/vdanimechillv2";
        else if ("7" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/vdtamtrangv2";
        else if ("8" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Vdmusicv2";
        else if ("9" == a.body)
         var  h = "https://api-kainriyu-project-yv9i.onrender.com/images/shy";
        else if ("10" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/images/uyo";
        else if ("11" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/Images/girlvip";
        else if ("12" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/trai";
        else if ("13" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/Images/mong";
        else if ("14" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/Kain-Images/aihoshino";
        else if ("15" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/nude";
        else if ("16" == a.body)
          var  h = "https://api-kainriyu-project-yv9i.onrender.com/Images/cosplay2";
        else if ("17" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/girlsexy";
        else if ("18" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/kana";
        else if ("19" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/du";
        else if ("20" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/animevip1";
        else if ("21" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Images/loli";
       else if ("22" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Kain-Images/hina";
      else if ("23" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Kain-Images/hina";
      else if ("24" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/ImagesVip/phongcanh";
      else if ("25" == a.body)
         var   h = "https://api-kainriyu-project-yv9i.onrender.com/Kain-Images/sugoi";
        return { p, h };
    }
};
