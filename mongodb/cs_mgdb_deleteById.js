const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Book=require('./cs_mgdb_book');
const deleteBookById=async(bookId)=>
{
    try{
        await dbConnect();
        const resp=await Book.deleteOne({'_id':bookId});
        console.log(resp);
        if(resp.deletedCount===0)
            console.log('could not find the matching record for id'+bookId);
        else
            console.log('record deleted');
    
    }
    catch(err)
    {
        console.log(err);
    }
    finally{
        mongoose.connection.close();
    }
}
deleteBookById('67b5f0614f6aa7aa6bcf61e4');