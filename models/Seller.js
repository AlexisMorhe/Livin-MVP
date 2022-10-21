import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
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
  telefono: {
    type: Number,
    required: [true, 'Telefono no ingresado']
  },
  ciudad: {
    type: String,
    required: [true, 'Ciudad no ingresada']
  },
  estado: {
    type: String,
    required: [true, 'Estado no ingresado']
  }
})

export default mongoose.models.Seller || mongoose.model('Seller', SellerSchema);