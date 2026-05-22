const express=require('express')
const router=express.Router();
const {body,validationResult}=require('express-validator')

const User=require('../models/user.model')

router.post('/register',[
    body('email').isEmail(),
    body('password'),
],async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});

    try{
        const {username,email,password}=req.body;

        const existing=await User.findOne({where:{email}});
        if(existing)return res.status(400).json({error:"Email is already in use"});

        const user=await User.create({
            email,password
        })
    }
})
