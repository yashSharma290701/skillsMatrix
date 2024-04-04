const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password:String,
    age: Number,
    role:String,
    gender:String,
    phoneNumber:Number,
    dateOfJoining:Date,
    userId:{
        type:String,
        unique:true
    },
    State:String

});

const UserData = mongoose.model('User', userDataSchema);

module.exports = UserData;
