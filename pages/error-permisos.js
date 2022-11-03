import Layout from "../components/Layout/layout";

export default function ErrorPermisos() {
  return (
    <Layout>
      <div className='w-full h-96 flex justify-center items-center'>
        <p className='font-rebond'>Lo sentimos, no tienes permiso para publicar. Debes registrarte como vendedor.</p>
      </div>
    </Layout>
  )
}