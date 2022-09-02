const Step6 = ({nombre, ahorros, presupuesto}) => {
  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Hola {nombre}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ahorros: {ahorros}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Tus ingresos: {presupuesto}</p>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>Puedes obtener un credito de hasta: {presupuesto * 6}</p>
    </div>
  )
}

export default Step6