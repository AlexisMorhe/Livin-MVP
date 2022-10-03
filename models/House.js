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
  metros_terreno: {
    type: Number,
    required: [true, 'Metros de terreno no ingresados']
  },
  metros_construccion: {
    type: Number,
    required: [true, 'Metros de construcción no ingresados']
  }
});

export default mongoose.models.House || mongoose.model('House', HouseSchema);