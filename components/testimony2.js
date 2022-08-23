export default function Testimony2() {
  return (
    <div className='bg-gray-50 w-full px-40 relative h-[62vh] text-dark flex justify-center items-center'>
      <div className='w-1/2 h-full pt-20'>
        <p className='font-domaine text-5xl'>"Gracias a Livin he podido a ayudar a mucha gente a conseguir un hogar que antes no podía, es una empresa con un bien social."</p>
        <p className='font-chillax font-semibold mt-20'>Agente de Bienes Hernández López</p>
        <p className='font-rebond my-7'>Ha ayudado a 20 familias a conseguir un hogar.</p>
      </div>
      <div className='w-1/2 h-full'>
        <img src='/static/familia.webp' className='h-full w-full object-cover'/>
      </div>
    </div>
  )
}