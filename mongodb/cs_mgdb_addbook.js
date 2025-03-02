const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Book=require('./cs_mgdb_book');
async function addBook()
{
    try
    {
        await dbConnect();
        let book1=
        {
            title:"moon",
            author:"abc",
            price:300
        }
        const bookObj=new Book(book1);
        await bookObj.save();
        console.log("Data inserted");


    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
        mongoose.connection.close();
        console.log("connection is closed");

    }
}
addBook();