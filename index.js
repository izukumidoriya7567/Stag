require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("Hello bro");
})
app.get("/west",(req,res)=>{
    res.send(`Lopez:${port}`);
})
app.get("/chen",(req,res)=>{
    res.send("Tim Bradford");
})
module.exports=app;