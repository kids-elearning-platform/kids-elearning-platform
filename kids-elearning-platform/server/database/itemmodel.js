const mongoose =require("mongoose")
const db =require('./index')

const kidSchema= new mongoose.Schema({
    email:String,
    password:String,
    id:Number,
    username:String,
    steps:[{
        option1:Boolean,
        option2:Boolean,
        option3:Boolean,
        option4:Boolean
    }]

})

const User= mongoose.model("User",kidSchema)
module.exports = User;