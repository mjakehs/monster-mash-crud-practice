const Monster = require('../models/monster.model');

exports.monsterGet = (req, res) => {
    Monster.find({}).then((results) => {
        res.send(results);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
};

exports.monsterPost = (req, res) => {
    Monster.create(req.body).then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}

exports.monsterPut = (req, res) => {
    Monster.updateOne({_id: req.body._id}, req.body.update).then( (results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}

exports.monsterDelete = (req, res) => {
    Monster.remove(req.body).then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}