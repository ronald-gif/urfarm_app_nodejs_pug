const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    productname: {
        type: String,
        required : true,
        trim: true
    },
    category: {
        type: String,
        required : true,
    },
    productprice: {
        type: Number,
        required : true,
    },
    productweight: {
        type: Number,
        required : true,
    },
    farmerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
        
    },
    location: {
        type: String,
        required : true,
        trim: true
    },
    uploadimage: {
        type: String,
        required : true,
        trim: true
    },
    dateofupload: {
        type: Date,
        required : true,
    },
    fullname: {
        type: String,
        required : true,
        trim: true
    },
    gender: {
        type: String,
        required : true,
    },
    ward: {
        type: String,
        required : true,
    },
    modeofpayment: {
        type: String,
        required : true,
    },
    deliveryMethod: {
        type: String,
        required : true,
    },
    producetype: {
        type: String,
        required : true,
    },
    status: {
        type: String,
        default: "Pnding",
        enum: ["Pending", "Approved"]
    }
});

module.exports = mongoose.model('Upload', uploadSchema)