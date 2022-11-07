const mongoose = require('mongoose');
const Mongo_URI = "mongodb://localhost:27017/taskmanagerDB";

const connectDB = async() => {
    try{
        //mongoDB connection string 
        const con = await mongoose.connect(Mongo_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;