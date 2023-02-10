"use strict";
const express = require("express");
const app = express();
const PORT = 4000;
const {connectDB} = require("./db/index");
app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/greet",(req,res)=>{
    console.log(req)
    const {name} = req.body;
    if (name){
        res.send(`Hello ${name}`);
    }else{
        res.send("Hello Anonymous");
    }
})

app.get("/greet/:name",(req,res)=>{
    const {name} = req.params;
    // res.send(`Hello ${name.toUpperCase()}`);
    res.json({data:`Hello ${name.toUpperCase()}`, status:200});
})


app.listen(PORT,()=>{
    console.log("DB Connected");
    console.log(`Server is running on port ${PORT}`);
})

// function name(first,last)