const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchemaSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  company: { type: String, required: true },
  category: { type: String, required: true },
  userId: { type: Number, required: true }
}, { timestamps: true });
 
const ProductModel = mongoose.model('products', productSchemaSchema);
module.exports = ProductModel; 


