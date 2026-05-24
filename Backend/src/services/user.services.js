const userModel=require('../models/user.model');
const brcypt =require('bcrypt');


const registerUser=async(name,email,password)=>{
    const existingUser=await userModel.getUserByEmail(email);
    const hashedPassword=await brcypt.hash(password,10);
    if(existingUser){
        throw new Error('User already exists');
    }

    const user =await userModel.createUser(
        name,email,password=hashedPassword
    );

    return user;
};

const loginUser=async(email,password)=>{
    try{
        const existingUser=await userModel.getUserByEmail(email);
    if(!existingUser)return res.status(400).json({message:"User doesnt exist"});

    const isMatch=await userModel.comparePassword(password);
    if(!isMatch)return res.status(400).json({
        message:"invalid credentials"
    })
    res.status(200).json({
        message:"user logged in ",
        user:{
            id:userModel.id,
            email:userModel.email,
            username:userModel.name

        }
    })

    }
    catch(err){
        console.log(`the error is ${err}`);
    }


}

module.exports={
    registerUser,
    loginUser
};
