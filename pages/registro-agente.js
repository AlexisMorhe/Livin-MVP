import {useEffect, useState} from "react";
import Layout from "../components/Layout/layout";
import getCiudades from "../lib/ciudadesGet";
import axios from "axios";

const estados = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Estado de Mexico','Michoacan de Ocampo','Morelos','Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatan','Zacatecas'];

export default function RegistroAgente() {
  const [credentials, setCredentials] = useState({
    nombre: '',
    correo: '',
    clave: '',
    telefono: 0,
    estado: '',
    ciudad: ''
  });
  const [ciudades, setCiudades] = useState('');

  useEffect(() => {
    setCredentials({
      ...credentials,
      'ciudad': ciudades[0]
    });
  }, [ciudades])

  const handleChangeEstado = async (e) => {
    setCredentials({
      ...credentials,
      'estado': e.target.value,
    });
    const res = await getCiudades(e.target.value);
    setCiudades(res);
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    try {
      const data = {
        nombre: credentials.nombre.toString(),
        correo: credentials.correo.toString(),
        clave: credentials.clave.toString(),
        telefono: parseInt(credentials.telefono),
        estado: credentials.estado.toString(),
        ciudad: credentials.ciudad.toString(),
      }
      const res = await axios.post('/api/seller', data);
      console.log(credentials);
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <Layout>
      <div className='flex pl-20 font-rebond h-full text-xl z-10 w-3/5 h-[90vh] justify-around relative'>
        <div className='flex flex-col h-5/6 w-1/3 pt-24 justify-between'>
          <div>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Nombre:</label>
              <input name='nombre' onChange={handleChange} className='rounded py-2 px-2'/>
            </div>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Correo:</label>
              <input name='correo' onChange={handleChange} className='rounded py-2 px-2'/>
            </div>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Telefono:</label>
              <input name='telefono' onChange={handleChange} className='rounded py-2 px-2'/>
            </div>
          </div>
          <button onClick={handleClick} className='w-5/6 py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Enviar mensaje</button>
        </div>
        <div className='h-5/6 w-1/2 pt-24 flex flex-col justify-between'>
          <div className='w-1/2'>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Estado:</label>
              <select name='estado' value={credentials.estado} onChange={handleChangeEstado} className='rounded py-2 px-2'>
                <option value="" disabled hidden>Selecciona un estado: </option>
                {estados.map((estado, index) => <option key={index} value={estado}>{estado}</option>)}
              </select>
            </div>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Ciudad:</label>
              <select value={credentials.ciudad} name='ciudad' onChange={handleChange} className='rounded py-2 px-2'>
                {ciudades ? (ciudades.map((ciudad, index) => <option key={index} value={ciudad}>{ciudad}</option>))
                : (<option value="" disabled hidden>Selecciona una ciudad: </option>)}
              </select>
            </div>
            <div className='flex flex-col w-5/6 mb-8'>
              <label className='mb-4'>Clave:</label>
              <input name='clave' onChange={handleChange} className='rounded py-2 px-2'/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
