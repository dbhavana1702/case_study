const mongoose=require('mongoose');
const Employee=require('./employee');
const dbConnect=require('./dbconfig');
const fetchById=async(empId)=>
{
    try
    {
        await dbConnect();
        const emp=await Employee.findOne({'_id':empId})
        if(!emp)
            console.log('emp record not found for id'+empId);
        else
            console.log(emp);
    }
    catch(err)
    {
        console.log(err);
    }
    finally{
        mongoose.connection.close();
    }
}
fetchById('67b590cbdfa9f2ca0fdd6726');
const fetchByName=async(name)=>
{
    try
    {
        await dbConnect();
        let fname=name.split(" ")[0];
        let lname=name.split(" ")[1];
        const emp=await Employee.find({'fname':fname,'lname':lname});
        if(!emp)
        {
            console.log("Error")
        }
        else
        {
            console.log(emp);
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
fetchByName('Akash Reddy')