const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    category: {
        type: String,
    },
    productname: {
        type: String,
    },
    totalamount: {
        type: Number,
        trim: true
    },
    adddress:{
        type: String 
    },
    division: {
        type: String
    },
    dateofpurchase: {
        type: Date,
    },
    modeofpayment: {
        type: String,
    },
    deliveryMethod: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
});

module.exports = mongoose.model('Order', orderSchema)