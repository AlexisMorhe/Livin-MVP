import Layout from "../components/Layout/layout";
import {useState} from "react";
import axios from 'axios';

export default function Login() {

  const [credentials, setCredentials] = useState({
    correo: '',
    clave: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', credentials, {withCredentials: true});
    console.log(res);
  }

  return(
    <Layout>
      <div className='w-full h-[90vh] flex justify-center items-center font-rebond'>
        <div className='w-1/2 bg-yellow-300 h-2/3 rounded-xl flex justify-center'>
          <div className='flex flex-col h-5/6 w-1/3 pt-24 justify-around items-center'>
            <p className='text-2xl font-semibold'>Inicia sesión en Livin</p>
            <div className='w-full'>
              <div className='flex flex-col mb-8'>
                <label className='mb-4'>Correo:</label>
                <input onChange={handleChange} name='correo' className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col mb-8'>
                <label className='mb-4'>Contraseña:</label>
                <input onChange={handleChange} name='clave' className='rounded py-2 px-2'/>
              </div>
            </div>
            <button onClick={handleSubmit} className='w-5/6 py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}