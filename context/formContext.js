import {createContext, useContext, useEffect, useState} from "react";

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);

export default function FormProvider({ children }) {

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nombre: '',
    presupuesto: 0,
    ahorros: 0,
    direcciones: [],
    habitaciones: [],
  });

  const formChanges = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: [value],
    })
  }

  return (
    <FormContext.Provider value={{ step, setStep, form, formChanges, setForm }}>
      { children }
    </FormContext.Provider>)
};