const userService =require('../services/user.services')

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
            message:error.message
        });
    }
};

module.exports={
    register
};