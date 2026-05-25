const userService =require('../services/user.services')
const 

const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const user=await userService.registerUser(
            name,email,password
        );

        res.status(201).json(user);
    }

    catch(err){
        res.status(400).json({
            message:err.message
        });
    }
};

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await user
    }
}

module.exports={
    register
};