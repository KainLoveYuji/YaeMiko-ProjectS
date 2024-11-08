module.exports.config = {
	name: "lmao",
	version: "1.0.0-beta",
	hasPermssion: 0,
	credits: "Heo Rừng/Niio Team",
	description: "Chơi game tu tiên trên chính box chat của bạn",
	commandCategory: "Game",
	usages: "[tag]",
	cooldowns: 0
};
module.exports.onLoad = function () {
	try {
		global.lmao = require("./lmao/index.js");
		global.configLmao = require("./lmao/config.json");
	}
	catch (e) {
		console.log(e)
	}
}
module.exports.run = async function ({ api, event, args, Users }) {
	var axios = require("axios");
	try {
		var send = (msg, cb) => api.sendMessage(msg, event.threadID, cb, event.messageID);
		switch (args[0]) {
			case "create":
			case "-c":
				return await global.lmao.createCharecter({ Users, api, event });
			case "info":
			case "-i":
				return await global.lmao.getCharacter({ api, event });
			case "train":
			case "-t":
				return await global.lmao.training({ api, event, args });
			case "top":
			case "-t":
				return await global.lmao.getTop({ api, event });
			default:
				var stream = (await axios.get(global.configLmao.lmao, { responseType: 'stream' })).data;
				return api.sendMessage({ body: "[ LMAO ĐẠI LỤC ]\nChào mừng đến với địa ngục ục ục\n────────────────\n1. create: tạo nhân vật\n2. info: xem thông số nhân vật\n3. train: tu luyện\n\n Nhập /lmao + keyword để sử dụng", attachment: stream }, event.threadID, event.messageID);

		}
	}
	catch (e) {
		console.log(e);
	}
}
module.exports.handleReply = async function ({ api, event, Currencies, handleReply }) {
	try {
		let argus = Object.values(arguments);
		if (typeof handleReply.author == 'string' && handleReply.author != event.senderID) return;
		switch (handleReply.type) {
			case 'pvp':
				global.lmao.pvp(argus[0], event.senderID, {
					1: 'list rooms',
					2: 'info room',
					3: 'create room',
				}[event.args[0]]);
				break;
			case 'pvp.rooms':
				global.lmao.pvp.room(argus[0]);
				break;
			case 'pvp.room.info':
				global.lmao.pvp.room(argus[0]);
				break;
			default:
				return;
		}
	}
	catch (e) {
		console.log(e);
	}
}