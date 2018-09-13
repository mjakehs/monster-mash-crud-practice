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
    console.log(req.body);
    Monster.create(req.body).then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}

exports.monsterPut = (req, res) => {
    console.log(req.body);
    Monster.updateOne({_id: req.body._id}, {name: req.body.name, lethality: req.body.lethality}).then( (results) => {
        console.log(results.data);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}

exports.monsterDelete = (req, res) => {
    console.log(req.body);
    Monster.deleteOne(req.body).then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error: ', error);
        res.sendStatus(500);
    });
}