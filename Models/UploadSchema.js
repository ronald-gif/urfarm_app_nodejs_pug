const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    productname: {
        type: String,
        required : true,
        trim: true
    },
    firstname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment' 
    },
    secondname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment' 
    },
    category: {
        type: String,
    },
    unitprice: {
        type: Number,
    },
    qauntity: {
        type: Number,
        trim: true
    },
    farmerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment' 
    },
    dateofupload: {
        type: Date,
    },
    uploadimage: {
        type: String,   
    },
    fullname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment' 
    },
    ward: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment'
    },
    modeofpayment: {
        type: String,
    },
    deliveryMethod: {
        type: String,
    },
    producetype: {
        type: String,
    },
    status: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Approved"]
    },
    availability: {
        type: String, 
        default: "available",
        enum: ["available", "booked", "N/A"] 
      }
    
});

module.exports = mongoose.model('Upload', uploadSchema)