const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');
const fetchEmployee=async()=>
{
    try{
        await dbConnect();
        const empArray=await Employee.find();
        empArray.forEach(e=>console.log(e));
    }
    catch(err)
    {
        console.log(err);
    }
    finally{
        mongoose.connection.close();
    }
}
fetchEmployee();