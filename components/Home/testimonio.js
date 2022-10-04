export default function Testimonio() {
  return (
    <div className='bg-gray-50 w-full px-40 relative h-[62vh] text-dark flex justify-center items-center'>
      <div className='w-1/2 pr-10 h-full pt-20'>
        <p className='font-domaine text-5xl leading-normal'>&quot;Livin me permitió conseguir un nuevo hogar para mi familia, nos cambió la vida por completo.&quot;</p>
        <p className='font-chillax text-right font-semibold mt-20 mr-10'>Alexis Morales Hernández.</p>
        <p className='font-rebond my-2 text-right mr-10'>Consiguió su propiedad en 2022,<br/> 30 meses después de entrar al programa de Livin.</p>
      </div>
      <div className='w-1/2 h-full'>
        <img src='/static/familia.webp' className='h-full w-full object-cover'/>
      </div>
    </div>
  )
}