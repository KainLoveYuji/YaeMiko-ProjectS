this.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam mod by Niio-team",
    description: "Xem danh sách lệnh và thông tin",
    commandCategory: "Nhóm",
    usages: "[tên lệnh/all]",
    cooldowns: 0
};

this.languages = {
    "vi": {},
    "en": {}
};

this.run = async function({ api, event, args }) {
    const { threadID: tid, messageID: mid, senderID: sid } = event;
    const axios = global.nodemodule['axios'];
    const moment = require("moment-timezone");
    const cmds = global.client.commands;
    const TIDdata = global.data.threadData.get(tid) || {};
    const prefix = TIDdata.PREFIX || global.config.PREFIX;
    const admin = global.config.ADMINBOT;
    const NameBot = global.config.BOTNAME;
    const version = global.config.version;
    const thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
    
    // Dịch tên ngày
    const dayNames = {
        'Sunday': 'Chủ Nhật',
        'Monday': 'Thứ Hai',
        'Tuesday': 'Thứ Ba',
        'Wednesday': 'Thứ Tư',
        'Thursday': 'Thứ Năm',
        'Friday': 'Thứ Sáu',
        'Saturday': 'Thứ Bảy'
    };
    const today = dayNames[thu] || thu;

    let type = args[0] ? args[0].toLowerCase() : "";
    let msg = "";

    if (type === "all") {
        const commandsList = Array.from(cmds.values()).map((cmd, index) => {
            return `\n${index + 1}. 🔹 ${cmd.config.name}\n📝 Mô tả: ${cmd.config.description}\n`;
        }).join('');
        return api.sendMessage(`Danh sách lệnh hiện có:${commandsList}`, tid, mid);
    }

    if (type) {
        const command = Array.from(cmds.values()).find(cmd => cmd.config.name.toLowerCase() === type);
        if (!command) {
            const stringSimilarity = require('string-similarity');
            const commandName = args.shift().toLowerCase() || "";
            const commandValues = Array.from(cmds.keys());
            const checker = stringSimilarity.findBestMatch(commandName, commandValues);
            if (checker.bestMatch.rating >= 0.5) command = cmds.get(checker.bestMatch.target);
            msg = `⚠️ Không tìm thấy lệnh '${type}' trong hệ thống.\n📌 Lệnh gần giống: '${checker.bestMatch.target}'`;
            return api.sendMessage(msg, tid, mid);
        }
        const cmd = command.config;
        msg = `🔎 [ HƯỚNG DẪN SỬ DỤNG ]\n\n📜 Tên lệnh: ${cmd.name}\n🕹️ Phiên bản: ${cmd.version}\n🔑 Quyền Hạn: ${getPermissionText(cmd.hasPermssion)}\n📝 Mô Tả: ${cmd.description}\n🏘️ Nhóm: ${cmd.commandCategory}\n📌 Cách Dùng: ${cmd.usages}\n⏳ Thời gian chờ: ${cmd.cooldowns}s`;
        return api.sendMessage(msg, tid, mid);
    } else {
        const commandsArray = Array.from(cmds.values()).map(cmd => cmd.config);
        const array = [];
        commandsArray.forEach(cmd => {
            const { commandCategory, name: nameModule } = cmd;
            const find = array.find(i => i.cmdCategory === commandCategory);
            if (!find) {
                array.push({
                    cmdCategory: commandCategory,
                    nameModule: [nameModule]
                });
            } else {
                find.nameModule.push(nameModule);
            }
        });

        array.sort(sortBy('nameModule'));
        
        array.forEach(cmd => {
            if (cmd.cmdCategory.toUpperCase() === 'ADMIN' && !admin.includes(sid)) return;
            msg += `\n🔹 [ ${cmd.cmdCategory.toUpperCase()} ]\n📝 Tổng lệnh: ${cmd.nameModule.length} lệnh\n${cmd.nameModule.join(", ")}\n`;
        });

        msg += `\n📝 Tổng số lệnh: ${cmds.size} lệnh\n👤 Tổng số admin bot: ${admin.length}\n👾 Tên Bot: ${NameBot}\n🕹️ Phiên bản: ${version}\n⏰ Hôm nay là: ${today}\n⏱️ Thời gian: ${time}\n\nSử dụng ${prefix}help [tên lệnh] để xem chi tiết lệnh hoặc ${prefix}help all để xem tất cả lệnh.`;
        return api.sendMessage(msg, tid, mid);
    }
};

function sortBy(key) {
    return function(a, b) {
        return b[key].length - a[key].length;
    };
}

function getPermissionText(permission) {
    return permission === 0 ? "Thành Viên" : permission === 1 ? "Quản Trị Viên" : "Admin Bot";
}
