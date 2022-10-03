import Link from "next/link";
import CurrencyFormat from 'react-currency-format';
import {useState} from "react";

export default function Calculator() {
  return (
    <div className='bg-yellow-300 text-dark w-full px-40 relative h-[50vh] flex justify-between text-dark'>
      <img className='w-1/2 h-full object-cover' src='static/agente.jpg' />
      <div className='flex flex-col h-full z-10 w-3/5 pl-20 justify-between py-10 relative'>
        <div>
          <h3 className='font-domaine-medium text-[3.25rem]'>Consigue tu preaprobación</h3>
          <p className='font-rebond text-xl my-5'>El costo de la renta es determinado por el precio de la casa, de estas
            rentas obtenemos tu enganche.</p>
          <p className='font-rebond text-xl my-5'>Precalifica en línea y recibe una respuesta en menos de 5 minutos.</p>
        </div>
        <div className='w-full flex justify-end mt-20 '>
          <Link href='/registro'><a
            className='py-3 px-9 w-1/3 mr-10 text-center bg-dark text-white font-chillax font-medium rounded-md hover:bg-yellow-300 transition-all'>Proceso
            de preaprobación</a></Link>
        </div>
      </div>
    </div>
  )
}