const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    productname: {
        type: String,
        required : true,
        trim: true
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
    totalamount:{
        type: Number
    },
    direction:{
        type: String 
    },
    farmerid: {
        type: String
    },
    dateofupload: {
        type: Date,
    },
    uploadimage: {
        type: String,   
    },
    produceowner: {
        type: String,
    },
    farmerward: {
        type: String,
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
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
    description: {
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
      },
});

module.exports = mongoose.model('Upload', uploadSchema)