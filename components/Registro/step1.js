import {Fragment} from "react";

export default function Step1() {
  return(
    <Fragment>
      <p className='text-xl font-medium w-3/5 text-center mb-20'>¿Dónde te interesa vivir?</p>
      <input type='text' className='px-10 mb-20'/>
    </Fragment>
  )
}