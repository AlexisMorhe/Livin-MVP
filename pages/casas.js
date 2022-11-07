import dbConnect from "../lib/dbConnect";
import House from "../models/House";
import Layout from "../components/Layout/layout";
import {Carousel} from "flowbite-react";

export default function Casas({ houses }) {
  return (
    <Layout>
      <div className='h-[100vh] w-full py-10 px-20 flex justify-around items-center'>
        {houses.map((house) => {
          return (
            <div key={house._id} className='bg-gray-200 flex flex-col rounded-lg w-1/4 h-80 p-4'>
              <Carousel indicators={false} leftControl=' ' rightControl=' '>
                {house.imagenes.map((imagen, index) => <img key={index} src={imagen}></img>)}
              </Carousel>
              <p className='font-rebond text-2xl text-right font-semibold my-2'>{house.colonia}, {house.ciudad}, {house.estado}</p>
              <p className='font-chillax text-right'>{house.habitaciones} habitaciones</p>
              <p className='font-rebond text-right'>{house.descripcion}</p>
            </div>)}
          )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  await dbConnect();
  const results = await House.find({}).lean();
  const houses = results.map(house => {
    house._id = house._id.toString();
    house.ciudad = house.ciudad.toString();
    house.estado = house.estado.toString();
    house.colonia = house.colonia.toString();
    house.habitaciones = parseInt(house.habitaciones);
    house.terreno = parseInt(house.terreno);
    house.construccion = parseInt(house.construccion);
    house.precio = parseInt(house.precio);
    house.descripcion = house.descripcion.toString();
    house.imagenes = house.imagenes.map((imagen) => imagen.toString());
    return house
  });
  return {
    props: {
      houses
    }
  }
}