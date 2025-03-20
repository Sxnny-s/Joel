
const mongoose = require('mongoose');

const carSaleSchema = new mongoose.Schema({
    customerDOB: Date,
    dateClosed: Date,
    paymentOption: String,
    salesPerson: [], // possible multiple persons 
    customerPhoneNumber: Number,
    VIN: Number,
    closedPrice: Number,
    FinanceSales: Number,
    totalProfit: Number,
    userId: {type: String, required: true} // Link to clerk ID
})

const CarSale = mongoose.model('CarSale', carSaleSchema);

module.exports = CarSale