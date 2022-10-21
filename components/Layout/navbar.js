import Link from "next/link";
import { useRouter } from "next/router";
import NavLogo from "./logo";

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Agentes', href: '/agentes' },
  { name: 'Cómo Funciona', href: '/como-funciona' },
  { name: 'Buscar Hogar', href: '/buscar' },
  { name: 'Acerca De', href: '/acerca' },
]

export default function Navbar() {

  const router = useRouter();

  return (
    <div className='w-full overflow-x-clip bg-gray-50 text-dark'>
      <div className='hidden w-full h-24 pt-1 md:flex justify-center items-center fixed bg-gray-50 z-20 shadow-md'>
        <div className='w-3/4 flex'>
          <div className='ml-[8.2rem]'>
            <NavLogo />
          </div>
          <div className='flex justify-between items-center w-2/5 mr-14'>
            {navigation.map((item, index) => {
              return <Link key={index} href={item.href}><a className={ router.pathname === item.href
                ? 'relative py-2 font-chillax font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-yellow-300'
                :'relative py-2 font-chillax font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-yellow-300 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'} >
                {item.name}
              </a></Link>
            })}
          </div>
        </div>
        <div className='w-1/4 flex items-center'>
          <Link href='/login'><a className='relative py-2 font-chillax font-medium mr-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-yellow-300 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'>Iniciar sesión</a></Link>
          <Link href='/registro'><a className='py-3 px-10 mx-4 bg-yellow-300 font-chillax font-medium rounded-md hover:bg-yellow-200 transition-all'>Registrate</a></Link>
        </div>
      </div>
      <div className='w-full h-28 pt-1 bg-white flex justify-around items-center fixed z-20 shadow-sm'></div>
  </div>

  )
}