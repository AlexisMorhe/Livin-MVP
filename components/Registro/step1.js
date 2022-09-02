import GoogleMaps from "./mapsinput";

export default function Step1() {
  return(
    <div className='relative w-full justify-center items-center flex flex-col mt-40'>
      <p className='text-xl font-medium w-3/5 text-center mb-10'>¿Dónde te interesa vivir?</p>
      <div className='mb-20'>
        <GoogleMaps />
      </div>
    </div>
  )
}