import React from "react";
import AssetsCard from "./subcomponents/AssetsCard";

const Assets = () => {
  return (
    <div className="bg-orange-50 flex  sm:flex-row flex-col justify-evenly py-8 sm:space-y-0 space-y-4">
      <AssetsCard src="1" h1="40+" h2="Production Capacity" />
      <AssetsCard src="2" h1="113" h2="Years of Experience" />
      <AssetsCard src="3" h1="No 1" h2="On-time delivery" />
      <AssetsCard src="4" h1="+" h2="Best Price Guaranteed" />
    </div>
  );
};

export default Assets;
