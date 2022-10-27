const URI_MONGO = process.env.URI_MONGO;

const conectarDB = async() => {
  try {
    const mongoose = (await import('mongoose')).default;
    await mongoose.connect('mongodb+srv://livin:livin_dev@livin0.qmmjnpb.mongodb.net/livin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    })
    console.log('MongoDB Conectado 🚀')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default conectarDB;
