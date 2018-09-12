const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monster.controller');

router.get('/', monsterController.monsterGet);

router.post('/', monsterController.monsterPost);

router.put('/', monsterController.monsterPut);

router.delete('/', monsterController.monsterDelete);

module.exports = router;