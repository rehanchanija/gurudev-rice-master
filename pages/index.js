import Head from "next/head";
import Banner from "../components/Banner";
import FirmSection from "../components/FirmSection";
import HomeFirm from "../components/HomeFirm";
import SubBanner from "../components/SubBanner";
import Talk from "../components/Talk";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gurudev Rice</title>
        <meta name="description" content="Quality Comes First" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>

      <main className="sm:space-y-20  space-y-10">
        <Banner id1="1" id2="2" id3="3" im1="1" im2="2" im3="3" />
        {/* <About
          h1="Manufacturer, Processor & Exporter of Indian Rice
"
          h2a="Guru Dev Rice is one of the top manufacturers, suppliers, and exporters of superior quality Indian rice, broken rice, and pesticide-free rice. Our company offers a diverse range of raw, steam, and broken rice. It has an authentic taste, purity, and deliciousness and is full of nutritional value."
          h2b="We have a milling and manufacturing unit of skilled laborers who take care of packaging according to industry standards. Our worldwide appreciated-rice is stored in a moisture-proof and infection-free environment."
        /> */}
        {/* <Assets /> */}
        <HomeFirm />
        <FirmSection />
        <SubBanner />
        {/* <LatestNews /> */}
        <Talk />
      </main>
    </div>
  );
}
