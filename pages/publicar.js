import axios from "axios";
import Layout from "../components/Layout/layout";

export default function Publicar() {

  const getProfile = async () => {
    const res = await axios.get('/api/profile');
    console.log(res);
  }

  return(
    <Layout>
      <div className='w-full h-full flex justify-center items-center'>
        <p className='text-xl font-domaine'>Publica tu propiedad</p>
        <button onClick={getProfile}>Ver</button>
      </div>
    </Layout>
  )
}