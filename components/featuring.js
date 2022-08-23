import {Carousel} from "flowbite-react";

export default function Featuring() {
  return (
    <div className='bg-off-white w-full flex justify-center'>
      <div className='w-3/5 px-10 bg-off-white relative h-[30vh] text-dark flex flex-col justify-center items-center'>
        <Carousel>
          <div className="flex flex-col h-full items-center justify-center">
            <p className='font-chillax text-center'>Vende tu propiedad</p>
            <p className='font-rebond text-3xl font-semibold text-center'>Las mejores tasas del mercado</p>
            <p className='font-rebond text-xl text-center'>Trabajamos con todos los bancos para que recibas múltiples ofertas de hipotecas y escojas la mejor.</p>
            <p className='font-chillax text-center'>Ver más</p>
          </div>
          <div className="flex flex-col h-full items-center justify-center">
            <p className='font-chillax text-center'>Vende tu propiedad</p>
            <p className='font-rebond text-3xl text-center font-semibold'>Las mejores tasas del mercado</p>
            <p className='font-rebond text-xl text-center'>Trabajamos con todos los bancos para que recibas múltiples ofertas de hipotecas y escojas la mejor.</p>
            <p className='font-chillax text-center'>Ver más</p>
          </div>
          <div className="flex flex-col h-full items-center justify-center">
            <p className='font-chillax text-center'>Vende tu propiedad</p>
            <p className='font-rebond text-3xl text-center font-semibold'>Las mejores tasas del mercado</p>
            <p className='font-rebond text-xl text-center'>Trabajamos con todos los bancos para que recibas múltiples ofertas de hipotecas y escojas la mejor.</p>
            <p className='font-chillax text-center'>Ver más</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}