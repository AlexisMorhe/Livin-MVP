import { AiFillCheckCircle, AiFillCloseCircle, AiFillAlert } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

export default function CreditScore() {

  const informe = [
    {
      'estado': 2,
      'titulo': 'Situación Laboral',
      'descripcion': 'Contrato fijo',
    },
    {
      'estado': 1,
      'titulo': 'Ingresos',
      'descripcion': '$30,000 al mes',
    },
    {
      'estado': 0,
      'titulo': 'Ahorros',
      'descripcion': '$5,000 / $1,000 al mes',
    },
    {
      'estado': 2,
      'titulo': 'Historial Crediticio',
      'descripcion': 'Sin deudas',
    },
  ]


  return(
      <div className='bg-gray-100 rounded-xl w-4/5 h-4/6 flex'>
        <div className='rounded-l-xl bg-dark w-1/2 h-full flex flex-col p-12'>
          <p className='font-chillax text-xl text-white font-medium'>Informe hipotecario</p>
          <p className='font-rebond text-4xl font-medium text-white my-5'>¡Vas por buen camino!</p>
          <p className='font-rebond text-white text-xl mt-10'>Tienes el nivel de ingresos y ahorras la cantidad necesaria para acceder a una hipoteca. Estamos seguros que con nuestra ayuda la conseguiras en poco tiempo.</p>
        </div>
        <div className='w-1/2 h-full flex flex-col pt-10'>
          {
            informe.map((situacion, index) => {

              const getIcon = () => {
                switch (situacion.estado) {
                  case 0:
                    return <AiFillCloseCircle color={'#dc2626'} size={28} />
                  case 1:
                    return <AiFillAlert color={'rgb(249, 202, 21)'} size={28} />
                  case 2:
                    return <AiFillCheckCircle color={'green'} size={28} />
                }
              }

              return(
                <div className='h-1/4 px-20 flex flex-col border-b-2 rounded-r-xl justify-center' key={index}>
                  <div className='flex'>
                    <div className='pr-3'>{getIcon()}</div>
                    <p className='font-rebond text-xl font-semibold'>{situacion.titulo}</p>
                  </div>
                  <div className='flex p-3'>
                    <div className='pt-[4px] pr-3'><BsFillPersonFill /></div>
                    <p className='font-rebond'>{situacion.descripcion}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}