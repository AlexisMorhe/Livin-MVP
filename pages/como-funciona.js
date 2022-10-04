import Layout from "../components/Layout/layout";
import Testimonio2 from "../components/Como Funciona/testimonio2";
import Link from "next/link";

export default function Funcionamiento() {
  return(
    <Layout>
      <div className='bg-slate-700 w-full px-12 relative h-[63vh] text-dark flex'>
        <div className='flex text-slate-50 flex-col h-full z-10 w-2/5 pl-20 justify-center relative'>
          <h1 className='font-domaine-bold tracking-wide text-[3.25rem] my-4 leading-tight w-5/6'>Consigue la casa <br/>de tus sueños sin enganche.</h1>
          <p className='font-rebond w-full my-4 text-xl'>Con la ayuda de inteligencia artificial determinamos el monto de tu crédito. Conseguimos un nuevo hogar que se adapte a tu presupuesto y te ayudamos a mudarte sin tener que pedirle una hipoteca al banco.</p>
          <div className='flex justify-between w-2/3'>
            <Link href='/registro'><a className='my-4 w-fit py-3 px-9 bg-yellow-300 font-chillax text-dark font-medium rounded-md hover:bg-yellow-200 transition-all'>Consigue tu casa</a></Link>
            <Link href='/vendetucasa'><a className='my-4 w-fit py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Vende tu casa</a></Link>
          </div>
        </div>
      </div>
      <Testimonio2 />
    </Layout>
  )
}