import Head from "next/head";
import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import SustainabilitySubBanner from "../components/SustainabilitySubBanner";
import Talk from "../components/Talk";

const Sustainability = () => {
  return (
    <div>
      <Head>
        <title>Gurudev Rice | Sustaniability</title>
        <meta name="description" content="Quality Comes First" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>

      {/* <Breadcrum l1="/" l2="/sustaniability" h1="Home" h2="Sustaniability" /> */}
      <main className="sm:space-y-20 space-y-10 ">
        <Banner />
        <About
          h1="We want to leave the world a better place than we found it."
          h2a="Our food systems are under increasing pressure to address a growing population, changing dietary habits and their impact on the environment. As a leader in Agriculture, we know we can help. In our 30 years in business, we’ve made a lot of progress in improving access to food and nutrition, farmers’ lives and sustainability practices, especially in lower income and emerging countries in Africa and Asia."
          h2b="As we start a new chapter of growth, we want to do better. "
        />
        <SustainabilitySubBanner />
        <About
          h1="We believe that sustainability should sit at the heart of the business."
          h2a="We report against our sustainability goals in our Annual Reports and use the Global Reporting Initiative as a guidance framework. We also endeavour to incorporate stakeholder focus areas."
          h2b="We take a Capitals approach, reporting under Manufactured, Human, Social, Natural, Intangible and Intellectual Capitals. To recognise the value of these non-financial capitals and make informed business decisions, our Sustainability Finance team was established to holistically approach multi-capital valuation and accounting and embed it into our business decision-making."
        />
        <Talk />
      </main>
    </div>
  );
};

export default Sustainability;
