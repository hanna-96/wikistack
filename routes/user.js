let userRouter = require('express').Router();

userRouter.get('/user',(req,res,next)=>{
    res.send('I am user');
})

module.exports = userRouter;