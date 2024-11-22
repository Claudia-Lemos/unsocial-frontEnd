const mongoose = require ("mongoose");

const connectDB = async () =>{
    await mongoose.connect (
        "mongodb+srv://lemosclaudia007:wSwIRa3Y3rHSBAak@cluster0.bj4rc.mongodb.net/unSocial"
    );
} ;

module.exports = connectDB;



