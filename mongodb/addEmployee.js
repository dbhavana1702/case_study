const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Employee=require('./employee');
async function addEmployee() {
    try {
        await dbConnect();
        //prepare new emp object and give the properties
        let emp1 = {
            fname: 'Bhavana',
            lname: 'Reddy',
            city: 'Nellore',
            salary: 67000
        }
        const empObj = new Employee(emp1);//creating a document,object creation
        await empObj.save();//saves the employee table into the db
        console.log('Employee record added into DB');

    }
    catch (err) {
        console.log(err);
    }
    finally {
        mongoose.connection.close();
        console.log('DB connection is closed');
    }
}
addEmployee();