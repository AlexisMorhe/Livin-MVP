import Layout from '../components/layout';
import Hero from '../components/hero'
import Calculator from "../components/calculator";
import Testimony1 from "../components/testimony1";
import Testimony2 from "../components/testimony2";
import Explanation from "../components/explanation";
import Featuring from "../components/featuring";
import Report from "../components/report";

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
