import {IoClose} from "react-icons/io5";
import {IoCheckmark} from "react-icons/io5";

export default function Ventajas() {
  return(
    <div className='w-3/4 flex font-rebond text-center text-lg text-dark'>
      <div className='flex flex-col w-1/4 text-start'>
        <div className='py-3 pl-3 bg-gray-200 h-14 font-semibold rounded-tl-lg'>Ventajas</div>
        <div className='py-3 pl-3 bg-white h-14'>Vende en un mes</div>
        <div className='py-3 pl-3 bg-white h-14'>Gestión de visitas y de la negociación</div>
        <div className='py-3 pl-3 bg-white h-20'>Compradores con ingresos y ahorros verificados</div>
        <div className='py-3 pl-3 bg-white h-14'>Gestión online de documentación</div>
        <div className='py-3 pl-3 bg-white h-14'>Ahorro en comisiones</div>
        <div className='py-3 pl-3 bg-white rounded-bl-lg h-14'>Ingresos extra gracias al alquiler</div>
      </div>
      <div className='flex flex-col w-1/4 scale-110 text-white'>
        <div className='py-3 pl-3 bg-dark font-semibold h-14 flex justify-center items-center rounded-t-lg'>Si vendes hoy con Livin</div>
        <div className='py-3 pl-3 bg-dark h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-dark h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-dark h-20 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-dark h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-dark h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-dark h-14 flex justify-center items-center rounded-b-lg'><IoCheckmark size={30}/></div>
      </div>
      <div className='flex flex-col w-1/4'>
        <div className='py-3 pl-3 bg-gray-200 font-semibold h-14 flex justify-center items-center'>Si vendes hoy con agencia</div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-white h-20 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
      </div>
      <div className='flex flex-col w-1/4'>
        <div className='py-3 pl-3 bg-gray-200 font-semibold rounded-tr-lg h-14 flex justify-center items-center'>Si vendes por tu cuenta</div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-20 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoClose size={30} /></div>
        <div className='py-3 pl-3 bg-white h-14 flex justify-center items-center'><IoCheckmark size={30}/></div>
        <div className='py-3 pl-3 bg-white rounded-br-lg h-14 flex justify-center items-center'><IoClose size={30} /></div>
      </div>
    </div>
  )
}
