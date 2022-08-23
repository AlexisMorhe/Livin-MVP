import Head from 'next/head';
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({title, description, children}) {

  return (
    <div className='w-full'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full bg-gray-50'>
        <Navbar />
        <div className='pt-24 w-full flex flex-col items-center justify-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}


