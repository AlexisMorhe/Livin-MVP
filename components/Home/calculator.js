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
    <div className='bg-yellow-300 text-dark w-full px-12 relative h-[66vh] flex justify-around text-dark'>
      <div className='flex flex-col h-full z-10 w-2/5 px-20 justify-between py-10 relative'>
        <div>
          <h3 className='font-domaine-medium text-[3.25rem]'>Calcula tus rentas</h3>
          <p className='font-rebond text-xl my-5'>El costo de la renta es determinado por el precio de la casa, de estas
            rentas obtenemos tu enganche.</p>
          <p className='font-rebond text-xl my-5'>Precalifica en línea y recibe una respuesta en menos de 5 minutos.</p>
        </div>
        <Link href='/'><a
          className='py-3 px-9 text-center bg-dark text-white font-chillax font-medium rounded-md hover:bg-yellow-300 transition-all'>Proceso
          de preaprobación</a></Link>
      </div>
      <div className='flex flex-col h-full z-10 w-1/2 px-20 py-10 justify-around relative'>
        <div
          className='bg-white rounded-[0.25rem] h-2/6 w-full shadow p-4 px-20 flex flex-col flex-wrap items-end justify-around'>
          <div className='flex w-52'>
            <p className='font-chillax text-xl font-medium'>Costo</p>
            <CurrencyFormat onValueChange={(values) => {
              const {value} = values;
              return setValor(parseInt(value));
            }} thousandSeparator={true} prefix={'$'} placeholder='$1,000,000'
                            className='relative border-b-4 border-yellow-300 border-0 font-domaine-medium text-lg w-3/5 text-right focus:border-0 focus:outline-none outline-0'
            />
          </div>
          <div className='flex w-52'>
            <p className='font-chillax text-xl font-medium'>Rentabilidad</p>
            <input
              className='border-b-4 border-yellow-300 border-0 font-domaine-medium text-lg w-3/5 text-right focus:border-0 focus:outline-none outline-0'
              type='number' step={0.1} min={0} max={100} onChange={handleChangeRentabilidad}/>
          </div>
          <div className='flex w-52'>
            <p className='font-chillax text-xl font-medium'>Comisión</p>
            <input
              className='border-b-4 border-yellow-300 border-0 font-domaine-medium text-lg w-3/5 text-right focus:border-0 focus:outline-none outline-0'
              type='number' step={0.1} min={0} max={100} onChange={handleChangeComision}/>
          </div>
          <div className='flex w-52'>
            <p className='font-chillax text-xl font-medium'>Plazo</p>
            <input
              className='border-b-4 border-yellow-300 border-0 font-domaine-medium text-lg w-3/5 text-right focus:border-0 focus:outline-none outline-0'
              type='number' step={1} min={0} max={5} onChange={handleChangePlazo}/>
          </div>
          <div className='flex w-52'>
            <p className='font-chillax text-xl font-medium'>Enganche</p>
            <input
              className='border-b-4 border-yellow-300 border-0 font-domaine-medium text-lg w-3/5 text-right focus:border-0 focus:outline-none outline-0'
              type='number' step={0.1} min={0} max={100} onChange={handleChangeEnganche}/>
          </div>
        </div>
        <div className='bg-white rounded-[0.25rem] flex flex-col justify-around items-end h-1/2 shadow py-4 px-20'>
          <p className='font-chillax text-xl font-medium'>Tu mensualidad</p>
          <CurrencyFormat value={renta} displayType='text' thousandSeparator={true} prefix={'$'}
                          className='relative border-b-4 border-yellow-400 font-domaine-medium text-5xl w-1/4 text-right outline-none'/>
        </div>
      </div>
    </div>
  )
}