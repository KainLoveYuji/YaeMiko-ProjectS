module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『 ${global.config.PREFIX} 』➣ ${(!global.config.BOTNAME) ? "Ahri Huyền Thoại Bất Tử" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
        await api.sendMessage("Đang thực hiện kết nối...", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 𝐓𝐤𝐬 𝐔𝐬𝐢𝐧𝐠 𝐅𝐨𝐫 𝐘𝐚𝐞 𝐌𝐢𝐤𝐨 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭! 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 Developed by Ahri Huyền Thoại Bất Tử... 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 Yae Miko Bypass ProjectS... 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 Start Connecting... 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 25%...50%...75%... 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await api.sendMessage("〖 Connection Completed...100% 〗", event.threadID);
        await new Promise(resolve => setTimeout(resolve, 2000));
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`►Terabyte Connection◄\n_________________________\n 『 ${global.config.PREFIX} 』 ➣ ${global.config.BOTNAME}\n𝐓𝐤𝐬 𝐔𝐬𝐢𝐧𝐠 𝐁𝐨𝐭 𝐎𝐟 𝐀𝐡𝐫𝐢\n__________________________\n Nhập ${global.config.PREFIX}menu để xem chi tiết các lệnh \n◆--------------◆\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/ahri.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
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
 			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = '『 🌿 』𝐖𝐄𝐋𝐂𝐎𝐌𝐄『 🌿 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 💮 』 ➣ 𝐂𝐡𝐚̀𝐨 {name}! 𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐁𝐚̣𝐧 Đ𝐞̂́𝐧 𝐕𝐨̛́𝐢 {threadName}\n『 🍓 』 ➣ 𝐂𝐡𝐮́𝐜 {name} 𝟏 𝐍𝐠𝐚̀𝐲 𝐕𝐮𝐢 𝐕𝐞̉\n『 🪷 』 ➣ 𝐁𝐨𝐱 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐂𝐨́ {soThanhVien} 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 🧸 』 ➣ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ {thu}\n『 ⏰️ 』 ➣ 𝐓𝐢𝐦𝐞: 『 {gio} || {ngay} 』\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐘𝐚𝐞 𝐌𝐢𝐤𝐨 - 𝐍𝐚𝐫𝐮𝐤𝐚𝐦𝐢 𝐒𝐡𝐫𝐢𝐧𝐞\n『 𝐀𝐡𝐫𝐢 𝐇𝐮𝐲𝐞̂̀𝐧 𝐓𝐡𝐨𝐚̣𝐢 𝐁𝐚̂́𝐭 𝐓𝐮̛̉ 』' : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐚̣𝐧' : '𝐁𝐚̣𝐧')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{thu}/g, thu)
      .replace(/\{ngay}/g, ngay)
      .replace(/\{gio}/g, gio);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}