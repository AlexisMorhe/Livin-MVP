// import mongoose from 'mongoose';
import dynamic from "next/dynamic";

const conectarDB = async() => {
  try {
    const mongoose = (await import('mongoose')).default;
    await mongoose.connect('mongodb+srv://livin:livin_dev@livin0.qmmjnpb.mongodb.net/livin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    })
    console.log('mongodb conectado 🚀')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default conectarDB;
