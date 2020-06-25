const router2 = require('./user');
let wikiRouter = require('express').Router();

//why the path is just ../views and not ../views/addPage
//and why we put addPage inside 
let {addPage} = require('../views');
// console.log('this is addpage', {addPage})



wikiRouter.get('/',(req,res,next)=>{
    res.send('I am wiki');
})
wikiRouter.post('/',(req,res,next)=>{
    res.send('Post me wiki!');
})

wikiRouter.get('/add/',(req,res,next)=>{
    res.send(addPage());
})






module.exports = wikiRouter;