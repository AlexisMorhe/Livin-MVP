import Link from "next/link";
import { useRouter } from "next/router";
import NavLogo from "./logo";
import {useForm} from "../../context/formContext";
import {FiMenu} from "react-icons/fi";

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Agentes', href: '/agentes' },
  { name: 'Cómo Funciona', href: '/como-funciona' },
  { name: 'Buscar Hogar', href: '/buscar' },
  { name: 'Acerca De', href: '/acerca' },
]

export default function Navbar() {

  const {setMenu} = useForm();
  const router = useRouter();

  return (
    <div className='w-full overflow-x-clip bg-gray-50 text-dark'>
      <div className='w-full h-24 pr-6 pl-4 sm:pr-0 sm:pl-[8.2rem] pt-1 flex justify-between sm:justify-center items-center fixed bg-gray-50 z-20 shadow-md'>
        <div className='w-1/2 flex justify-between sm:w-1/5 sm:w-3/4 flex'>
          <div className='pt-3 pr-6 block sm:hidden'>
            <FiMenu onClick={() => setMenu(menu => !menu)} size={25} />
          </div>
          <NavLogo />
          <div className='hidden sm:flex justify-between items-center w-2/5 mr-14'>
            {navigation.map((item, index) => {
              return <Link key={index} href={item.href}><a className={ router.pathname === item.href
                ? 'relative py-2 font-chillax font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-yellow-300'
                :'relative py-2 font-chillax font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-yellow-300 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'} >
                {item.name}
              </a></Link>
            })}
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 flex items-center justify-end'>
          <Link href='/login'><a className='hidden sm:inline relative py-2 font-chillax font-medium mr-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-yellow-300 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'>Iniciar sesión</a></Link>
          <Link href='/registro'><a className='py-2 sm:py-3 px-4 sm:px-10 sm:mx-4 bg-yellow-300 font-chillax font-medium rounded-md hover:bg-yellow-200 transition-all'>Registrate</a></Link>
        </div>
      </div>
    </div>
)}