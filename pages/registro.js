import Logo from "../components/General/logo";
import Form  from '../components/Registro/form';
import Previous from "../components/Registro/previous";
import Next from "../components/Registro/next";
import {Carousel} from "flowbite-react";
import {useForm} from "../context/formContext";
import House from '../models/House';
import dbConnect from "../lib/dbConnect";

export default function Registro({houses}) {

  const slides = [
    'Elige una propiedad y mudate sin dar enganche',
    'Transforma tus rentas en patrimonio'
  ];


  const { step, setStep } = useForm();
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
      <div className='w-1/2 bg-gray-50 relative h-full flex flex-col items-center justify-center pr-10 z-10'>
        <Form houses={houses} handleStepChange={handleStepChange} nextStep={nextStep}/>
        <div className={`${step === 0 || step === 6 ? 'bottom-[-100px]' : 'bottom-52'} transition-all  absolute h-20 flex justify-center items-end`}>
          <Previous prevStep={prevStep} />
          <Next nextStep={nextStep} />
        </div>
      </div>
      <div className='w-1/2 bg-yellow-300 h-full flex flex-col items-center justify-center z-30'>
        <Carousel indicators={false} leftControl=' ' rightControl=' '>
          {slides.map((slide, index) => <div key={index} className='w-1/2 text-center tracking-wide h-full justify-center items-center flex text-5xl font-domaine-bold text-[3.25rem] leading-relaxed text-dark'>{slide}</div>)}
        </Carousel>
      </div>
    </div>
  )
}

export async function getStaticProps({params}) {
  await dbConnect();
  const results = await House.find({}).lean();
  const houses = results.map(house => {
    house._id = house._id.toString();
    house.ciudad = house.ciudad.toString();
    house.estado = house.estado.toString();
    house.colonia = house.colonia.toString();
    house.habitaciones = parseInt(house.habitaciones);
    house.metros_terreno = parseInt(house.metros_terreno);
    house.metros_construccion = parseInt(house.metros_construccion);
    return house
  });
  return { props: { houses } }
}