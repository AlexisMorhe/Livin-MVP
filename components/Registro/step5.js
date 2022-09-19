import TextField from '@mui/material/TextField';
import {useForm} from "../../context/formContext";

export default function Step5({nombre, setNombre}) {

  const { form, formChanges } = useForm();

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Cuál es tu nombre?</p>
      <div className='mb-20 flex flex-col justify-start'>
        <TextField name={'nombre'} id="outlined-basic" label="Nombre" variant="outlined" onChange={formChanges} />
      </div>
    </div>
  )
}