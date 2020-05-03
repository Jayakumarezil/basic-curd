const express = require('express');

const bodyparser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db.js');


var employeeController = require('./controllers/employeeController.js')

var app = express(); //express function will be called in app

app.use(bodyparser.json()); //to pass json data to server

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3002,()=>{
    console.log("listening in port 3002")
})

app.use('/employees',employeeController);