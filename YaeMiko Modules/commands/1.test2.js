module.exports.config = {
    name: "genshininfo",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Ahri",
    description: "Gửi thông tin nhân vật từ API của Genshin Impact.",
    commandCategory: "game",
    usages: "[tên nhân vật]",
    cooldowns: 10,
    dependencies: {
        axios: ""
    }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');

    if (!args[0]) {
        return api.sendMessage("Vui lòng cung cấp tên nhân vật.", event.threadID, event.messageID);
    }

    // Kết nối các từ và thay thế khoảng trắng bằng %20
    const characterName = args.join(" ").replace(/\s+/g, "%20");
    const apiUrl = `https://api-kainriyu-project-yv9i.onrender.com/Hoyoverse/GenshinImpact/${characterName}`;

    try {
        const response = await axios.get(apiUrl);
        const characterData = response.data;

        if (!characterData || characterData.error) {
            return api.sendMessage("Không tìm thấy thông tin nhân vật hoặc có lỗi xảy ra.", event.threadID, event.messageID);
        }

        let message = `\n🌟 Tên: ${characterData.name}\n`;
        message += `💠 Tiêu đề: ${characterData.title}\n`;
        message += `⭐ Rarity: ${characterData.quality}\n`;
        message += `🔪 Vũ khí: ${characterData.weapon}\n`;
        message += `⚡ Nguyên tố: ${characterData.element}\n`;
        message += `👤 Loại hình: ${characterData.modelType}\n`;
        message += `🎂 Ngày sinh: ${characterData.birthday}\n`;
        message += `🌌 Chòm sao: ${characterData.constellation}\n`;
        message += `🏙 Khu vực: ${characterData.region}\n`;
        message += `🏢 Tổ chức: ${characterData.affiliations.join(", ")}\n`;
        message += `🍲 Món đặc biệt: ${characterData.specialDish}\n`;
        message += `🃏 Namecard: ${characterData.namecard}\n`;
        message += `🎉 Cách nhận: ${characterData.howToObtain}\n`;
        message += `📅 Ngày phát hành: ${characterData.releaseDate}\n`;
        message += `🃏 Thẻ TCG: ${characterData.geniusInvokationTCG}\n`;
        message += `👪 Gia phả: ${characterData.ancestry}\n`;
        message += `🎙 Diễn viên lồng tiếng:\n`;
        message += ` - English: ${characterData.voiceActors.English}\n`;
        message += ` - Chinese: ${characterData.voiceActors.Chinese}\n`;
        message += ` - Japanese: ${characterData.voiceActors.Japanese}\n`;
        message += ` - Korean: ${characterData.voiceActors.Korean}\n\n`;
        message += `📝 Mô tả: ${characterData.profile.description}\n`;
        message += `💫 Tính cách: ${characterData.profile.personality}\n\n`;

        message += `🔥 Kỹ năng:\n`;
        message += ` - Tấn công thường: ${characterData.profile.abilities.normalAttack.name}: ${characterData.profile.abilities.normalAttack.description}\n`;
        message += ` - Kỹ năng nguyên tố: ${characterData.profile.abilities.elementalSkill.name}: ${characterData.profile.abilities.elementalSkill.description}\n`;
        message += ` - Burst nguyên tố: ${characterData.profile.abilities.elementalBurst.name}: ${characterData.profile.abilities.elementalBurst.description}\n`;

        message += `\n🎯 Thiên phú bị động:\n`;
        characterData.profile.abilities.passiveTalents.forEach(talent => {
            message += ` - ${talent.name}: ${talent.description}\n`;
        });

        message += `\n🌠 Chòm sao:\n`;
        for (const [key, value] of Object.entries(characterData.profile.constellations)) {
            message += ` - ${key.toUpperCase()}: ${value}\n`;
        }

        return api.sendMessage(message, event.threadID, event.messageID);

    } catch (error) {
        return api.sendMessage("Đã xảy ra lỗi khi lấy thông tin nhân vật.", event.threadID, event.messageID);
    }
};
