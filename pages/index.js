import Layout from '../components/Layout/layout';
import Hero from '../components/Home/hero'
import Calculator from "../components/Home/calculator";
import Testimony1 from "../components/Home/testimony1";
import Testimony2 from "../components/Home/testimony2";
import Explanation from "../components/Home/explanation";
import Featuring from "../components/Home/featuring";
import Report from "../components/Home/report";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featuring />
      <Testimony2 />
      <Explanation />
      <Testimony1 />
      <Calculator />
      <Report />
    </Layout>
  )
}
