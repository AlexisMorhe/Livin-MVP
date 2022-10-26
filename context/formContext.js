import {createContext, useContext, useEffect, useState} from "react";

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);

export default function FormProvider({ children }) {

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    clave: '',
    ingreso: 1000,
    ahorros: 100000,
    ciudad: '',
    estado: '',
    colonia: '',
    habitaciones: [[],[]],
  });
  const [menu, setMenu] = useState(false);

  const formChanges = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: [value],
    })
  }

  return (
    <FormContext.Provider value={{ step, setStep, form, formChanges, setForm, menu, setMenu }}>
      { children }
    </FormContext.Provider>)
};