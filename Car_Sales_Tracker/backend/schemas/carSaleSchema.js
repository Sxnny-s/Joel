const { z } = require("zod");

const carSaleSchema = z.object({
  buyerName: z.string().min(1, "Buyer name is required"),
  customerPhone: z.string().min(1, "Customer phone is required"),
  contractDate: z.string().min(1, "Contract date is required"),
  dateClosed: z.string().min(1, "Date closed is required"),
  dateDelivered: z.string().min(1, "Date delivered is required"),
  dealType: z.enum(["lease", "finance", "cash"], "Invalid deal type"),
  dealCredit: z.enum(["50%", "100%"], "Invalid deal credit"),
  stockType: z.enum(["new", "used"], "Invalid stock type"),
  year: z.number().min(1900).max(new Date().getFullYear() + 1, "Invalid year"),
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  vin: z.string().length(17, "VIN must be exactly 17 characters"),
  closePrice: z.number().nonnegative("Close price must be a positive number"),
  totalProfit: z.number().nonnegative("Total profit must be a positive number"),
  financeSales: z.number().nonnegative("Finance sales must be a positive number"),
  salesperson: z.string().min(1, "Salesperson is required"),
});

module.exports = carSaleSchema;