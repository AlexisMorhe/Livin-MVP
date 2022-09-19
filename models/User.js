import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nombre: {
    type: Array,
    required: [true, 'Nombre no ingresado']
  },
  presupuesto: {
    type: Array,
    required: [true, 'Presupuesto no ingresado']
  },
  ahorros: {
    type: Array,
    required: [true, 'Ahorros no ingresados']
  },
  direcciones: {
    type: Array,
    required: [true, 'Direccion no ingresada']
  },
  habitaciones: {
    type: Array,
    required: [true, 'Habitaciones no ingresadas']
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);