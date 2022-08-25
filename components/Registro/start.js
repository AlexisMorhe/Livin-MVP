import {Fragment} from "react";

export default function Start({ onClick }) {
  return(
    <Fragment>
      <p className='text-xl font-medium w-3/5 text-center mb-20'>Vamos a hacerte algunas preguntas para ayudarte a encontrar tu nuevo hogar lo antes posible.</p>
      <button onClick={onClick} className=' font-chillax rounded-md py-3 px-32 bg-yellow-300 font-medium'>¡Adelante!</button>
    </Fragment>
  )
}