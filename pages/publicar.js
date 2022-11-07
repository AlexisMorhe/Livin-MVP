import Layout from "../components/Layout/layout";
import {useState} from "react";
import axios from 'axios';

export default function Publicar() {

  const [propiedad, setPropiedad] = useState({
    ciudad: '',
    estado: '',
    colonia: '',
    habitaciones: 0,
    terreno: 0,
    construccion: 0,
    precio: 0,
    descripcion: '',
    imagenes: '',
  });

  const handleChange = (e) => {
    setPropiedad({
      ...propiedad,
      [e.target.name]: e.target.value
    })
  }

  const handleUpload = async (e) => {
    const files = [...e.target.files];
    const formData = new FormData();
    formData.append('upload_preset', 'my-uploads');
    const filesUrls = [];

    for (let file of files) {
      formData.append('file', file);
      const res = await axios.post('https://api.cloudinary.com/v1_1/dimizna0i/image/upload', formData);
      filesUrls.push(res.data.secure_url);
    }
    setPropiedad({
      ...propiedad,
      'imagenes': filesUrls,
    })
  }

  const handleSubmit = async () => {
    const data = {
      ciudad: propiedad.ciudad.toString(),
      estado: propiedad.estado.toString(),
      colonia: propiedad.colonia.toString(),
      habitaciones: parseInt(propiedad.habitaciones),
      terreno: parseInt(propiedad.terreno),
      construccion: parseInt(propiedad.construccion),
      precio: parseInt(propiedad.precio),
      descripcion: propiedad.descripcion.toString(),
      imagenes: propiedad.imagenes,
    }
    try{
      console.log(data);
      const res = await axios.post('/api/house', data);
    }catch (err) {
      console.log(err);
    }
  }

  return(
    <Layout>
      <div className='w-full h-[200vh] flex justify-center items-center'>
        <div className='flex pl-20 font-rebond h-2/3 text-xl z-10 w-3/5 bg-yellow-300 justify-around relative'>
          <div className='flex flex-col h-5/6 w-1/3 pt-24 justify-between'>
            <div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Mts de construcción:</label>
                <input name='construccion' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Mts de terreno:</label>
                <input name='terreno' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Colonia:</label>
                <input name='colonia' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Ciudad:</label>
                <input name='ciudad' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Estado:</label>
                <input name='estado' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>No. de habitaciones:</label>
                <input name='habitaciones' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Precio:</label>
                <input name='precio' onChange={handleChange} className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Imagen:</label>
                <input multiple type='file' name='imagen' onChange={handleUpload} className='rounded py-2 px-2'/>
              </div>
            </div>
          </div>
          <div className='h-5/6 w-1/2 pt-24 flex flex-col justify-between'>
            <label className='mb-4'>Descripción:</label>
            <textarea  name='descripcion' onChange={handleChange} className='rounded py-2 mb-4 w-5/6 h-full px-2 resize-none border-none'/>
            <button onClick={handleSubmit} className='w-5/6 py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Publicar casa</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}