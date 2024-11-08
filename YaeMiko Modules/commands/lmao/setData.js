'use strict'
var dataUser = require("./data/datauser.json");
var game = require('./getData');
var fs = require('fs-extra');
var axios = require('axios');
var talentData = require ('./data/talent.json');

function createCharecter({ data }) {
    if (typeof data !== 'object') {
        throw new Error('data must be an object');
    }
    dataUser.push(data);
    fs.writeFileSync(__dirname + "/data/datauser.json", JSON.stringify(dataUser, null, 4))

    return data
}





module.exports = {
    createCharecter
};