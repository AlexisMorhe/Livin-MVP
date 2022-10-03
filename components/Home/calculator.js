import Link from "next/link";
import CurrencyFormat from 'react-currency-format';
import {useState} from "react";

export default function Calculator() {

  const handleChangeRentabilidad = (e) => {
    setRentabilidad(parseInt(e.target.value));
  }
  const handleChangeComision = (e) => {
    setComision(parseInt(e.target.value));
  }
  const handleChangePlazo = (e) => {
    setPlazo(parseInt(e.target.value));
  }
  const handleChangeEnganche = (e) => {
    setEnganche(parseInt(e.target.value));
  }

  const [valor, setValor] = useState(1000000);
  const [rentabilidad, setRentabilidad] = useState(0.05);
  const [comision, setComision] = useState(0.02);
  const [plazo, setPlazo] = useState(3);
  const [enganche, setEnganche] = useState(0.1);

  let renta = Math.floor(valor * ((rentabilidad / 100) + (comision / 100) + ((enganche / 100) / plazo)) / 12);

  return (
    <div className='bg-yellow-300 text-dark w-full pr-12 relative h-[66vh] flex justify-around text-dark'>
      <div className='flex flex-col h-full z-10 w-2/5 justify-around relative'>
        <img className='h-full object-cover' src='static/agente.jpg' />
      </div>
      <div className='flex flex-col h-full z-10 w-2/5 px-10 justify-between py-10 relative'>
        <div>
          <h3 className='font-domaine-medium text-[3.25rem]'>Consigue tu preaprobación</h3>
          <p className='font-rebond text-xl my-5'>El costo de la renta es determinado por el precio de la casa, de estas
            rentas obtenemos tu enganche.</p>
          <p className='font-rebond text-xl my-5'>Precalifica en línea y recibe una respuesta en menos de 5 minutos.</p>
        </div>
        <Link href='/registro'><a
          className='py-3 px-9 text-center bg-dark text-white font-chillax font-medium rounded-md hover:bg-yellow-300 transition-all'>Proceso
          de preaprobación</a></Link>
      </div>
    </div>
  )
}