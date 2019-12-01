const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  class1: { type: String, required: true },
  class2: { type: String, required: true },
  colors: { type: String, required: true },
  category: { type: String, required: true },
  dataprice: { type: String, required: true },
  product_name: { type: String, required: true },
  product_description: { type: String, required: true }
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
