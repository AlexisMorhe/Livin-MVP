import Link from "next/link";

export default function HeroAgentes(){
  return(
    <div className='bg-gray-50 w-11/12 px-12 relative h-[63vh] text-dark flex'>
      <div className='w-7/12 h-full flex justify-center'>
        <img className='object-cover w-full' src='static/agente.jpg' />
      </div>
      <div className='flex flex-col h-full z-10 w-2/5 pl-20 justify-center relative'>
        <h1 className='font-domaine-bold tracking-wide font-bold text-[3.25rem] my-4 leading-tight w-5/6'>¿Quieres trabajar como <br/>agente de Livin?</h1>
        <p className='font-rebond w-full my-4 text-xl'>Sugierele a tus clientes el comprar o vender su casa de Livin y nosotros nos encargamos de las comisiones.</p>
        <div className='flex justify-between w-[70vw] lg:w-2/3'>
          <Link href='/'><a className='my-4 lg:w-fit py-3 px-4 lg:px-9 bg-yellow-300 font-chillax font-medium rounded-md hover:bg-yellow-200 transition-all'>Quiero ser contactado</a></Link>
        </div>
      </div>
    </div>
  )
}