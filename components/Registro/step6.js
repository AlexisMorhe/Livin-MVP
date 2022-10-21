import {useForm} from "../../context/formContext";

export default function Step6({nextStep, prevStep}) {

  const { form, formChanges } = useForm();

  return (
    <div className='w-full h-full relative'>
      <div className='relative w-full justify-center items-center flex flex-col mt-40'>
        <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Cuál es tu correo?</p>
        <div className='mb-20 flex flex-col justify-start'>
          <input className='w-full border-b-yellow-300 border-b-4 border-t-0 border-x-0 pb-2 bg-gray-50 focus:outline-none' onChange={formChanges} name='correo' placeholder='hola@livin.mx' />
        </div>
        <p className='text-xl font-medium w-3/5 text-center mb-10'>Ingresa una contraseña</p>
        <div className='mb-20 flex flex-col justify-start'>
          <input className='w-full border-b-yellow-300 border-b-4 border-t-0 border-x-0 pb-2 bg-gray-50 focus:outline-none' onChange={formChanges} name='clave' placeholder='casita123' />
        </div>
      </div>
    </div>
  );
}