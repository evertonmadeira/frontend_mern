const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nome: {type: String, required: true},
  descricao: {type: String, required: true},
  categoria: {type: String, required: true},
  preco: {type: Number, required: true},
},{
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
