import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={direcciones}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Escribe zonas, colonias, ciudades..." />}
    />
  );
}

const direcciones = [
  {label: 'Las Villas', ciudad: 'Torreon, Coahuila'},
  {label: 'San Isidro', ciudad: 'Torreon, Coahuila'},
  {label: 'Roma', ciudad: 'Ciudad de México'},
  {label: 'Real del Valle', ciudad: 'Pachuca'},
];

