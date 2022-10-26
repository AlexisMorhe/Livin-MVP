import {useForm} from "../../context/formContext";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {IoClose} from "react-icons/io5";

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Agentes', href: '/agentes' },
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Buscar Hogar', href: '/buscar' },
    { name: 'Acerca De', href: '/acerca' },
];

export default function NavMobile() {

    const {menu, setMenu} = useForm();
    const router = useRouter();

    useEffect(() => {
        console.log(router.asPath)
        if (menu) {
            setMenu(!menu)
        }
    }, [router.asPath]);

    return (
        <div className={menu ? 'block fixed overflow-y-clip z-20 w-full h-full flex flex-col bg-yellow-300'
            : 'hidden'}>
            <div className='h-24 w-full flex items-center justify-start pt-1 pl-4'>
                <IoClose onClick={() => setMenu(menu => !menu)} size={30} />
            </div>
            <div className='flex flex-col sm:hidden justify-around items-center pt-10 font-rebond font-medium w-full text-2xl'>
                {navigation.map((item, index) => {
                    return <Link key={index} href={item.href}><a className={ router.pathname === item.href
                        ? 'relative pl-10 py-4 bg-white w-full'
                        :'relative pl-10 py-4 w-full'} >
                        {item.name}
                    </a></Link>
                })}
                <div className='w-5/6 pt-16'>
                    <Link href='/registro'><a className='py-2 mb-4 w-full block text-center bg-dark font-medium text-base text-white rounded-md'>Registrate como comprador</a></Link>
                    <Link href='/registro-agente'><a className='py-2 w-full block text-center bg-yellow-300 border-2 border-dark font-medium text-base text-black rounded-md'>Registrate como vendedor</a></Link>
                </div>
            </div>
        </div>
    )
}