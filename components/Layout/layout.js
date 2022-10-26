import Head from 'next/head';
import Footer from "./footer";
import Navbar from "./navbar";
import NavMobile from "./navmobile";

export default function Layout({title, description, children}) {

  return (
    <div className='w-full'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta initial-scale='1.0' minimum-scale='1.0' />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className='w-full bg-gray-50'>
        <Navbar />
        <NavMobile />
        <div className='pt-24 w-full flex flex-col items-center justify-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}


