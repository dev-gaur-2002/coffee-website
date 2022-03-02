
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    username:{
        type: String,
    },
    mob:{
        type: Number,
    },
    password:{
        type: String,
    },
    confirm:{
        type: String
    }
})

const userModel = mongoose.model('users' , userSchema)
module.exports = userModel