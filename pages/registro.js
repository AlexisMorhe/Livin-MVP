import NavLogo from "../components/General/logo";
import Start from "../components/Registro/start";
import {useState} from "react";
import Previous from "../components/Registro/previous";
import Step1 from "../components/Registro/step1";

export default function Registro() {

  const [paso, setPaso] = useState(0);

  const siguientePaso = () => {
    setPaso(prev => prev + 1)
  };

  const anteriorPaso = () => {
    setPaso(prev => prev -1)
  }

  return(
    <div className='text-dark font-rebond w-full h-[100vh] flex'>
      <div className='py-10 px-20 absolute z-20 scale-125'>
        <NavLogo />
      </div>
      <div className='w-1/2 bg-gray-50 h-full flex flex-col items-center justify-center pr-10'>
        {paso === 0 && <Start onClick={siguientePaso} />}
        {paso === 1 && <Step1 onClick={siguientePaso} />}
        {paso > 0 && <Previous onClick={anteriorPaso} />}
      </div>
      <div className='w-1/2 bg-yellow-300 h-full flex flex-col items-center justify-center'>

      </div>
    </div>
  )
}