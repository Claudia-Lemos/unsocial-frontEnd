const express = require ("express");

const app = express();

app.use("/", (req, res) =>{
    res.send("This is the landing page")
});


app.use("/aboutUs", (req, res)=> {
    res.send("We are the Champions!")
})

app.use("/contacts", (req, res) =>{
    res.send("This is the Contact Us page")
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
    
}
 
)