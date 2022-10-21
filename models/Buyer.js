import mongoose from "mongoose";

const BuyerSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre no ingresado']
  },
  correo: {
    type: String,
    required: [true, 'Correo no ingresado']
  },
  clave: {
    type: String,
    required: [true, 'Clave no ingresada']
  },
  ingreso: {
    type: Number,
    required: [true, 'Presupuesto no ingresado']
  },
  ahorros: {
    type: Number,
    required: [true, 'Ahorros no ingresados']
  },
  ciudad: {
    type: String,
    required: [true, 'Ciudad no ingresada']
  },
  estado: {
    type: String,
    required: [true, 'Estado no ingresado']
  },
  colonia: {
    type: String,
    required: [true, 'Colonia no ingresada']
  },
  habitaciones: {
    type: Array,
    required: [true, 'Habitaciones no ingresadas']
  },
});

export default mongoose.models.Buyer || mongoose.model('Buyer', BuyerSchema);