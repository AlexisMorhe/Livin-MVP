import {useForm} from "../../context/formContext";

export default function Step4() {

  const { form, formChanges } = useForm();

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-4'>¿Tienes algo ahorrado para el pago de tu casa?</p>
      <p className='w-3/5 text-center mb-10'>Puedes dejar este campo vacío.</p>
      <div className='mb-20'>
        <input type='number' name={'ahorros'} onChange={formChanges} className='w-full border-b-yellow-300 border-b-4 border-t-0 border-x-0 bg-gray-50 focus:outline-none' />
      </div>
    </div>
  )
}