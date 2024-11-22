const express = require ("express");
const connectDB = require("./config/database");
const User = require("./models/user")

const app = express();


app.post("/signUp", async (req, res)=> {
    const user = new User ({
        firstName: "Carmino",
        lastName: "Lemos",
        emailId: "carmino@lemos.com",
        password: "12345"
    }) 

try {
    await user.save();
    res.send("User added successfully!")
}


catch (err){
    res.status(400).send("Error while saving...")
}
});
connectDB()
.then(()=>{
    console.log("Database connection established");

    app.listen(3000, () => {
        console.log("Server is successfully listening on port 3000");
        
});
})

.catch((err) => {
console.error("Database cannot be connected");
    
});

