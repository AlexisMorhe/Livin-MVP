import Link from "next/link";
import CurrencyFormat from 'react-currency-format';
import {useState} from "react";

export default function Calculator() {

  const [valor, setValor] = useState('1000000')

  return (
    <div className='bg-yellow-300 text-dark w-full px-12 relative h-[66vh] flex justify-around text-dark'>
      <div className='flex flex-col h-full z-10 w-2/5 px-20 justify-between py-10 relative'>
        <div>
          <h3 className='font-domaine-medium text-[3.25rem]'>Calcula tus rentas</h3>
          <p className='font-rebond text-xl my-5'>El costo de la renta es determinado por el precio de la casa, de estas rentas obtenemos tu enganche.</p>
          <p className='font-rebond text-xl my-5'>Precalifica en línea y recibe una respuesta en menos de 5 minutos.</p>
        </div>
        <Link href='/cotizar'><a className='py-3 px-9 text-center bg-dark text-white font-chillax font-medium rounded-md hover:bg-yellow-300 transition-all'>Proceso de preaprobación</a></Link>
      </div>
      <div className='flex flex-col h-full z-10 w-1/2 px-20 py-10 justify-around relative'>
        <div className='bg-white rounded-[0.25rem] h-2/6 w-full shadow p-4 px-20 flex flex-col items-end justify-around'>
          <p className='font-chillax text-xl font-medium'>¿Cuánto cuesta la casa de tus sueños?</p>
          <CurrencyFormat onValueChange={(values) => {
            const {value} = values;
            return setValor(parseInt(value));
          }} thousandSeparator={true} prefix={'$'} placeholder='$1,000,000' className='relative border-b-4 border-yellow-300 border-0 font-domaine-medium text-5xl w-2/5 text-right focus:border-0 focus:outline-none outline-0'/>
        </div>
        <div className='bg-white rounded-[0.25rem] flex flex-col justify-around items-end h-1/2 shadow py-4 px-20'>
          <p className='font-chillax text-xl font-medium'>Tu mensualidad</p>
          <CurrencyFormat value={valor * 0.011} displayType='text' thousandSeparator={true} prefix={'$'} className='relative border-b-4 border-yellow-400 font-domaine-medium text-5xl w-1/4 text-right outline-none' />
          <p className='font-rebond text-lg text-gray-500'> Simulación realizada basada en una renta de 36 meses.</p>
        </div>
      </div>
    </div>
  )
}