import Layout from '../components/Layout/layout';
import Hero from '../components/Home/hero'
import Calculator from "../components/Home/calculator";
import Explanation from "../components/Home/explanation";
import Featuring from "../components/Home/featuring";
import Report from "../components/Home/report";
import Testimonio from "../components/Home/Testimonio";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featuring />
      <Explanation />
      <Testimonio />
      <Calculator />
      <Report />
    </Layout>
  )
}
