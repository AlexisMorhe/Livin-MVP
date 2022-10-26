import Link from "next/link";

export default function Logo() {
  return(
    <Link href='/'>
      <a className='text-3xl font-chillax flex items-center w-48'>
        <img className='w-7 mr-2' src='/static/livin_logo.svg' />
        <p className='pt-2 font-medium text-dark'>Liv<span className='font-semibold'>in</span></p>
      </a>
    </Link>
  )
}