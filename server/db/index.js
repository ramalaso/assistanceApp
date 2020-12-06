const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose
    .connect('mongodb+srv://ramalaso:ramalasoxo@cluster0.exras.gcp.mongodb.net/DBListApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("DB Connected."))
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;