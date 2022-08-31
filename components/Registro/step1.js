import {Fragment} from "react";
import GoogleMaps from "./mapsinput";

export default function Step1() {
  return(
    <Fragment>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Dónde te interesa vivir?</p>
      <div className='px-10 mb-20'>
        <GoogleMaps>
          Hola
        </GoogleMaps>
      </div>
    </Fragment>
  )
}