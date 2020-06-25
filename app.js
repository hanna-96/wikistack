const express = require('express');

let morgan = require('morgan');

let app = express();
let htmlfiles = require('./views/main')


app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send(htmlfiles());
})

let PORT = 3000;

app.listen(PORT,()=>{
    console.log('App is listening');
})

