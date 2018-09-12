const Monster = require('../models/monster.model');

exports.monsterGet = (req, res) => {
    Monster.find({}).then((results) => {
        res.send(results);
    }).catch( (error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
};

exports.monsterPost = (req, res) => {
    res.send('Post Request');
}

exports.monsterPut = (req, res) => {
    res.send('Put Request');
}

exports.monsterDelete = (req, res) => {
    Monster.remove(req.body).then( (results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}