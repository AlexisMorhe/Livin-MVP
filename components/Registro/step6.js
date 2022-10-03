import {useForm} from "../../context/formContext";
import {useRouter} from "next/router";

const Step6 = ({}) => {

  const { form } = useForm();
  const router = useRouter();
  const {nombre, ingreso, ahorros, estado, ciudad, colonia, habitaciones} = form;

  const handleSubmit = e => {
    e.preventDefault();
    postData(form);
  }

  const postData = async (form) => {
    form.nombre = nombre.toString();
    form.estado = estado.toString();
    form.ciudad = ciudad.toString();
    form.colonia = colonia.toString();
    form.ingreso = parseInt(ingreso);
    form.ahorros = parseInt(ahorros);
    form.habitaciones = habitaciones[0];
    console.log(form);
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json();
      console.log(data);
      router.push('/bienvenido')
    } catch (err) {
      console.log(form);
      console.log(err)
    }
  }

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Hola {nombre}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Estos son tus datos:</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ahorros: {ahorros}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ingresos: {ingreso}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Buscas casas con este número de habitaciones: {habitaciones}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>{`Buscas casas en estas direcciones: ${colonia}, ${ciudad}, ${estado}`}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Puedes obtener un credito de hasta: {((ahorros / 36) + ingreso) * 40}</p>
      <button onClick={handleSubmit} className='font-chillax font-medium rounded-md py-3 w-80 bg-yellow-300 text-dark
     active:scale-105 transition-all'>
        Finalizar
      </button>
    </div>
  )
}

export default Step6