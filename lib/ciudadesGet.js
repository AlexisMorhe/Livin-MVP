import axios from 'axios';

const token = '7d44b3c1-1186-4ae0-a3bf-29829bd5296c';

const getCiudades = async (estado) => {
  console.log(estado);
  // const res = await axios.get(`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${token}`);
  const res = await axios.get(`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=pruebas`);
  const ciudades = res.data.response.municipios;
  console.log(ciudades);
  return ciudades
}

export default getCiudades;