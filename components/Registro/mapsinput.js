import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useForm} from "../../context/formContext";


export default function MapsInput({houses}) {

  const { formChanges, form } = useForm();
  const {nombre, ingreso, ahorros, estado, ciudad, colonia, habitaciones} = form;

  const handleChange = (e) => {
    formChanges(e);
  }

  return (
    <div className='w-full'>
      <div className='py-5 w-full'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            label="Estado"
            name='estado'
            onChange={handleChange}
          >
            {houses.map((house) => <MenuItem key={house._id} value={house.estado}>{house.estado}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <div className='py-5 w-full'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
          <Select
            label="Ciudad"
            name='ciudad'
            onChange={handleChange}
          >
            {houses.filter(house => house.estado == estado[0]).map(house => {
              return <MenuItem key={house._id} value={house.ciudad}>{house.ciudad}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
      <div className='py-5 w-72 relative'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Colonia</InputLabel>
          <Select
            label="Colonia"
            name='colonia'
            onChange={handleChange}
          >
            {houses.filter(house => house.ciudad == ciudad[0]).map(house => {
              return <MenuItem key={house._id} value={house.colonia}>{house.colonia}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  )
};

