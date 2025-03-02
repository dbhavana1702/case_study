const mongoose=require('mongoose');
const Employee=require('./employee');
const dbConnect=require('./dbconfig');
const deleteEmployeeById=async(empId)=>
{
    try{
        await dbConnect();
        const resp=await Employee.deleteOne({'_id':empId});
        console.log(resp);
        if(resp.deletedCount===0)
            console.log('could not find the matching record for id'+empId);
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
deleteEmployeeById('67b5c6dc15fba6243bd856cb');