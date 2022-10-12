import Layout from "../components/Layout/layout";
import Testimonio2 from "../components/Como Funciona/testimonio2";
import Link from "next/link";

export default function Funcionamiento() {
  return(
    <Layout>
      <div className='bg-darkblue w-full px-12 relative h-[80vh] text-dark flex justify-around'>
        <div className='w-1/3 pl-20 h-full flex justify-center items-center'>
          <img className='rounded-full object-cover h-[40rem] w-[35rem]' src='static/mudanza.jpg' />
        </div>
        <div className='flex text-slate-50 flex-col h-full z-10 w-1/3 justify-center relative'>
          <h1 className='font-domaine-bold tracking-wide text-[3.25rem] my-4 leading-tight w-5/6'>Convierte tus rentas en el enganche de tu nuevo hogar.</h1>
          <p className='font-rebond w-full my-4 text-2xl'>Con la ayuda de inteligencia artificial determinamos el monto de tu crédito. Conseguimos un nuevo hogar que se adapte a tu presupuesto y te ayudamos a mudarte sin tener que pedirle una hipoteca al banco.</p>
          <p className='font-rebond w-full my-4 text-2xl'>Con la ayuda de inteligencia artificial determinamos el monto de tu crédito. Conseguimos un nuevo hogar que se adapte a tu presupuesto y te ayudamos a mudarte sin tener que pedirle una hipoteca al banco.</p>
        </div>
      </div>
      <Testimonio2 />
    </Layout>
  )
}