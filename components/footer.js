import Link from "next/link";

export default function Footer() {
  return (
    <footer className='w-full h-[75vh] bg-dark font-chillax text-white'>
      <div className='h-3/5 w-full pt-20'>
        <div className='text-3xl ml-40 flex flex-col items-center w-52'>
          <div className='flex'>
            <img className='w-7 mr-3' src='/static/livin-white_logo.svg' />
            <p className='mt-1 font-medium'>Liv<span className='font-semibold'>in</span></p>
          </div>
          <div className='text-lg flex-col pl-10 my-10'>
            <p>¿Necesitas ayuda?</p>
            <p className='text-yellow-400'>soporte@livin.mx</p>
          </div>
        </div>
      </div>
      <div className='w-full h-2/5 pb-20 flex justify-center items-end'>
        <p>Livin, SAPI. 2022.</p>
      </div>
    </footer>
  )
}