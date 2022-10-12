import Link from 'next/link';

export default function Footer() {

  const navigation = [
    { name: 'Agentes', href: '/agentes' },
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Buscar Hogar', href: '/buscar' },
    { name: 'Acerca De', href: '/acerca' },
  ]

  return (
    <footer className='w-full h-[70vh] pl-[8.2rem] bg-dark font-chillax text-white'>
      <div className='h-3/5 w-full pt-10 flex'>
        <div className='text-3xl flex flex-col w-52'>
          <div className='flex mr-2'>
            <img className='w-7 mr-3' src='/static/livin-white_logo.svg' />
            <p className='mt-1 font-medium'>Liv<span className='font-semibold'>in</span></p>
          </div>
          <div className='text-lg flex-col my-10'>
            <p>¿Necesitas ayuda?</p>
            <p className='text-yellow-300'>soporte@livin.mx</p>
          </div>
        </div>
        <div className='ml-96 h-1/2 flex flex-col'>
          <p className='font-medium mb-5'>Ubicaciones</p>
          <div className='flex justify-between'>
            <p className='w-40 mb-5'>Ciudad de México</p>
            <p className='w-40 mb-5'>Monterrey, NL</p>
          </div>
          <div className='flex justify-between'>
            <p className='w-40 mb-5'>Torreón, Coahuila</p>
            <p className='w-40 mb-5'>Pachuca, Hidalgo</p>
          </div>
        </div>
        <div className='ml-52 h-1/2 flex flex-col'>
          <p className='font-medium mb-5'>Recursos</p>
          {navigation.map((link, index) => <Link key={index} href={link.href}><a className='mb-5'>{link.name}</a></Link>)}
        </div>
        <div className='ml-52 h-1/2 flex flex-col'>
          <p className='font-medium mb-5'>Siguenos</p>
          <p className='mb-5'>Facebook</p>
          <p className='mb-5'>Twitter</p>
          <p className='mb-5'>Instagram</p>
          <p className='mb-5'>YouTube</p>
        </div>
      </div>
      <div className='w-fit h-2/5 pb-20 flex justify-center items-end'>
        <p>Livin, SAPI. 2022.</p>
      </div>
    </footer>
  )
}