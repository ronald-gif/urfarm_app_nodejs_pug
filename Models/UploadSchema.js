const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    productname: {
        type: String,
        // required : true,
        trim: true
    },
    category: {
        type: String,
    },
    productprice: {
        type: Number,
    },
    productweight: {
        type: Number,
    },
    farmerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment'
        
    },
    location: {
        type: String,
        trim: true
    },
    uploadimage: {
        type: String,
        
    },
    dateofupload: {
        type: Date,
        // required : true,
    },
    fullname: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
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