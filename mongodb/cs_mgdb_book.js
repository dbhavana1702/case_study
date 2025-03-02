/**
 * Create a application foe a book store that has following book model
 * Book:
 * title :string
 * author:string
 * price:number
 * 
 * 
 * 
 * write functions for following operation 
 * 
 * -insert book in the db
 * -fetch all books 
 * -fetch book by title
 * -fetch book by author
 * -delete book by  id
 */
const mongoose=require('mongoose');
const bookSchema=mongoose.Schema(
    {
        title:{type:String,required:true},
        author:{type:String,required:true},
        price:{type:Number,default:0}
    }
);
const Book=mongoose.model("book",bookSchema);
module.exports=Book;
