import {Carousel} from "flowbite-react";
import Link from 'next/link'

export default function Featuring() {

  const slides = [
    {
      subtitle: 'Créditos a tu medida',
      title: 'Las mejores tasas del mercado',
      description: 'Trabajamos con todos los bancos para que recibas múltiples ofertas y escojas la que más se adapte a ti.',
      href: '/como-funciona'
    },
    {
      subtitle: 'No esperes al banco',
      title: 'Múdate sin dar enganche',
      description: 'Múdate a tu nuevo hogar sin tener que esperar la aprobación de un crédito ni desembolsar un enganche.',
      href: '/como-funciona'
    },
  ]

  return (
    <div className='bg-off-white w-1/2 xl:w-full flex justify-center'>
      <div className='w-3/5 px-10 bg-off-white relative h-[30vh] text-dark flex flex-col justify-center items-center'>
        <Carousel>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col h-full items-center justify-center">
              <p className='font-chillax text-center'>{slide.subtitle}</p>
              <p className='font-rebond my-2 text-3xl font-semibold text-center'>{slide.title}</p>
              <p className='font-rebond my-2 text-xl text-center'>{slide.description}</p>
              <Link href={slide.href}><a className='mt-3 font-chillax text-center'>Ver más</a></Link>
            </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}