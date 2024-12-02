const fs = require('fs');
const ytdl = require('@distube/ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
              publishDate:
data.videoDetails.publishDate,                    
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "sing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "tiện ích",
    usages: "[searchMusic]",
    cooldowns: 0
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/1.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('『 🦋 』𝐊𝐡𝐨̂𝐧𝐠 𝐓𝐡𝐞̂̉ 𝐆𝐮̛̉𝐢 𝐅𝐢𝐥𝐞 𝐕𝐢̀ 𝐃𝐮𝐧𝐠 𝐥𝐮̛𝐨̛̣𝐧𝐠 𝐋𝐨̛́𝐧 𝐇𝐨̛𝐧 𝟐𝟓𝐦𝐛\n『 💠 』𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐂𝐡𝐨̣𝐧 𝐁𝐚̀𝐢 𝐊𝐡𝐚́𝐜.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
		body: `『🍓』「𝐌𝐔𝐒𝐈𝐂」『🍓』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ✨️️ 』 ➣ 𝐓𝐢𝐭𝐥𝐞: ${data.title}\n『 🌿 』 ➣ 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${data.author}\n『 ☘️️️ 』 ➣  𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${this.convertHMS(data.dur)}\n『 🍒 』 ➣ 𝐋𝐮̛𝐨̛̣𝐭 𝐱𝐞𝐦: ${data.viewCount}\n『 🌷️️ 』 ➣ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${data.likes}\n『 🍁️️ 』 ➣ 𝗡𝗴𝗮̀𝘆 𝘁𝗮̉𝗶 𝗹𝗲̂𝗻: ${data.publishDate}\n『 🌈️️ 』 ➣ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮̛̉ 𝐥𝐲́: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n『⚘️』「${timeNow}」『⚘️』`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage({body: '▭▭▭『 𝐒𝐈𝐍𝐆 𝐌𝐄𝐍𝐔 』▭▭▭\n『 🦋 』𝐂𝐚́𝐜𝐡 𝐃𝐮̀𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 𝐒𝐢𝐧𝐠 𝐂𝐡𝐨 𝐀𝐢 𝐊𝐡𝐨̂𝐧𝐠 𝐁𝐢𝐞̂́𝐭:\n1. 𝐬𝐢𝐧𝐠 + 𝐓𝐡𝐞̂𝐦 𝐓𝐞̂𝐧 𝐁𝐚̀𝐢 𝐇𝐚́𝐭 𝐁𝐚̣𝐧 𝐌𝐮́𝐧『 𝐂𝐡𝐚́𝐮 𝐘𝐞̂𝐮 𝐁𝐚̀ 』\n2. 𝐬𝐢𝐧𝐠 + 𝐋𝐢𝐧𝐤 𝐘𝐨𝐮𝐭𝐮𝐛𝐞\nꙮꔰꕬꕻꕬꖴꖴꗴ𝐈𝐮𝐄𝐦ꗴꖴꖴꕬꕻꕬꔰꙮ\n『 🌺 』𝐂𝐡𝐮́𝐜 𝐀𝐧𝐡 𝐄𝐦 𝐍𝐠𝐡𝐞 𝐍𝐡𝐚̣𝐜 𝐕𝐮𝐢 𝐕𝐞̉\n『 💞 』𝐒𝐢𝐧𝐠 𝐍𝐚̀𝐲 𝐕𝐚̂̃𝐧 𝐂𝐨̀𝐧 𝐔𝐩𝐝𝐚𝐭𝐞 𝐓𝐡𝐞̂𝐦', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-kainriyu-project-yv9i.onrender.com/anime')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/1.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('『 🦋 』𝐊𝐡𝐨̂𝐧𝐠 𝐓𝐡𝐞̂̉ 𝐆𝐮̛̉𝐢 𝐅𝐢𝐥𝐞 𝐕𝐢̀ 𝐃𝐮𝐧𝐠 𝐥𝐮̛𝐨̛̣𝐧𝐠 𝐋𝐨̛́𝐧 𝐇𝐨̛𝐧 𝟐𝟓𝐦𝐛\n『 💠 』𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐂𝐡𝐨̣𝐧 𝐁𝐚̀𝐢 𝐊𝐡𝐚́𝐜.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `『🍓』「𝐌𝐔𝐒𝐈𝐂」『🍓』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ✨️️ 』 ➣ 𝐓𝐢𝐭𝐥𝐞: ${data.title}\n『 🌿 』 ➣ 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${data.author}\n『 ☘️️️ 』 ➣  𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${this.convertHMS(data.dur)}\n『 🍒 』 ➣ 𝐋𝐮̛𝐨̛̣𝐭 𝐱𝐞𝐦: ${data.viewCount}\n『 🌷️️ 』 ➣ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${data.likes}\n『 🍁️️ 』 ➣ 𝗡𝗴𝗮̀𝘆 𝘁𝗮̉𝗶 𝗹𝗲̂𝗻: ${data.publishDate}\n『 🌈️️ 』 ➣ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮̛̉ 𝐥𝐲́: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n『⚘️』「${timeNow}」『⚘️』`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} ${value.title}\n[⏰] 𝐓𝐢𝐦𝐞: ${value.length.simpleText}\n[📻] 𝐊𝐞̂𝐧𝐡: ${channel}\n---------------------------\n`);
            }
            var body = `➝ [🦖]𝐂𝐨́ ${link.length} 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:\n\n${msg}\n➝ 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
                             } 