import FeatureList from "./featurelist";

export default function HeroVenta() {

  const features = [
    'Protege tu precio ante la incertidumbre',
    'Aumenta tu rentabilidad a través del alquiler',
  ]

  return(
    <div className='bg-gray-50 w-full relative h-[70vh] text-dark flex'>
      <div className='w-full h-full flex justify-center absolute'>
        <img className='object-cover w-full' src='static/vendetucasa.jpg' />
      </div>
      <div className='flex flex-col bg-yellow-300 h-full z-10 w-1/2 pl-96 pr-10 justify-center relative z-10'>
        <h1 className='font-domaine-bold font-bold text-[3.25rem] my-4 leading-tight w-5/6'>Gana más por la venta de tu casa</h1>
        <p className='font-rebond w-5/6 my-4 text-xl'>Encuentra la casa de tus sueños, mudate ahora y rentala. Parte de renta se irá directo al enganche. Nuestro programa está diseñado para que puedas conseguir tu hipoteca en 3 años.</p>
        <div className='flex flex-col mt-5'>
          <FeatureList features={features} />
        </div>
      </div>
    </div>
  )
}