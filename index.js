require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path= require('path');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todorouter')

mongoose.connect(`${process.env.databaseURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology:true, 
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs')

app.use('/', todoRouter)

app.listen(3005, ()=>{
    console.log("I'm listening at the port!")
})