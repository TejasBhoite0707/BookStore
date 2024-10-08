import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import Bookrouter from './route/book_route.js';
import Userrouter from './route/user_route.js';

dotenv.config()
let app=express()
let PORT=process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
let mongourl=process.env.MongoDBURL;
//connect to mongoose 

try {
   mongoose.connect(mongourl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connected to MONGODB");
} catch (error) {
    console.log("error",error);
}

//defining routes
app.use('/book',Bookrouter)
app.use('/user',Userrouter)
app.listen(PORT,()=>{
    console.log(`server is running on port-${PORT}` );
})
