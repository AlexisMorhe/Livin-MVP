import Logo from "../components/General/logo";
import Start from "../components/Registro/start";
import {useState} from "react";
import Previous from "../components/Registro/previous";
import Step1 from "../components/Registro/step1";
import Step2 from "../components/Registro/step2";
import Step3 from "../components/Registro/step3";
import Step4 from "../components/Registro/step4";
import Step5 from "../components/Registro/step5";
import Step6 from "../components/Registro/step6";
import Next from "../components/Registro/next";
import {Carousel} from "flowbite-react";
import SwipeableViews from 'react-swipeable-views';



export default function Registro() {

  const slides = [
    'Elige una propiedad y mudate sin dar enganche',
    'Transforma tus rentas en patrimonio'
  ]


  const [step, setStep] = useState(0);
  const [nombre, setNombre] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [ahorros, setAhorros] = useState('');
  const [direccion, setDireccion] = useState('');

  const nextStep = () => {
    setStep(prev => prev + 1)
  };

  const prevStep = () => {
    setStep(prev => prev -1)
  }

  const handleStepChange = () => {
    setStep(index)
  }

  return(
    <div className='text-dark font-rebond w-full h-[100vh] flex overflow-clip'>
      <div className='py-10 px-20 absolute z-20 scale-125'>
        <Logo />
      </div>
      <div className='w-1/2 bg-gray-50 relative h-full flex flex-col items-center justify-center pr-10'>
        <SwipeableViews index={step} onChangeIndex={handleStepChange}>
          <Start nextStep={nextStep} />
          <Step1 direccion={direccion} setDireccion={setDireccion}/>
          <Step2 />
          <Step3 presupuesto={presupuesto} setPresupuesto={setPresupuesto}/>
          <Step4 ahorros={ahorros} setAhorros={setAhorros}/>
          <Step5 nombre={nombre} setNombre={setNombre}/>
          <Step6 nombre={nombre} presupuesto={presupuesto} ahorros={ahorros} nombre={nombre}/>
        </SwipeableViews>
        <div className={`${step === 0 ? 'bottom-[-100px]' : 'bottom-52'} transition-all  absolute h-20 flex justify-center items-end`}>
          <Previous prevStep={prevStep} />
          <Next nextStep={nextStep} />
        </div>
      </div>
      <div className='w-1/2 bg-yellow-300 h-full flex flex-col items-center justify-center'>
        <Carousel indicators={false} leftControl=' ' rightControl=' '>
          {slides.map((slide, index) => <div key={index} className='w-1/2 text-center tracking-wide h-full justify-center items-center flex text-5xl font-domaine-bold text-[3.25rem] leading-relaxed text-dark'>{slide}</div>)}
        </Carousel>
      </div>
    </div>
  )
}