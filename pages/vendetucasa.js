import Layout from "../components/layout";
import HeroVenta from "../components/heroventa";
import Footer from "../components/footer";
import Link from "next/link";
import NavLogo from "../components/navlogo";
import Ventajas from "../components/ventajas";

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