const dataUser = require('./data/datauser.json');
const setData = require('./setData');
const talentData = require('./data/talent.json')

function createCharacter({ data }) {
    if (typeof data !== 'object') {
        throw new Error('data must be an object');
    }
    const existingUser = dataUser.find(user => user.id == data.id);
    const rate = Math.floor(Math.random() * 10000) + 1;
    var rarity = "";
    if (rate > 0 && rate <= 4390) rarity = 'Common';
    if (rate > 4390 && rate <= 6890) rarity = 'Uncommon';
    if (rate > 6890 && rate <= 8390) rarity = 'Rare';
    if (rate > 8390 && rate <= 9390) rarity = 'Epic';
    if (rate > 9390 && rate <= 9890) rarity = 'Legendary';
    if (rate > 9890 && rate <= 9990) rarity = 'Mythical';
    if (rate > 9990 && rate <= 10000) rarity = 'Spectral';
    const talentRandom = talentData.filter((talent) => talent.rarity == rarity);
    const talentUser = talentRandom[Math.floor(Math.random() * talentRandom.length)];
    if (existingUser) return 403;
    setData.createCharecter({
        data: {
            id: data.id,
            name: data.name,
            stage: 0,
            linhluc: 0,
            talentPoint: 0,
            hp: 100,
            atk: 5,
            def: 5,
            spd: 5,
            the_luc: 100,
            the_luc_Base: 100,
            talent: {
                "type": talentUser.type,
                "name": talentUser.name,
                "description": talentUser.description,
                "rarity": talentUser.rarity,
                "tHP": talentUser.tHP,
                "tATK": talentUser.tATK,
                "tDEF": talentUser.tDEF,
                "tSPD": talentUser.tSPD,
                "tGrow": talentUser.tGrow,
                "self-talent": {
                    "damage-Reduction": talentUser['self-talent']['damage-Reduction'],
                    "damage-Increase": talentUser['self-talent']['damage-Increase'],
                    "Armor-Bypass": talentUser['self-talent']['Armor-Bypass'],
                    "pyro-damage_Buff": talentUser['self-talent']['pyro-damage_Buff'],
                    "cryo-damage_Buff": talentUser['self-talent']['cryo-damage_Buff'],
                    "anemo-damage_Buff": talentUser['self-talent']['anemo-damage_Buff'],
                    "dendro-damage_Buff": talentUser['self-talent']['dendro-damage_Buff'],
                    "geo-damage_Buff": talentUser['self-talent']['geo-damage_Buff'],
                    "electro-damage_Buff": talentUser['self-talent']['electro-damage_Buff'],
                    "hydro-damage_Buff": talentUser['self-talent']['hydro-damage_Buff'],
                    "holy-damage_Buff": talentUser['self-talent']['holy-damage_Buff'],
                    "evil-damage_Buff": talentUser['self-talent']['evil-damage_Buff'],
                    "physic-damage_Buff": talentUser['self-talent']['physic-damage_Buff'],
                    "pyro-damage_Resist": talentUser['self-talent']['pyro-damage_Resist'],
                    "cryo-damage_Resist": talentUser['self-talent']['cryo-damage_Resist'],
                    "anemo-damage_Resist": talentUser['self-talent']['anemo-damage_Resist'],
                    "dendro-damage_Resist": talentUser['self-talent']['dendro-damage_Resist'],
                    "geo-damage_Resist": talentUser['self-talent']['geo-damage_Resist'],
                    "electro-damage_Resist": talentUser['self-talent']['electro-damage_Resist'],
                    "hydro-damage_Resist": talentUser['self-talent']['hydro-damage_Resist'],
                    "holy-damage_Resist": talentUser['self-talent']['holy-damage_Resist'],
                    "evil-damage_Resist": talentUser['self-talent']['evil-damage_Resist'],
                    "physic-damage_Resist": talentUser['self-talent']['physic-damage_Resist']
                }
            },
            congphap: null,
            weapon: null,
            accessories: null,
            buff: null,
            locationID: null,
            training: false,
            timeAFK: null,
            bag: [],
            monster: [],
            created: Date.now()
        }
    });
}

module.exports = createCharacter;