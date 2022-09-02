import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({setDireccion}) {
  return (
    <Autocomplete
      style={{ width: 500 }}
      multiple
      id="tags-standard"
      options={direcciones}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Selecciona la colonia"
          placeholder="Puedes escoger más de una opción"
          onChange={(e) => setDireccion(e.target.value)}
        />
      )}
    />
  )
}

const direcciones = [
  {label: 'Las Villas', ciudad: 'Torreon, Coahuila'},
  {label: 'San Isidro', ciudad: 'Torreon, Coahuila'},
  {label: 'Roma', ciudad: 'Ciudad de México'},
  {label: 'Real del Valle', ciudad: 'Pachuca'},
];

