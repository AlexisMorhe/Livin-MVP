import CreditScore from "./creditscore";

export default function Report() {
  return(
    <div className='w-full h-[80vh] flex flex-col justify-center items-center py-10 max-w-screen-2xl'>
      <div className='w-2/3 h-1/4 mb-10 flex flex-col justify-around items-center'>
        <h5 className='font-domaine-medium text-[3.25rem]'>Asesoramiento para mejorar tu historial</h5>
        <p className='font-rebond text-lg text-center'>Nuestro equipo te guiará a través del proceso para ayudarte a construir un perfil de crédito ideal para conseguir una hipoteca. Te apoyamos a mejorar tu capacidad de ahorro y nos encargamos de compartir tu informe hipotecario.</p>
      </div>
      <CreditScore />
    </div>
  )
}