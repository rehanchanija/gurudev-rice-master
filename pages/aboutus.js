import Head from "next/head";
import React from "react";
import AboutAssets from "../components/AboutAssets";
import AboutSubBanner from "../components/AboutSubBanner";
import AboutText from "../components/AboutText";
import AboutusAbout from "../components/AboutusAbout";
import PortFolio from "../components/PortFolio";
import Talk from "../components/Talk";
import Team from "../components/Team";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Gurudev Rice | About Us</title>
        <meta name="description" content="Quality Comes First" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>

      {/* <Breadcrum l1="/" l2="/aboutus" h1="Home" h2="About Us" /> */}
      <main className="sm:space-y-20 space-y-10 ">
        <AboutSubBanner />
        <AboutusAbout
          h1="About Us"
          h2a="Guru Dev Rice is the leading Indian rice miller, exporter, and manufacturer established in 1910. One of the largest processors and exporters of the finest quality rice. We offer a diverse range of raw, steam, and broken rice.

"
          h2b="We have a well-equipped rice mill with a production capacity of 40 tons per hour. The production unit is well equipped with the latest technology machinery from renowned companies. Our team is working to reach our customers on time with advanced processing, quality control, customized packaging, and a bulk storage facility."
        />
        {/* <SustainabilityContent /> */}

        <AboutText />
        <Team />
        <AboutAssets />
        <PortFolio />
        {/* <SubBanner /> */}
        {/* <LatestNews /> */}
        <Talk />
      </main>
    </div>
  );
};

export default AboutUs;
