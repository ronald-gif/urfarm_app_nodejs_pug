const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// structure of my databas

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // required: true,
        trim: true
    },
    fullname: {
        type: String,
        // required: true,
        trim: true
    },
    secondname: {
        type: String,
        // required: true,
        trim: true
    },
    telephone: {
        type: Number,
        // required: true,
        trim: true
    },
    currentdate: {
        type: Date,
    },
    dateofbirth: {
        type: Date,
    },
    uniquenumber: {
        type: String,
        trim: true
    },
    nin: {
        type: String,
        trim: true
    },
    farmerlocation: {
        type: String,
        trim: true
    },
    residence: {
        type: String,
        trim: true
    },
    direction: {
        type: String,
        trim: true
    },
    yearsspent: {
        type: Number,
        trim: true
    },
    gender: {
        type: String,
    },
    ward: {
        type: String,
        trim: true
    },
    activities: {
        type: String,   
    },
    role: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        trim: true 
    },
    appointment: {
        type: String,
        default: "rejected",
        enum: ["appointed", "rejected"]
    },
});

// what the website users will use to longin
userSchema.plugin(passportLocalMongoose, {
    usernameField: 'uniquenumber'
})

// my collect name in the databas is Certification
module.exports = mongoose.model('Enrollment', userSchema)
