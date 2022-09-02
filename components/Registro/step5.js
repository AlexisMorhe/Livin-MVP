import TextField from '@mui/material/TextField';

export default function Step5({nombre, setNombre}) {
  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Cuál es tu nombre?</p>
      <div className='mb-20 flex flex-col justify-start'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setNombre(e.target.value)} />
      </div>
    </div>
  )
}