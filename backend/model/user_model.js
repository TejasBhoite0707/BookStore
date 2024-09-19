import mongoose, { Types } from 'mongoose';
let userSchema=mongoose.Schema({
    Fullname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})
let User=mongoose.model('user',userSchema);
export default User;