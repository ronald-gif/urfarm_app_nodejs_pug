const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// structure of my databas

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true
    },
    telephone: {
        type: Number,
        trim: true
    },
    massage: {
        type: String,
    },
});

module.exports = mongoose.model('Public', userSchema)
