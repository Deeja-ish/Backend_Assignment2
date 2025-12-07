const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    age: {type: Number, required: true, required: true, minlenght: 7},
    classDetails: {type: String, required: true, required: true}
}, 
{ timestamps : true } )

const User = mongoose.model("User", userSchema)
module.exports = User