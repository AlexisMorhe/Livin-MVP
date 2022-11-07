import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
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
    type: Number,
    required: [true, 'Habitaciones no ingresadas']
  },
  terreno: {
    type: Number,
    required: [true, 'Metros de terreno no ingresados']
  },
  construccion: {
    type: Number,
    required: [true, 'Metros de construcción no ingresados']
  },
  precio: {
    type: Number,
    required: [true, 'Precio no ingresado']
  },
  descripcion: {
    type: String,
    required: [true, 'Descripción no ingresada']
  },
  imagenes: {
    type: Array,
    required: [true, 'Imagen no subida.']
  }
});

export default mongoose.models.House || mongoose.model('House', HouseSchema);