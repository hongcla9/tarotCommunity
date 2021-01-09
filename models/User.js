const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email : {
        type:String,
        trim:true,
        unique:1
    },
    password: {
        type: String,
        maxlength:50

    },
    role:{
        type:Number,
        default:0

    },
    image: String,
    //유효기간
    token : {
        type:String
    },
    tokenExp:{
        type:Number 
    }
})
//스키마를 모델로 감싸줌 
const User = mongoose.model('User', userSchema)
module.exports = {User}