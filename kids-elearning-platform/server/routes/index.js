const express = require('express');
const itemRoutes= require('./item.routes')

const users=require("../database");

const app=express();
const PORT = process.env.PORT|| 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/../client/public"))

app.use("/api/users",itemRoutes);
app.listen(PORT,()=>{
    console.log('success')
})