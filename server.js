const express=require('express')
const bodyParser =require('body-parser')
const ejs=require('ejs')
const mongoose=require('mongoose')

const app=express()
app.use(bodyParser.urlencoded({extended:true}))//extented true means can take multiple form data[read form data ] 
app.use(express.json())//reads jason file
app.set("view engine","ejs")//part of setup 
app.use(express.static("public"))

mongoose.connect("mongodb+srv://Soham:%40soham.kc.1@cluster0.zttiugs.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const confessionRoutes = require("./routes/confessionRoutes");
app.use("/", confessionRoutes);

app.listen(3000,()=>{
    console.log("this port is being read in port=3000")
})