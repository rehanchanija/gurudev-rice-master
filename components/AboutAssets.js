import React from "react";
import AssetsCard from "./subcomponents/AssetsCard";

const AboutAssets = () => {
  return (
    <div className="bg-gray-100 flex  sm:flex-row flex-col justify-evenly py-8 sm:space-y-0 space-y-4">
      <AssetsCard src="a1" h1="100+" h2="Years" />
      <AssetsCard src="a2" h1="4" h2="Continents" />
      <AssetsCard src="3" h1="10+" h2="Countries" />
    </div>
  );
};

export default AboutAssets;
