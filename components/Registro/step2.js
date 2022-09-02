export default function Step2() {

  return(
    <div className='relative w-full justify-center items-center flex flex-col'>
      <p className='text-xl font-medium w-3/5 text-center mb-4'>¿Cuántas habitaciones quieres?</p>
      <p className='w-3/5 text-center mb-10'>Puedes seleccionar varias opciones.</p>
      <div className='mb-10'>
        <div className='flex items-center py-4 w-32'><input type='checkbox' className='mr-4' value={1}/><label>1 habitación</label></div>
        <div className='flex items-center py-4 w-32'><input type='checkbox' className='mr-4' value={2}/><label>2 habitaciones</label></div>
        <div className='flex items-center py-4 w-32'><input type='checkbox' className='mr-4' value={3}/><label>3 habitaciones</label></div>
        <div className='flex items-center py-4 w-32'><input type='checkbox' className='mr-4' value={4}/><label>4 o más habitaciones</label></div>
      </div>
    </div>
  )
}