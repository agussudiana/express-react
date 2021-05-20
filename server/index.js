const path = require("path");
const express = require("express");
const app = express(); 
const mongoose = require("mongoose")
const User = require("./models/user") 
const bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(bodyParser.json())

app.get("/",(req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.post("/login",async (req, res, next) => {
  const isExist = await User.findOne({email:req.body.email,
  password:req.body.password})
  if(isExist){
    res.json({status:"ok"})
  }else{
    res.status(401).json({status:"unauthenticated"})
  }
  
});


mongoose
	.connect("mongodb://localhost:27017/slash", { useNewUrlParser: true })
	.then(() => {
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});

	})


