const Monster = require('../models/monster.model');

exports.monsterGet = (req, res) => {
    Monster.find({}).then((results) => {
        res.send(results);
    }).catch( (error) => {
        console.log('Error: ', error);
    });
};

exports.monsterPost = (req, res) => {
    res.send('Post Request');
}

exports.monsterPut = (req, res) => {
    res.send('Put Request');
}

exports.monsterDelete = (req, res) => {
    res.send('Delete Request');
}