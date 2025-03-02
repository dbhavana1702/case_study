const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect('mongodb+srv://Bhavana:Bhavana4143@trainingcluster.ksz6q.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=trainingCluster', { useUnifiedTopology: true });
        console.log("DB connected");
    }
    catch (err) {
        console.log(err);
    }
}
dbConnect();
module.exports = dbConnect;