import TextField from '@mui/material/TextField';
import {useForm} from "../../context/formContext";

export default function Step5({nombre, setNombre}) {

  const { form, formChanges } = useForm();

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Cuál es tu nombre?</p>
      <div className='mb-20 flex flex-col justify-start'>
        <input className='w-full border-b-yellow-300 border-b-4 border-t-0 border-x-0 pb-2 bg-gray-50 focus:outline-none' name='nombre' placeholder='Nombre' onChange={formChanges} />
      </div>
    </div>
  )
}