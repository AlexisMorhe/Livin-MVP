import Link from "next/link";

export default function Hero() {
  return (
    <div className='bg-gray-50 w-full sm:w-1/2 xl:w-11/12 px-0 sm:px-12 relative h-full sm:h-[63vh] text-dark flex flex-col sm:flex-row'>
      <div className='w-full sm:w-7/12 h-full flex justify-center'>
        <img className='object-cover w-full' src='static/familia.jpg' />
      </div>
      <div className='flex flex-col h-full z-10 w-full sm:w-2/5 pt-4 sm:pt-0 pl-0 sm:pl-20 justify-start sm:justify-center relative'>
        <h1 className='font-domaine-bold tracking-wide text-4xl sm:text-5xl 2xl:text-[3.75rem] my-4 leading-tight pl-4 sm:pl-0 w-full'>Consigue la casa de tus sueños.</h1>
        <p className='font-rebond w-full my-5 text-lg 2xl:text-2xl px-4 sm:px-0'>Encuentra la casa de tus sueños, mudate ahora y rentala. Parte de renta se irá directo al enganche.</p>
        <div className='flex w-full py-8 justify-center sm:justify-start sm:w-1/2 xl:w-full'>
          <Link href='/registro'><a className='my-2 sm:my-4 mr-0 xl:mr-8 xl:mr-8 w-5/6 xl:w-fit py-3 text-center px-9 text-base 2xl:text-lg bg-yellow-300 font-chillax font-medium rounded-md hover:bg-yellow-200 transition-all'>Consigue tu casa</a></Link>
          <Link href='/vendetucasa'><a className='hidden sm:block my-4 w-10 xl:w-fit py-3 px-0 xl:px-9 text-base 2xl:text-lg text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Vende tu casa</a></Link>
        </div>
      </div>
    </div>
  )
}