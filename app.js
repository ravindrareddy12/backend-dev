const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose')
const app = express();
const port = process.env.PORT ||3000;
const path= require('path')
const db = require('./config/mongoose')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./route'));

  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
