module.exports = function ({ api, models }) {
setInterval(function () {
		if(global.config.NOTIFICATION) {			require("./handle/handleNotification.js")({ api });
		}
	}, 1000*60);
    const fs = require("fs");
	  const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");
	const moment = require("moment-timezone");
  const config = require('./../config.json');
	const axios = require("axios");
  var day = moment.tz("Asia/Ho_Chi_Minh").day();
   const timenow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    var _checked = true;
    const allicon = [
  "🌈", "✨", "💫", "🎈", "🧸", "🎉", "🎂", "🍭", "🍬", "🍩",
  "🍓", "🍒", "🍉", "🥝", "🌻", "🦋", "🐣", "🐱", "🐶", "🦄",
  "🐥", "🌺", "💌", "💟", "🎀", "🧁", "🦊", "🍄", "🌞", "❄️",
  "🍯", "🌵", "🐻", "🌼", "🌺", "🎶", "🍰", "🍪", "🫧", "🍦",
  "🪅", "🥳", "🐥", "🐰", "🪴", "🐢", "🐼", "🐹", "🌙", "🪐",
  "💖", "🌸", "💝", "🍃", "🎈", "🍰", "🧸", "🐨", "🐧", "🍦",
  "🌊", "🌌", "🌹", "🌿", "🕊️", "🧃", "🎊", "🐞", "🐳", "🐚",
  "🦩", "🌷", "💎", "🎠", "🍉", "🍭", "🍀", "🍫", "🦕", "🐢",
  "🍔", "🥞", "🛼", "🐯", "🍕", "🧋", "🪶", "💐", "🥂", "💜",
  "🐙", "🌻", "🍁", "🪷", "🦦", "🦔", "🐬", "🪸", "🍒", "🍇"
];
    const icon = allicon[Math.floor(Math.random()*allicon.length)];
     const icon2 = allicon[Math.floor(Math.random()*allicon.length)];
     const icon3 = allicon[Math.floor(Math.random()*allicon.length)];
    const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const poem = require('./../YaeMiko ProjectS/Poem/love.json');
  var thinh = poem[Math.floor(Math.random() * poem.length)].trim();
  
    const checkttDataPath = __dirname + '/../YaeMiko Modules/commands/tt/';
    var gio = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');

  setInterval(async() => {
    const day_now = moment.tz("Asia/Ho_Chi_Minh").day();
    if (day != day_now) {
      day = day_now;
      const checkttData = fs.readdirSync(checkttDataPath);
      console.log('--> CHECKTT: Ngày Mới');
      checkttData.forEach(async (checkttFile) => {
        const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
        let storage = [], count = 1;
        for (const item of checktt.day) {
          const userName = await Users.getNameUser(item.id) || 'Facebook User';
          const itemToPush = item;
          itemToPush.name = userName;
          storage.push(itemToPush);
        };
        storage.sort((a, b) => {
          if (a.count > b.count) {
            return -1;
          }
          else if (a.count < b.count) {
            return 1;
          } else {
            return a.name.localeCompare(b.name);
          }
        });
        var haha = `\n💬 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${storage.reduce((a, b) => a + b.count, 0)}\n━━━━━━━━━━━━━━━
💓 𝗖𝗮́𝗰 𝗯𝗮̣𝗻 𝗸𝗵𝗮́𝗰 𝗰𝗼̂́ 𝗴𝗮̆́𝗻 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗹𝗲̂𝗻 𝘁𝗼𝗽 𝗻𝗵𝗮\n⏰===「 ${gio} 」===⏰`;
        let checkttBody = '📅『 𝗧𝗢𝗣 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗡𝗚𝗔̀𝗬 』📅\n━━━━━━━━━━━━━━━\n『🦋』➜ 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗮̀𝗼 𝗹𝘂́𝗰 𝟬:𝟬𝟬:𝟬𝟬 𝗔𝗠 𝗵𝗮̆̀𝗻𝗴 𝗻𝗴𝗮̀𝘆\n━━━━━━━━━━━━━━━━━\n\n';
        checkttBody += storage.slice(0, 10).map(item => {
          return `→${count++}. ${item.name} 𝗩𝗼̛́𝗶 (${item.count}) 𝗧𝗶𝗻 𝗻𝗵𝗮̆́𝗻`;
        }).join('\n');
        api.sendMessage({body:checkttBody,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-ziess.glitch.me/Vd/anime')).data.data,
method: "GET",
responseType: "stream"
})).data
}, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
        checktt.day.forEach(e => {
          e.count = 0;
        });
        checktt.time = day_now;

        fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
      });
      if (day_now == 1) {
        console.log('--> CHECKTT: Tuần Mới');
        checkttData.forEach(async (checkttFile) => {
          const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
          let storage = [], count = 1;
          for (const item of checktt.week) {
            const userName = await Users.getNameUser(item.id) || 'Facebook User';
            const itemToPush = item;
            itemToPush.name = userName;
            storage.push(itemToPush);
          };
          storage.sort((a, b) => {
            if (a.count > b.count) {
              return -1;
            }
            else if (a.count < b.count) {
              return 1;
            } else {
              return a.name.localeCompare(b.name);
            }
          });
          let checkttBody = '📅『 𝗧𝗢𝗣 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗨𝗔̂̀𝗡 』📅\n━━━━━━━━━━━━━━━\n『🦋』➜ 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗮̀𝗼 𝗹𝘂́𝗰 𝟬:𝟬𝟬:𝟬𝟬 𝗔𝗠 𝗵𝗮̆̀𝗻𝗴 𝗻𝗴𝗮̀𝘆\n━━━━━━━━━━━━━━━━━\n\n';
          checkttBody += storage.slice(0, 10).map(item => {
            return `→${count++}. ${item.name} 𝗩𝗼̛́𝗶(${item.count})𝗧𝗶𝗻 𝗻𝗵𝗮̆́𝗻`;
          }).join('\n');
          api.sendMessage({body:checkttBody, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-ziess.glitch.me/Vd/anime')).data.data,
method: "GET",
responseType: "stream"
})).data
},checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
          checktt.week.forEach(e => {
            e.count = 0;
          });

          fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
        })
      }
      global.client.sending_top = false;
    }
  }, 1000 * 10);
     /////////////////////////
    //========= Push all variable from database to environment =========//
    //////////////////////////////////////////////////////////////////////

    (async function () {

        try {
            logger(global.getText('listen', 'startLoadEnvironment'), '[ LOADING-DATABASE ]');
            let threads = await Threads.getAll(),
                users = await Users.getAll(['userID', 'name', 'data']),
                currencies = await Currencies.getAll(['userID']);
            for (const data of threads) {
                const idThread = String(data.threadID);
                global.data.allThreadID.push(idThread),
                    global.data.threadData.set(idThread, data['data'] || {}),
                    global.data.threadInfo.set(idThread, data.threadInfo || {});
                if (data['data'] && data['data']['banned'] == !![])
                    global.data.threadBanned.set(idThread,
                        {
                            'reason': data['data']['reason'] || '',
                            'dateAdded': data['data']['dateAdded'] || ''
                        });
                if (data['data'] && data['data']['commandBanned'] && data['data']['commandBanned']['length'] != 0)
                    global['data']['commandBanned']['set'](idThread, data['data']['commandBanned']);
                if (data['data'] && data['data']['NSFW']) global['data']['threadAllowNSFW']['push'](idThread);
            }
            logger.loader(global.getText('listen', 'loadedEnvironmentThread'));
            for (const dataU of users) {
                const idUsers = String(dataU['userID']);
                global.data['allUserID']['push'](idUsers);
                if (dataU.name && dataU.name['length'] != 0) global.data.userName['set'](idUsers, dataU.name);
                if (dataU.data && dataU.data.banned == 1) global.data['userBanned']['set'](idUsers, {
                    'reason': dataU['data']['reason'] || '',
                    'dateAdded': dataU['data']['dateAdded'] || ''
                });
                if (dataU['data'] && dataU.data['commandBanned'] && dataU['data']['commandBanned']['length'] != 0)
                    global['data']['commandBanned']['set'](idUsers, dataU['data']['commandBanned']);
            }
            for (const dataC of currencies) global.data.allCurrenciesID.push(String(dataC['userID']));
            logger.loader(global.getText('listen', 'loadedEnvironmentUser')), logger(global.getText('listen', 'successLoadEnvironment'), '[ Dữ liệu ]');
        } catch (error) {
            return logger.loader(global.getText('listen', 'failLoadEnvironment', error), 'error');
        }
    }());
    const admin = config.ADMINBOT; 
    logger("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓", "〈 Nino 〉");
      for(let i = 0; i <= admin.length -1; i++){
        dem = i + 1
        logger(` ID ADMIN ${dem}: ${(!admin[i]) ? "Trống" : admin[i]}`, "〈 Nino 〉");
      }
      logger(` ID BOT: ${api.getCurrentUserID()}`, "〈 Nino 〉");
      logger(` PREFIX: ${global.config.PREFIX}`, "〈 Nino 〉");
      logger(` NAME BOT: ${(!global.config.BOTNAME) ? "Mirai KainDev" : global.config.BOTNAME}`, "〈 Nino 〉");
      logger("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛", "〈 Nino 〉");
    ///////////////////////////////////////////////
    //========= Require all handle need =========//
    //////////////////////////////////////////////

    const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
    const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
    const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
    const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
  const handleRefresh = require("./handle/handleRefresh")({  api, Threads, Users, Currencies, models });
    const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
    const handleCreateDatabase = require("./handle/handleCreateDatabase")({ api, Threads, Users, Currencies, models });
  const handleUnsend = require("./handle/handleUnsend")({ api });

    //DEFINE DATLICH PATH
    const datlichPath = __dirname + "/../YaeMiko Modules/commands/hethong/datlich.json";

    //FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
    const monthToMSObj = {
        1: 31 * 24 * 60 * 60 * 1000,
        2: 28 * 24 * 60 * 60 * 1000,
        3: 31 * 24 * 60 * 60 * 1000,
        4: 30 * 24 * 60 * 60 * 1000,
        5: 31 * 24 * 60 * 60 * 1000,
        6: 30 * 24 * 60 * 60 * 1000,
        7: 31 * 24 * 60 * 60 * 1000,
        8: 31 * 24 * 60 * 60 * 1000,
        9: 30 * 24 * 60 * 60 * 1000,
        10: 31 * 24 * 60 * 60 * 1000,
        11: 30 * 24 * 60 * 60 * 1000,
        12: 31 * 24 * 60 * 60 * 1000
    };
    const checkTime = (time) => new Promise((resolve) => {
        time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
        const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
        if (time[1] > 12 || time[1] < 1) resolve("Tháng của bạn có vẻ không hợp lệ");
        if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Ngày của bạn có vẻ không hợp lệ");
        if (time[2] < 2022) resolve("Bạn sống ở kỷ nguyên nào thế");
        if (time[3] > 23 || time[3] < 0) resolve("Giờ của bạn có vẻ không hợp lệ");
        if (time[4] > 59 || time[3] < 0) resolve("Phút của bạn có vẻ không hợp lệ");
        if (time[5] > 59 || time[3] < 0) resolve("Giây của bạn có vẻ không hợp lệ");
        yr = time[2] - 1970;
        yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
        yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
        monthToMS = 0;
        for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
        if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
        dayToMS = time[0] * 24 * 60 * 60 * 1000;
        hourToMS = time[3] * 60 * 60 * 1000;
        minuteToMS = time[4] * 60 * 1000;
        secondToMS = time[5] * 1000;
        oneDayToMS = 24 * 60 * 60 * 1000;
        timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
        resolve(timeMs);
    });


    const tenMinutes = 10 * 60 * 1000;

    const checkAndExecuteEvent = async () => {

        /*smol check*/
        if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
        var data = JSON.parse(fs.readFileSync(datlichPath));

        //GET CURRENT TIME
        var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
        timeVN = timeVN.split("_");
        timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

        let temp = [];
        let vnMS = await checkTime(timeVN);
        const compareTime = e => new Promise(async (resolve) => {
            let getTimeMS = await checkTime(e.split("_"));
            if (getTimeMS < vnMS) {
                if (vnMS - getTimeMS < tenMinutes) {
                    data[boxID][e]["TID"] = boxID;
                    temp.push(data[boxID][e]); delete data[boxID][e];
                } else delete data[boxID][e];
                fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
            };
            resolve();
        })

        await new Promise(async (resolve) => {
            for (boxID in data) {
                for (e of Object.keys(data[boxID])) await compareTime(e);
            }
            resolve();
        })
        for (el of temp) {
            try {
                var all = (await Threads.getInfo(el["TID"])).participantIDs;
                all.splice(all.indexOf(api.getCurrentUserID()), 1);
                var body = el.REASON || "🥰🥰🥰", mentions = [], index = 0;

                for (let i = 0; i < all.length; i++) {
                    if (i == body.length) body += " ‍ ";
                    mentions.push({
                        tag: body[i],
                        id: all[i],
                        fromIndex: i - 1
                    });
                }
            } catch (e) { return console.log(e); }
            var out = {
                body, mentions
            }
            if ("ATTACHMENT" in el) {
                out.attachment = [];
                for (a of el.ATTACHMENT) {
                    let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer" })).data;
                    fs.writeFileSync(__dirname + `/../YaeMiko Modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
                    out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
                }
            }
            console.log(out);
            if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
            api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../YaeMiko Modules/commands/cache/${a.fileName}`)) : "");
        }

    }
    setInterval(checkAndExecuteEvent, tenMinutes / 10);
    //////////////////////////////////////////////////
    //========= Send event to handle need =========//
    /////////////////////////////////////////////////
return async (event) => {
    if (global.config.duyetbox == true) {
    let data = JSON.parse(fs.readFileSync(__dirname + "/../YaeMiko Modules/commands/hethong/approvedThreads.json"));
       // let threadInfo = await api.getThreadInfo(event.threadID);
		//let threadName = threadInfo.threadName;
    let dataThread = (await Threads.getData(event.threadID)).threadInfo;
    let threadInfo = await api.getThreadInfo(event.threadID);
    let threadName = threadInfo.threadName ? `${threadInfo.threadName}` : `${await Users.getNameUser(event.threadID)}`;
    let adminBot = global.config.ADMINBOT;
    let pendingPath = __dirname + "/../YaeMiko Modules/commands/hethong/pendingdThreads.json";
    if (!data.includes(event.threadID) && !adminBot.includes(event.senderID)) {
      //getPrefix
      const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s");
      //check body
      if (event.body == `duyetbox` || event.body == `Duyetbox` || event.body == `DUYETBOX` || event.body == `${prefix}duyetbox`){
		  adminBot.forEach(e => {
          api.sendMessage(`━━━━━━━🌟【 𝐘𝐄̂𝐔 𝐂𝐀̂̀𝐔 𝐃𝐔𝐘𝐄̣̂𝐓 】🌟━━━━━━━\n📌 𝐍𝐡𝐨́𝐦: ${threadName}\n🆔 𝐈𝐃: ${event.threadID}\n⏰ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${time}\n⚠️ 𝐓𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢: Đ𝐚𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐛𝐚̣𝐧 𝐝𝐮𝐲𝐞̣̂𝐭.\n🎉 𝐇𝐚̃𝐲 𝐤𝐢𝐞̂̉𝐦 𝐭𝐫𝐚 𝐧𝐡𝐨́𝐦 𝐯𝐚̀ 𝐜𝐨𝐧𝐠 𝐧𝐡𝐚̣̂𝐧 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐧𝐞̂́𝐮 𝐩𝐡𝐮̀ 𝐡𝐨̛̣𝐩. 𝐂𝐚̉𝐦 𝐨̛𝐧 𝐛𝐚̣𝐧 𝐯𝐢̀ 𝐬𝐮̛̣ 𝐡𝐨̛̣𝐩 𝐭𝐚́𝐜! 🙏`, e);
        })
        return api.sendMessage(`➝ Đã gửi yêu cầu phê duyệt đến các Admin lúc: ${time}\n➝ Vui lòng chờ...`, event.threadID, () => {
			let pendingData = JSON.parse(fs.readFileSync(pendingPath));
			if (!pendingData.includes(event.threadID) || !pendingData.includes(event.senderID)) {
			  pendingData.push(event.threadID || event.senderID);
			fs.writeFileSync(pendingPath, JSON.stringify(pendingData));
			}
		  });
      }

      if (event.body && event.body.startsWith(prefix)) return api.sendMessage(`🌟【 𝐊𝐈𝐄̂̉𝐌 𝐃𝐔𝐘𝐄̣̂𝐓 】🌟\n- 𝐁𝐨𝐱 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭.\n❗️ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 để được hỗ trợ:\n📬 → fb.com/AhriCuuViThienHo\n🚀 𝐂𝐚̉𝐦 𝐨̛𝐧 𝐛𝐚̣𝐧 𝐯𝐢̀ đ𝐚̃ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐝𝐢̣𝐜𝐡 𝐯𝐮̣ 𝐜𝐮̉𝐚 𝐜𝐡𝐮́𝐧𝐠 𝐭𝐨̂𝐢!`, event.threadID);
    }
    };
         switch (event.type) {
       //<--Thay đổi ảnh nhóm-->//
           case "change_thread_image": 
             if(global.config.notiGroup) {
           var msg = '『🌺』𝐔𝐏𝐃𝐀𝐓𝐄 𝐆𝐑𝐎𝐔𝐏『🌺』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『📢』➣ '
           msg += event.snippet
           if(event.author == api.getCurrentUserID()) {
             msg = msg.replace('Bạn', global.config.BOTNAME)
           }
           return api.sendMessage({
     body: `${msg}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🌿 』 ➣ 𝐘𝐚𝐞𝐌𝐢𝐤𝐨 ${icon} 𝐍𝐢𝐧𝐨 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐒\n『 🍓 』 ➣ 𝐓𝐤𝐬! 𝐔𝐬𝐢𝐧𝐠 𝐅𝐨𝐫 𝐘𝐚𝐞𝐌𝐢𝐤𝐨 ${icon2} 𝐍𝐢𝐧𝐨 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐒\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰️ 』 ➣ 𝐓𝐢𝐦𝐞: 『 ${time} 』\n\n『 𝐋𝐨𝐯𝐞 𝐘𝐚𝐞𝐌𝐢𝐤𝐨${icon3}𝐑𝐚𝐢𝐝𝐞𝐧𝐄𝐢 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐌𝐲 𝐋𝐨𝐯𝐞${icon3}𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』`, attachment: (await axios.get((await axios.get(`https://api-kainriyu-project-yv9i.onrender.com/animevipv2`)).data.data, {
            responseType: 'stream'
        })).data
           }, event.threadID);
         }
             break;
           //<--Nhận, xử lí dữ liệu-->//
       case "message":
       case "message_reply":
       case "message_unsend":
         handleCreateDatabase({ event });
         handleCommand({ event });
         handleReply({ event });
         handleCommandEvent({ event });

         break;
       //<--Nhận tin nhắn, thông báo thay đổi nhóm-->//
       case "event":
         handleEvent({ event });
         handleRefresh({ event });
         if(global.config.notiGroup) {
           var msg = '『🌺』𝐔𝐏𝐃𝐀𝐓𝐄 𝐆𝐑𝐎𝐔𝐏『🌺』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『📢』➣ '
           msg += event.logMessageBody
           if(event.author == api.getCurrentUserID()) {
             msg = msg.replace('Bạn', global.config.BOTNAME)
           }
           return api.sendMessage({
     body: `${msg}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐂𝐡𝐢𝐞̂𝐮 𝐇𝐨̂̀𝐧 𝐓𝐡𝐢𝐞̂𝐧 𝐇𝐨̂̀ 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🌿 』 ➣ 𝐘𝐚𝐞𝐌𝐢𝐤𝐨 ${icon} 𝐍𝐢𝐧𝐨 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐒\n『 🍓 』 ➣ 𝐓𝐤𝐬! 𝐔𝐬𝐢𝐧𝐠 𝐅𝐨𝐫 𝐘𝐚𝐞𝐌𝐢𝐤𝐨 ${icon2} 𝐍𝐢𝐧𝐨 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐒\n『 💬 』 ➣ 𝐓𝐡𝐢́𝐧𝐡: 『 ${thinh} 』\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『 ⏰️ 』 ➣ 𝐓𝐢𝐦𝐞: 『 ${time} 』\n\n『 𝐋𝐨𝐯𝐞 𝐘𝐚𝐞𝐌𝐢𝐤𝐨${icon3}𝐑𝐚𝐢𝐝𝐞𝐧𝐄𝐢 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐌𝐲 𝐋𝐨𝐯𝐞${icon3}𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』`, attachment: (await axios.get((await axios.get(`https://api-kainriyu-project-yv9i.onrender.com/animevipv2`)).data.data, {
                     responseType: 'stream'
                 })).data
           }, event.threadID);
         }

break;
//<--Nhận cảm xúc-->//
      case "message_reaction":
        var { iconUnsend } = global.config
        if(iconUnsend.status && event.senderID == api.getCurrentUserID() && event.reaction == iconUnsend.icon) {
          api.unsendMessage(event.messageID)
        }
        handleReaction({ event });
        break;
      default:
        break;
    }
  };
};
