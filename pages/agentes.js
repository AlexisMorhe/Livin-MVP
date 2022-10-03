import Link from "next/link";
import Layout from "../components/Layout/layout";

export default function Agentes() {
  return (
    <Layout>
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
      <div className='text-dark bg-yellow-300 w-full relative h-[66vh] flex justify-around text-dark'>
        <div className='flex  flex-col h-full z-10 w-2/5 pl-36 justify-between py-10 relative'>
          <div>
            <h3 className='font-domaine-medium text-[3.25rem]'>Contacto</h3>
            <p className='font-rebond text-xl my-5'>Únete a Livin y comienza a recibir comisiones por tu trabajo.</p>
            <p className='font-rebond text-xl my-5'>Llena el formulario de contacto y uno de nuestros asesores se pondrá en contacto contigo.</p>
          </div>
        </div>
        <div className='flex pl-20 font-rebond h-full text-xl z-10 w-3/5 justify-around relative'>
          <div className='flex flex-col h-5/6 w-1/3 pt-24 justify-between'>
            <div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Nombre:</label>
                <input className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Telefono:</label>
                <input className='rounded py-2 px-2'/>
              </div>
              <div className='flex flex-col w-5/6 mb-8'>
                <label className='mb-4'>Correo:</label>
                <input className='rounded py-2 px-2'/>
              </div>
            </div>
            <button className='w-5/6 py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Enviar mensaje</button>
          </div>
          <div className='h-5/6 w-1/2 pt-24 flex flex-col justify-between'>
            <label className='mb-4'>Mensaje:</label>
            <textarea className='rounded py-2 w-5/6 h-full px-2 resize-none border-none'/>
          </div>
        </div>
      </div>
    </Layout>
  )
}