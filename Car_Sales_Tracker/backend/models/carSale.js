const mongoose = require('mongoose');

const carSaleSchema = new mongoose.Schema({
  // 1. Customer Information
  buyerName: { type: String, required: true },
  customerPhone: { type: String, required: true },

  // 2. Deal Details
  contractDate: { type: Date, required: true },
  dateClosed: { type: Date, required: true },
  dateDelivered: { type: Date, required: true },
  dealType: { type: String, enum: ["lease", "finance", "cash"], required: true },
  dealCredit: { type: String, enum: ["50%", "100%"], required: true },

  // 3. Vehicle Information
  stockType: { type: String, enum: ["new", "used"], required: true },
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  vin: { type: String, length: 17, required: true },

  // 4. Financials
  closePrice: { type: Number, required: true },
  totalProfit: { type: Number, required: true },
  financeSales: { type: Number, required: true },

  // 5. Personnel
  salesperson: { type: String, required: true },

  // Link to Clerk user ID
  userId: { type: String, required: true },
});

const CarSale = mongoose.model('CarSale', carSaleSchema);

module.exports = CarSale;