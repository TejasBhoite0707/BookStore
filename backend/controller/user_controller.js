import User from "../model/user_model.js";
import bcryptjs from 'bcryptjs'
export const  signup=async (req,res)=>{
    try {
        let {Email,Password,Fullname}=req.body;
        let user= await User.findOne({Email})
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        let hashpassword=await bcryptjs.hash(Password,10)
        let createdUser=new User({
            Email,
            Password:hashpassword,
            Fullname,
        });
await createdUser.save();
res.status(201).json({message:"Account Created Succesfully",
  user:{
    _id:createdUser._id,
    Fullname:createdUser.Fullname,
    Email:createdUser.Email
  },
})
    } catch (error) {
        console.log("Message:"+error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}


export const login=async(req,res)=>{
  try {
    let {Email,Password}=req.body;
    let user =await User.findOne({Email})
    let isMatch=await bcryptjs.compare(Password,user.Password);
    if(!user || !isMatch){
       return res.status(400).json({message:"Invalid Email or Password"})
    }
    else{
      res.status(200).json({
        "message":"Login Successful",
       "user":{
            _id:user._id,
            Email:user.Email,
            Fullname:user.Fullname
        },
      });
    }
  } catch (error) {
    console.log("Error"+error.message);
    res.status(500).json("Internal server Error")
  }
};