const express=require('express');
const dbConnect=require('./dbConfig');
const productRoute=require('./routes/productRoute');
const app=express();
app.use(express.json())
dbConnect();
app.use('/api/product',productRoute);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{console.log(`listening to the post ${PORT}`)})