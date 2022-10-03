import {useForm} from "../../context/formContext";
import CurrencyFormat from "react-currency-format";
import Link from 'next/link';

export default function Preaprobacion() {
  const { form } = useForm();
  const {nombre, ingreso, ahorros, estado, ciudad, colonia, habitaciones} = form;

  return (
    <div className='w-full overflow-clip h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
      <div className='w-4/5 h-3/5 rounded-3xl bg-yellow-300 flex flex-col pl-20 justify-center'>
        <div className='flex flex-col justify-center w-1/2 h-full'>
          <h1 className='font-domaine-bold tracking-wide font-bold text-[3.25rem] my-4 leading-tight'>Tienes un crédito<br/>preaprobado por
            <CurrencyFormat value={ingreso * 40} displayType={"text"} thousandSeparator={true} prefix={' $ '} fixedDecimalScale={true} decimalSeparator={''} decimalScale={0}/>
          </h1>
          <p className='font-rebond my-4 text-xl'>Livin determina los montos basado en la información que proporcionas. Para poder otorgarte este crédito necesitamos todavía algo más de información.</p>
          <Link href='/bienvenido'><a className='mt-10 w-fit py-3 px-9 text-white bg-dark font-chillax font-medium rounded-md hover:bg-slate-700 transition-all'>Proximamente podrás continuar con el proceso...</a></Link>
        </div>
      </div>
    </div>
  )
}