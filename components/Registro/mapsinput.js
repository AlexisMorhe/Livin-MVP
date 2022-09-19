import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from "react";
import {useForm} from "../../context/formContext";

export default function MapsInput({formChanges}) {

  const { form, setForm } = useForm();
  const [direcciones, setDirecciones] = useState([])

  useEffect(() => {
    setForm({
      ...form,
      'direcciones': [direcciones],
    })
  }, [direcciones]);

  const handleChange = e => {
    setDirecciones( prevDirecciones => [...prevDirecciones, e.target.value]);
  }

  return (
    <Autocomplete
      style={{ width: 500 }}
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Selecciona la colonia"
          placeholder="Puedes escoger más de una opción"
          name={'direccion'}
        />
      )}
    />
  )
}

const options = [
  {label: 'Las Villas', ciudad: 'Torreon, Coahuila'},
  {label: 'San Isidro', ciudad: 'Torreon, Coahuila'},
  {label: 'Roma', ciudad: 'Ciudad de México'},
  {label: 'Real del Valle', ciudad: 'Pachuca'},
];

