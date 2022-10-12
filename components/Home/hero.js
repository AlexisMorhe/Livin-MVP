import Link from "next/link";

export default function Hero() {
  return (
    <div className='bg-gray-50 w-11/12 px-12 relative h-[63vh] text-dark flex'>
      <div className='w-7/12 h-full flex justify-center'>
        <img className='object-cover w-full' src='static/familia.jpg' />
      </div>
      <div className='flex flex-col h-full z-10 w-2/5 pl-20 justify-center relative'>
        <h1 className='font-domaine-bold tracking-wide text-[3.75rem] my-4 leading-tight w-5/6'>Consigue la casa de tus sueños sin enganche.</h1>
        <p className='font-rebond w-full my-5 text-2xl'>Encuentra la casa de tus sueños, mudate ahora y rentala. Parte de renta se irá directo al enganche. Nuestro programa está diseñado para que puedas conseguir tu hipoteca en 3 años.</p>
        <div className='flex w-full'>
          <Link href='/registro'><a className='my-4 mr-8 w-fit py-3 px-9 text-lg bg-yellow-300 font-chillax font-medium rounded-md hover:bg-yellow-200 transition-all'>Consigue tu casa</a></Link>
          <Link href='/vendetucasa'><a className='my-4 w-fit py-3 px-9 text-lg text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Vende tu casa</a></Link>
        </div>
      </div>
    </div>
  )
}