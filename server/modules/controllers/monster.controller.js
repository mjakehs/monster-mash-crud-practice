const Monster = require('../models/monster.model');

exports.monsterGet = (req, res) => {
    res.send('Get Request');
}

exports.monsterPost = (req, res) => {
    res.send('Post Request');
}

exports.monsterPut = (req, res) => {
    res.send('Put Request');
}

exports.monsterDelete = (req, req) => {
    res.send('Delete Request');
}