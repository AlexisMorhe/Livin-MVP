const URI_MONGO = process.env.URI_MONGO;

const conectarDB = async() => {
  try {
    const mongoose = (await import('mongoose')).default;
    await mongoose.connect(URI_MONGO, {
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
