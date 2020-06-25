const express = require('express');
const models = require('./models');

let morgan = require('morgan');

let app = express();
const { htmlfiles } = require('./views/index')
let wikiRouter = require('./routes/wiki')
let userRouter = require('./routes/user')
let PORT = 3000;

app.use('/wiki', wikiRouter);

app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.redirect('/wiki');
    // res.send('hello world!');

})

const init = async () =>{
    try{
        await models.db.sync();
        app.listen(PORT,()=>{
        console.log('App is listening');
        })
    }catch(e){
        console.log("This is an error!!", e)
    };
}

init();

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


// app.listen(PORT,()=>{
//     console.log('App is listening');
// })

