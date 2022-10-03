export default function Explanation() {

  return (
    <div className='bg-bluey w-full px-40 relative h-[70vh] text-gray-50 flex flex-col  justify-center items-center'>
      <h1 className='font-domaine-medium tracking-wide text-[3.25rem] text-white mt-20'>Nuestro proceso</h1>
      <div className='w-full flex justify-around h-full pt-20 relative'>
        <div className='w-1/4 h-full flex flex-col items-center'>
          <div className='rounded-full h-48 w-48 drop-shadow-lg bg-yellow-300'></div>
          <div className='absolute font-rebond text-dark drop-shadow-md text-9xl'>1</div>
          <p className='font-chillax text-2xl font-medium text-center mt-8'>Aplica en minutos.</p>
          <p className='font-rebond text-xl text-center mt-2'>Obten tu preaprobación y tu presupuesto aproximado. Es gratis y libre de todo compromiso, tampoco afecta tu historial crediticio.</p>
        </div>
        <div className='w-1/4 h-full flex flex-col items-center'>
          <div className='rounded-full h-48 w-48 drop-shadow-lg bg-yellow-300'></div>
          <div className='absolute font-rebond text-dark drop-shadow-md text-9xl'>2</div>
          <p className='font-chillax text-2xl font-medium text-center mt-8'>Encuentra tu hogar.</p>
          <p className='font-rebond text-xl text-center mt-2'>Con tu presupuesto listo, busca la casa de tus sueños dentro de la selección que tenemos preparada para ti.</p>
        </div>
        <div className='w-1/4 h-full flex flex-col items-center'>
          <div className='rounded-full h-48 w-48 drop-shadow-lg bg-yellow-300'></div>
          <div className='absolute font-rebond text-dark drop-shadow-md text-9xl'>3</div>
          <p className='font-chillax text-2xl font-medium text-center mt-8'>Comienza a vivir en tu casa.</p>
          <p className='font-rebond text-xl text-center mt-2'>No esperes a juntar para el enganche ni a que el banco te apruebe un crédito. Múdate y te ayudamos con el resto.</p>
        </div>
      </div>
    </div>
  )
}