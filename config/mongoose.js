const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ravindra:ravi123@cluster0.aywfm1p.mongodb.net/backend?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;