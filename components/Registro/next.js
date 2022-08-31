export default function Next({ nextStep }) {
  return (
    <button onClick={nextStep} className='font-chillax font-medium rounded-md py-3 w-80 bg-yellow-300 text-dark
     active:scale-105 transition-all'>
      Adelante
    </button>
  )
}