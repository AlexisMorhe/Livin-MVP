export default function Previous({ prevStep }) {
  return (
    <button onClick={prevStep} className='font-chillax font-medium rounded-md py-3 w-80 bg-dark text-white mr-5
    active:scale-105 transition-all'>
      Regresar
    </button>
  )
}