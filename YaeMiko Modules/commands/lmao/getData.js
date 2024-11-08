var dataUser = require('./data/datauser.json');
var dataItem = require('./data/item.json');
var dataAccessories = require('./data/accessories.json');
var dataMonster = require('./data/monster.json');
var dataBuffs = require('./data/buff.json');
var dataTechnique = require('./data/technique.json');
var dataTalent = require('./data/talent.json');

function getDataUser(id) {
    if (typeof id !== 'string') {
        throw new Error('id must be a string');
    }
    return dataUser.find(user => user.id == id);
}


module.exports = {
    getDataUser
};