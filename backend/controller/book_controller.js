import Book from '../model/book_model.js';

export const getbooks=async(req,res)=>{
    try {
        let book=await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error)
        
    }
}