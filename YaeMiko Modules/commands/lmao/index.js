
var createCharacter = require("./createCharacter");
var get = require("./getData");
var axios = require("axios");
var fs = require('fs-extra');

async function createCharecter({ Users, api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = createCharacter({
        data: {
            id: senderID,
            name: (await Users.getData(senderID)).name
        }
    });
    if (dataUser == 403) return api.sendMessage("❎ Bạn đã có nhân vật rồi", threadID, messageID);
    var stream = (await axios.get(global.configLmao.create, { responseType: 'stream' })).data;
    const user = get.getDataUser(senderID);
    const talentUser = user.talent;
    var color = ""
    if (talentUser.rarity == "Common") color = "⚪";
    if (talentUser.rarity == "Uncommon") color = "🟢";
    if (talentUser.rarity == "Rare") color = "🔵";
    if (talentUser.rarity == "Epic") color = "🟣";
    if (talentUser.rarity == "Legendary") color = "🟠";
    if (talentUser.rarity == "Mythical") color = "🔴";
    if (talentUser.rarity == "Spectral") color = "🌌";
    api.sendMessage(`-----‹<〈${color}〉>›-----`, threadID, messageID);
    await new Promise(resolve => setTimeout(resolve, 3000));
    return api.sendMessage({ body: `-------<(${color})>-------\n____________________________\n✅Chào mừng kí chủ đến với hệ thống Lmao Đại Lục 1.0\n____________________________\n👤Tên: ${user.name}\n✨Thể chất: ${talentUser.name}\nTăng trưởng: ${talentUser.tGrow}\n Mô tả:\n${talentUser.description}\n____________________________\n✏️ Sử dụng lệnh /lmao info để xem thông tin nhân vật\n✏️ Sử dụng lệnh /lmao help để xem cách chơi`, attachment: stream }, threadID, messageID);
}

async function getTop({ api: a, event: e }) {
    const { threadID: t, messageID: m } = e, _ = require("./data/datauser.json");
    if (_.length < 3) return api.sendMessage('Cần có ít nhất 3 người trên server để xem top', threadID, messageID)
    _.sort((a, b) => b.linhluc - a.linhluc);
    let c = '<(THẬP ĐẠI LMAO BẢNG)>\n', d = 1;
    for (i of _) {
        c += `${d++}. ${i.name}\nLinh lực: ${i.level}\n`;
    }
    return a.sendMessage(c, t, m)
}

async function getCharacter({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    var statusBag = "";
        if(dataUser.monster.length >= 1) statusBag = "🟢";
        if(dataUser.monster.length >= 10) statusBag = "🟡";
        if(dataUser.monster.length >= 20) statusBag = "🟠";
        if(dataUser.monster.length >= 30) statusBag = "🔴";
    var status = "";
    if ((dataUser.the_luc / dataUser.the_luc_Base) >= 0) status = "Kiệt sức";
    if ((dataUser.the_luc / dataUser.the_luc_Base) >= 0.2) status = "Mệt mỏi";
    if ((dataUser.the_luc / dataUser.the_luc_Base) >= 0.5) status = "Bình thường";
    if ((dataUser.the_luc / dataUser.the_luc_Base) >= 1) status = "Sung sức";
    if ((dataUser.the_luc / dataUser.the_luc_Base) >= 1.2) status = "Siêu sung sức";
    var stream = (await axios.get(global.configLmao.info, { responseType: 'stream' })).data;
    return api.sendMessage({ body: `[ -Lmao Hệ Thống- ]\n────────────────\n👤 Tên kí chủ: ${dataUser.name}\n📝 Uid: ${dataUser.id}\n✏️ Cảnh giới: ${dataUser.stage}\n✨ Linh lực: ${Math.round(dataUser.linhluc)}\n🦾 Chỉ số:\n❤️ Máu: ${dataUser.hp} (+${Math.round((dataUser.weapon != null ? dataUser.weapon.HP : 0) * (1 + (dataUser.weapon != null ? dataUser.weapon.stage / 100 : 0)))})\n⚔️ Công: ${dataUser.atk} (+${Math.round((dataUser.weapon != null ? dataUser.weapon.ATK : 0) * (1 + (dataUser.weapon != null ? dataUser.weapon.stage / 100 : 0)))})\n🛡 Thủ: ${dataUser.def} (+${Math.round((dataUser.weapon != null ? dataUser.weapon.DEF : 0) * (1 + (dataUser.weapon != null ? dataUser.weapon.stage / 100 : 0)))})\n⚡ Tốc: ${dataUser.spd} (+${Math.round((dataUser.weapon != null ? dataUser.weapon.SPD : 0) * (1 + (dataUser.weapon != null ? dataUser.weapon.stage / 100 : 0)))})\n🗡️ Skill point: ${dataUser.talentPoint}\n💪🏻 Lực Chiến cơ bản: ${dataUser.hp + 4 * dataUser.atk + 3 * dataUser.def + 5 * dataUser.spd}\n🛡️ Trang bị cộng thêm: ${Math.round((dataUser.weapon != null ? dataUser.weapon.HP + 4 * dataUser.weapon.ATK + 3 * dataUser.weapon.DEF + 5 * dataUser.weapon.SPD : 0) * (1 + (dataUser.weapon != null ? dataUser.weapon.stage / 100 : 0)))}\n🦾 Thể lực: ${dataUser.the_luc}/${dataUser.the_luc_Base} - ${status}\n💬Buff/Debuff: ${dataUser.buff != null ? dataUser.buff.name : ""}\n───────────────\n⚔️ Công pháp: ${dataUser.congphap ? dataUser.congphap.name : " "}\n🦸Pháp bảo: ${dataUser.accessories ? dataUser.accessories.name : ""}\n🧺 Số vật phẩm trong túi đồ: ${dataUser.bag.length}\n💰 Số quái trong túi: ${dataUser.monster.length}/30 (` + statusBag + `)\n\n`, attachment: stream }, threadID, messageID);
}

async function training({ api, event, args }) {
    try {
        var datass = require(`./data/datauser.json`);
        const { senderID, threadID, messageID } = event;
        let dataUser = datass.find(a => a.id == senderID);
        const linhlucReceive = Math.round(Math.floor(Date.now() - dataUser.timeAFK) / 5000);
        var timeTraining = Math.floor(Date.now() - dataUser.timeAFK),
            days = Math.floor(timeTraining / 86400000),
            hours = Math.floor(timeTraining / 3600000) % 24,
            minutes = Math.floor(timeTraining / 60000) % 60,
            seconds = Math.floor(timeTraining / 1000) % 60
        const trainCheck = dataUser.training;
        if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
        switch (args[1]) {
            case "on":
                if (trainCheck == true) return api.sendMessage(`Bạn đã tu luyện được ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây, off để kết thúc tu luyện`, threadID, messageID);
                else {
                    dataUser.training = true;
                    dataUser.timeAFK = Date.now();
                    fs.writeFileSync(`${__dirname}/data/datauser.json`, JSON.stringify(datass, null, 4))
                    api.sendMessage("Kí chủ bắt đầu tiến hành tu luyện!!!", threadID, messageID);
                }

                break;

            case "off":
                if (trainCheck == false) return api.sendMessage(`Bạn chưa tu luyện, on để bắt đầu tu luyện`, threadID, messageID)
                else {
                    dataUser.linhluc += linhlucReceive;
                    dataUser.timeAFK = null;
                    dataUser.training = false;
                    fs.writeFileSync(`${__dirname}/data/datauser.json`, JSON.stringify(datass, null, 4))
                    api.sendMessage(`Kết thúc tu luyện trong ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây, kí chủ nhận được ${linhlucReceive} linh lực`, threadID, messageID);
                }
                return dataUser.linhluc;
        }
        


    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    createCharecter,
    getCharacter,
    training,
    getTop
}