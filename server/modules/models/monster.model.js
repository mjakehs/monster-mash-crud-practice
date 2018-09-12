const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    name: {type: String, unique: true, required: true},
    lethality: {type: Number, min: 1, max: 10, required: true, }
})

const Monster = mongoose.model('monster', monsterSchema);

module.exports = Monster;