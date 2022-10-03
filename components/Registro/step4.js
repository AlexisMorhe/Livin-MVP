import {useForm} from "../../context/formContext";
import CurrencyFormat from "react-currency-format";
import {useEffect, useState} from "react";

export default function Step4() {

  const { form, setForm } = useForm();
  const [ahorros, setAhorros] = useState(100000);

  useEffect(() => {
    setForm({
      ...form,
      'ahorros': ahorros,
    })
  }, [ahorros]);

  const handleChange = (values) => {
    const {formatted, value} = values;
    setAhorros(value)
  }

  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-4'>¿Tienes algo ahorrado para el pago de tu casa?</p>
      <p className='w-3/5 text-center mb-10'>Puedes dejar este campo vacío.</p>
      <div className='mb-20'>
        <CurrencyFormat thousandSeparator={true} prefix={' $ '} fixedDecimalScale={true} allowNegative={false} decimalScale={0} value={ahorros} onValueChange={handleChange} className='w-full border-b-yellow-300 border-b-4 border-t-0 border-x-0 bg-gray-50 focus:outline-none' />
      </div>
    </div>
  )
}