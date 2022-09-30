import Layout from '../components/Layout/layout';
import Hero from '../components/Home/hero'
import Calculator from "../components/Home/calculator";
import Explanation from "../components/Home/explanation";
import Featuring from "../components/Home/featuring";
import Report from "../components/Home/report";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featuring />
      <Explanation />
      <Calculator />
      <Report />
    </Layout>
  )
}
