const userModel=require('../models/user.model');

const registerUser=async(name,getUserByEmail,password)=>{
    const existingUser=await userModel.getUserByEmail(email);

    if(existingUser){
        throw new Error('User already exists');
    }

    const user =await userModel.createUser(
        name,email,password
    );

    return user;
};

module.exports={
    registerUser
};