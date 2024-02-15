const mongoose = require("mongoose");
const { use } = require("passport");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const user = mongoose.model("user",userSchema);
module.exports= user;