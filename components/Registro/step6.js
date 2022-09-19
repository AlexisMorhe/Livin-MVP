import {useForm} from "../../context/formContext";

const Step6 = ({}) => {

  const { form } = useForm();
  const {nombre, presupuesto, ahorros, direcciones, habitaciones} = form;

  const handleSubmit = e => {
    e.preventDefault();
    postData(form);
  }

  const postData = async (form) => {
    try {
      console.log(form)
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json();
      console.log(data);

    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Hola {nombre}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ahorros: {ahorros}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ingresos: {presupuesto}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Buscas casas con este número de habitaciones: {habitaciones}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Buscas casas en estas direcciones: {direcciones}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Puedes obtener un credito de hasta: {presupuesto * 6}</p>
      <button onClick={handleSubmit} className='font-chillax font-medium rounded-md py-3 w-80 bg-yellow-300 text-dark
     active:scale-105 transition-all'>
        Finalizar
      </button>
    </div>
  )
}

export default Step6