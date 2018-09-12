const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./modules/routes/monster.router');
require('./modules/database-connection');
const PORT = 5000;
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/monsters', monsters);

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});