import mongoose from "mongoose";
 let bookSchema=mongoose.Schema({
    name: String,
      title :String,
      image: String,
      website:String,
      category: String,
      price:Number ,
      description:String, 
 })
let Book= mongoose.model('Book',bookSchema)
export default Book;