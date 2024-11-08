module.exports.config = {
  name: "console",
  version: "1.1.0",
  hasPermssion: 3,
  credits: "Niiozic",//Quất đz làm chống lag
  description: "Làm cho console đẹp hơn + mod chống spam lag console",
  commandCategory: "No prefix",
  usages: "console",
  cooldowns: 30
};

var isConsoleDisabled = false,
  num = 0,
  max = 15,
  timeStamp = 0;
function disableConsole(cooldowns) {
  console.log(`Kích hoạt chế độ chống lag console trong ${cooldowns}s`);
  isConsoleDisabled = true;
  setTimeout(function () {
    isConsoleDisabled = false;
    console.log("Tắt chế độ chống lag ✅");
  }, cooldowns * 1000);
}

module.exports.handleEvent = async function ({
  api,
  args,
  Users,
  event
}) {
  let {
    messageID,
    threadID,
    senderID,
    mentions
  } = event;
  try {
    const dateNow = Date.now();
    // if (dateNow - timeStamp < this.config.cooldowns * 1000) return;
    if (isConsoleDisabled) {
      return;
    }

    const l = require("chalk");
    const m = require("moment-timezone");
    const moment = require('moment-timezone');
    var n = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
    const o = global.data.threadData.get(event.threadID) || {};
    if (typeof o.console !== "undefined" && o.console == true) {
      return;
    }
    ;
    if (event.senderID == global.data.botID) {
      return;
    }
    ;
    num++
    const threadInfo = await api.getThreadInfo(event.threadID)
    var p = threadInfo.threadName || "Nonmae";
    var q = await Users.getNameUser(event.senderID);
    var r = event.body || "Ảnh, video hoặc kí tự đặc biệt";
    console.log(`${l.hex("#FF66FF")("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${l.hex("#CC66FF")(`┣➤ Tên nhóm: ${p}`)}
${l.hex("#9966FF")(`┣➤ ID nhóm: ${event.threadID}`)}
${l.hex("#6666FF")(`┣➤ Tên người dùng: ${q}`)} 
${l.hex("#3366FF")(`┣➤ ID người dùng: ${event.senderID}`)}
${l.hex("#0066FF")(`┣➤ Nội dung: ${r}`)}
${l.hex("#0033FF")(`┣➤ Thời gian: ${n}`)}
${l.hex("#0000FF")("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}
${l.hex("#FFFF00")("━━━━━━━━━━━⭐ 『 NINO🍓 』 ⭐━━━━━━━━━━━")}`);
    timeStamp = dateNow;
    if(Date.now() - timeStamp > 1000) num = 0
    if(Date.now() - timeStamp < 1000){
    if(num >= max){
      num = 0
      disableConsole(this.config.cooldowns);
    }
    }
    
  } catch (e) {
    console.log(e);
  }
};

module.exports.run = async function ({
  api: a,
  args: b,
  Users: c,
  event: d,
  Threads: e,
  utils: f,
  client: g
}) {};