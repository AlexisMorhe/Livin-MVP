import HeroVenta from "../components/VendeTuCasa/heroventa";
import Footer from "../components/General/footer";
import NavLogo from "../components/General/logo";
import Ventajas from "../components/VendeTuCasa/ventajas";

export default function VendeTuCasa() {
  return(
    <div className='bg-gray-50 w-full'>
      <div className='py-7 pl-4 absolute z-20 scale-125 left-96'>
        <NavLogo />
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <HeroVenta />
        <div className='bg-gray-50 w-full h-[70vh] py-20 flex justify-center items-center'>
          <Ventajas />
        </div>
        <Footer />
      </div>
    </div>
  )
}