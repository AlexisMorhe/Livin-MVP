import Link from "next/link";
import Layout from "../components/Layout/layout";
import HeroAgentes from "../components/Agentes/hero-agentes";
import Contacto from "../components/Agentes/contacto";

export default function Agentes() {
  return (
    <Layout>
      <HeroAgentes />
      <Contacto />
    </Layout>
  )
}