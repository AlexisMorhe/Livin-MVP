import Logo from "../components/General/logo";
import Start from "../components/Registro/start";
import {useState} from "react";
import Previous from "../components/Registro/previous";
import Step1 from "../components/Registro/step1";
import Step2 from "../components/Registro/step2";
import Next from "../components/Registro/next";
import {Carousel} from "flowbite-react";

export default function Registro() {

  const slides = [
    'Elige una propiedad y mudate sin dar enganche',
    'Transforma tus rentas en patrimonio'
  ]

  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prev => prev + 1)
  };

  const prevStep = () => {
    setStep(prev => prev -1)
  }

  return(
    <div className='text-dark font-rebond w-full h-[100vh] flex'>
      <div className='py-10 px-20 absolute z-20 scale-125'>
        <Logo />
      </div>
      <div className='w-1/2 bg-gray-50 relative h-full flex flex-col items-center justify-center pr-10'>

        {step === 0 && <Start />}
        {step === 1 && <Step1 />}
        {step ===2 && <Step2 />}
        <div className={`${step === 0 ? 'bottom-96' : 'bottom-52'} absolute h-20 flex justify-center items-end`}>
          {step > 0 && <Previous prevStep={prevStep} />}
          <Next nextStep={nextStep} />
        </div>
      </div>
      <div className='w-1/2 bg-yellow-300 h-full flex flex-col items-center justify-center'>
        <Carousel indicators={false} leftControl=' ' rightControl=' '>
          {slides.map(slide => <div className='w-1/2 text-center tracking-wide h-full justify-center items-center flex text-5xl font-domaine-bold text-[3.25rem] leading-relaxed text-dark'>{slide}</div>)}
        </Carousel>
      </div>
    </div>
  )
}