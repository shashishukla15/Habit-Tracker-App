const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://shuklashashi46:FUpqD1VLHrIkQrBu@cluster0.cmdfwdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb", e));
}
