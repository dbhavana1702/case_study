/*mongodb+srv://Bhavana:Bhavana4143@trainingcluster.ksz6q.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=trainingCluster*/
const mongoose=require('mongoose');
const dbConnect=async()=>
{
    try{
        await mongoose.connect('mongodb+srv://Bhavana:Bhavana4143@trainingcluster.ksz6q.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=trainingCluster');
        console.log('DB connected');
    }
    catch(err)
    {
        console.log("error"+err);
    }
}
module.exports=dbConnect;
//dbConnect();