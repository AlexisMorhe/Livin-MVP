import Next from "./next";

export default function Start({ nextStep }) {
  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-20'>Vamos a hacerte algunas preguntas para ayudarte a encontrar tu nuevo hogar lo antes posible.</p>
      <Next nextStep={nextStep} />
    </div>
  )
}