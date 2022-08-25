import Link from "next/link";

export default function NavLogo() {
  return(
    <Link href='/pages'>
      <a className='text-3xl font-chillax flex items-center w-48'>
        <img className='w-7 mr-3' src='/static/livin_logo.svg' />
        <p className='mt-1 font-medium text-dark'>Liv<span className='font-semibold'>in</span></p>
      </a>
    </Link>
  )
}