import {useForm} from "../../context/formContext";
import {useRouter} from "next/router";
import CurrencyFormat from "react-currency-format";
import {useEffect} from "react";

const Step6 = ({}) => {

  const { form } = useForm();
  const router = useRouter();
  const {nombre, ingreso, ahorros, estado, ciudad, colonia, habitaciones} = form;

  const handleSubmit = e => {
    e.preventDefault();
    postData();
  }

  const postData = async () => {
    const data = {};
    data.nombre = nombre.toString();
    data.estado = estado.toString();
    data.ciudad = ciudad.toString();
    data.colonia = colonia.toString();
    data.ingreso = parseInt(ingreso);
    data.ahorros = parseInt(ahorros);
    data.habitaciones = habitaciones[0];
    console.log(data);
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const ans = await res.json();
      router.push('/bienvenido')
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Hola {nombre}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Estos son tus datos:</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ahorros:
        <CurrencyFormat value={ahorros} displayType={"text"} thousandSeparator={true} prefix={' $ '} fixedDecimalScale={true} />
      </p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ingresos:
        <CurrencyFormat value={ingreso} displayType={"text"} thousandSeparator={true} prefix={' $ '} fixedDecimalScale={true}/>
      </p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Buscas casas con este número de habitaciones: {habitaciones[0].join(', ')}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>{`Buscas casas en estas direcciones: ${colonia}, ${ciudad}, ${estado}`}</p>
      <button onClick={handleSubmit} className='font-chillax font-medium rounded-md py-3 w-80 bg-yellow-300 text-dark
     active:scale-105 transition-all'>
        Finalizar
      </button>
    </div>
  )
}

export default Step6