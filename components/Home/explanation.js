export default function Explanation() {

  return (
    <div className='bg-bluey w-full px-4 sm:px-40 relative h-full sm:h-[70vh] text-gray-50 flex flex-col justify-center items-center'>
      <h1 className='font-domaine-medium tracking-wide text-4xl sm:text-[3.25rem] text-white mt-20'>Nuestro proceso</h1>
      <div className='w-full flex flex-col sm:flex-row justify-around items-center sm:items-start h-full pt-4 sm:pt-20 mb-10 sm:mb-0 relative'>
        <div className='w-full sm:w-1/4 my-10 sm:my-0 h-full flex flex-row sm:flex-col items-center'>
          <div className='rounded-full h-20 w-28 flex justify-center sm:h-48 sm:w-48 drop-shadow-lg bg-yellow-300'>
            <p className='font-rebond text-dark drop-shadow-md text-7xl sm:text-9xl'>1</p>
          </div>
          <div className='w-full pl-7 sm:pl-0'>
            <p className='font-chillax text-lg sm:text-2xl font-medium text-left sm:text-center mt-8'>Aplica en minutos.</p>
            <p className='font-rebond text-[1.1rem] sm:text-xl text-left sm:text-center mt-2'>Obten tu preaprobación y tu presupuesto aproximado. Es gratis y libre de todo compromiso, tampoco afecta tu historial crediticio.</p>
          </div>
        </div>
        <div className='w-full sm:w-1/4 my-10 sm:my-0 h-full flex flex-row-reverse sm:flex-col items-center'>
          <div className='rounded-full h-20 w-28 flex justify-center sm:h-48 sm:w-48 drop-shadow-lg bg-yellow-300'>
            <p className='absolute font-rebond text-dark drop-shadow-md text-7xl sm:text-9xl'>2</p>
          </div>
          <div className='w-full px-4 sm:px-0'>
            <p className='font-chillax text-lg sm:text-2xl font-medium text-left sm:text-center mt-8'>Encuentra tu hogar.</p>
            <p className='font-rebond text-[1.1rem] sm:text-xl text-left sm:text-center mt-2'>Con tu presupuesto listo, busca la casa de tus sueños dentro de la selección que tenemos preparada para ti.</p>
          </div>
        </div>
        <div className='w-full sm:w-1/4 my-10 sm:my-0 h-full flex flex-row sm:flex-col items-center'>
          <div className='rounded-full h-20 w-28 flex justify-center sm:h-48 sm:w-48 drop-shadow-lg bg-yellow-300'>
            <p className='absolute font-rebond text-dark drop-shadow-md text-7xl sm:text-9xl'>3</p>
          </div>
          <div className='w-full pl-7 sm:pl-0'>
            <p className='font-chillax text-lg sm:text-2xl font-medium text-left sm:text-center mt-8'>Comienza a vivir en tu casa.</p>
            <p className='font-rebond text-[1.1rem] sm:text-xl text-left sm:text-center mt-2'>No esperes a juntar para el enganche ni a que el banco te apruebe un crédito. Múdate y te ayudamos con el resto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}