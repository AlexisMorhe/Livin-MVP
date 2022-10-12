export default function Footer() {
  return (
    <footer className='w-full h-[70vh] bg-dark font-chillax text-white'>
      <div className='h-3/5 w-full pt-10 flex'>
        <div className='text-3xl ml-24 flex flex-col items-center w-52'>
          <div className='flex mr-2'>
            <img className='w-7 mr-3' src='/static/livin-white_logo.svg' />
            <p className='mt-1 font-medium'>Liv<span className='font-semibold'>in</span></p>
          </div>
          <div className='text-lg flex-col pl-10 my-10'>
            <p>¿Necesitas ayuda?</p>
            <p className='text-yellow-300'>soporte@livin.mx</p>
          </div>
        </div>
        <div className='ml-[28rem] flex flex-col justify-around'>
          <p>Ubicaciones</p>
        </div>
      </div>
      <div className='w-full h-2/5 pb-20 flex justify-center items-end'>
        <p>Livin, SAPI. 2022.</p>
      </div>
    </footer>
  )
}