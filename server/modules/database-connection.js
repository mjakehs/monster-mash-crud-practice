const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/monstermash';

mongoose.connect(databaseUrl, {useNewUrlParser: true});
mongoose.connection.once('connected', () => {
    console.log('Connected to database at: ', databaseUrl);
});
mongoose.connection.on('error', (error) => {
    console.log('Error: ', error);
});

