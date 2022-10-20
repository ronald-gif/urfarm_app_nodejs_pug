const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// structure of my databas

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    secondname: {
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: Number,
        required: true,
        trim: true
    },
    currentdate: {
        type: Date,
        required: true, 
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    uniquenumber: {
        type: String,
        required: true,
        trim: true
    },
    nin: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    residence: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    confirmpassword: {
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
        required: true
    },
    ward: {
        type: String,
    },
    activities: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        
    },
});

// what the website users will use to longin
userSchema.plugin(passportLocalMongoose, {
    usernameField: 'uniquenumber'
})

// my collect name in the databas is Certification
module.exports = mongoose.model('Enrollment', userSchema)
