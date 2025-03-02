const dbconnect=require('./dbconfig');
const mongoose=require('mongoose');
const Book=require('./cs_mgdb_book');
const fetchBookByTitle=async(bookTitle)=>
{
    try
    {
        await dbconnect();
        const bookT=await Book.find({'title':bookTitle});
        if(!bookT)
        {
            console.log("not found "+bookTitle);
        }
        else
        {
            console.log(bookT);
        }

    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {

        mongoose.connection.close();

    }
}
//fetchBookByTitle('HarryPotter');
const fetchBookByAuthor=async(bookAuthor)=>
{
    try
    {
        await dbconnect();
        const bookA=await Book.find({'author':bookAuthor});
        if(!bookA)
        {
            console.log("not found "+bookAuthor);
        }
        else
        {
            console.log(bookA);
        }
    
    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
    
        mongoose.connection.close();
    
    }
}
fetchBookByAuthor('Charles Perrault');