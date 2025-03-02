const dbconnect=require('./dbconfig');
const mongoose=require('mongoose');
const Book=require('./cs_mgdb_book');
const fetchBook=async()=>
{
    try
    {
        await dbconnect();
        const fetchB= await Book.find();
        fetchB.forEach(f => console.log(f));
            
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
fetchBook();