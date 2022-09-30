import {Carousel} from "flowbite-react";
import Link from 'next/link'

export default function Featuring() {

  const slides = [
    {
      subtitle: 'Vende tu propiedad',
      title: 'Las mejores tasas del mercado',
      description: 'Trabajamos con todos los bancos para que recibas múltiples ofertas y escojas la que más se adapte a ti.',
      href: '/tasas'
    },
    {
      subtitle: 'Recibe más por tu casa',
      title: 'Recibe hasta un 15% más',
      description: 'Renta tu hogar y protegete de la incertidumbre, recibe un rendimiento extra por tu inmueble.',
      href: '/rentas'
    },
  ]

  return (
    <div className='bg-off-white w-full flex justify-center'>
      <div className='w-3/5 px-10 bg-off-white relative h-[30vh] text-dark flex flex-col justify-center items-center'>
        <Carousel>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col h-full items-center justify-center">
              <p className='font-chillax text-center'>{slide.subtitle}</p>
              <p className='font-rebond text-3xl font-semibold text-center'>{slide.title}</p>
              <p className='font-rebond text-xl text-center'>{slide.description}</p>
              <Link href={slide.href}><a className='font-chillax text-center'>Ver más</a></Link>
            </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}