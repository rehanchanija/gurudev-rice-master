import Head from "next/head";
import React from "react";
import AboutusAbout from "../components/AboutusAbout";
import Banner from "../components/Banner";
import ProductsServices from "../components/ProductsServices";
import Talk from "../components/Talk";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Gurudev Rice | Products</title>
        <meta name="description" content="Quality Comes First" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      {/* <Breadcrum l1="/" l2="/products" h1="Home" h2="Products" /> */}

      <main className="space-y-20 ">
        <Banner id1="4" id2="5" id3="6" im1="4" im2="5" im3="6" />
        <ProductsServices />

        <AboutusAbout
          h1="Our Values"
          h2a="We offer our customers a deep understanding of market needs, built through our on-the-ground presence in Asia  over the last 100 years."
          h2b="Our operating capabilities in global origination, processing, trading, logistics, distribution and risk management set us apart from our peers, while our strategic manufacturing assets in key destination markets strengthen our service to customers."
        />
        {/* <AboutAssets /> */}
        {/* <SubBanner /> */}
        {/* <LatestNews /> */}
        <Talk />
      </main>
    </div>
  );
};

export default Products;
