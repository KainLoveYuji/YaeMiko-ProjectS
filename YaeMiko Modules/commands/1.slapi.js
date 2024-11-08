const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Đường dẫn tới file api.json và list.json
const apiFilePath = path.join(__dirname, './../../YaeMiko ProjectS/Data/ApiData/api.json');
const listFilePath = path.join(__dirname, './../../YaeMiko ProjectS/Data/ApiData/list.json');

module.exports.config = {
    name: "setapi",
    version: "1.0.0",
    hasPermssion: 3, 
    credits: "Ahri",
    description: "Hiển thị và thay đổi API",
    commandCategory: "API",
    usages: "[api_name]",
    cooldowns: 5 
};

module.exports.run = async ({ event, api, args }) => {
    try {
        // Đọc file api.json và list.json
        const apiData = JSON.parse(fs.readFileSync(apiFilePath, 'utf8'));
        const listData = JSON.parse(fs.readFileSync(listFilePath, 'utf8'));

        if (args.length === 0) {
            // Nếu không có tham số, chỉ hiển thị menu API hiện tại
            const currentApi = apiData.Api;
            let message = `Api Hiện Tại: ${currentApi}\n\nDanh sách API hiện có trong list.json:\n`;

            Object.keys(listData).forEach(key => {
                message += `${key}: ${listData[key]}\n`;
            });

            return api.sendMessage({body: message, attachment: (await axios.get((await axios.get(`https://api-kainriyu-project.onrender.com/anime`)).data.data,  {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
        }

        const apiName = args[0]; // Tên API cần cập nhật từ list.json

        if (!listData[apiName]) {
            return api.sendMessage("Tên API không hợp lệ trong list.json.", event.threadID, event.messageID);
        }

        // Cập nhật giá trị api hiện tại
        apiData.Api = listData[apiName];

        // Ghi lại file api.json
        fs.writeFileSync(apiFilePath, JSON.stringify(apiData, null, 4), 'utf8');

        // Gửi thông báo sau khi cập nhật
        const message = `Đã thay đổi API thành: ${apiData.Api}\n\nDanh sách API hiện có trong list.json:\n` +
                        Object.keys(listData).map(key => `${key}: ${listData[key]}`).join('\n');

        return api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        return api.sendMessage("Đã có lỗi xảy ra khi xử lý yêu cầu của bạn.", event.threadID, event.messageID);
    }
};
