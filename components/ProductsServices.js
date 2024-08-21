import React from "react";

const ProductsServices = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto ">
        <h1 className="xl:text-4xl text-3xl pb-3 font-semibold text-center text-primary">
          Our Products
        </h1>
        <p className="text-xl text-center">
          Whether its working with rice farmers in Asia, or producing
          value-added products, we help our customers around the world meet the
          increasing demand for rice
        </p>
        <div className="flex sm:justify-evenly  sm:flex-row flex-col items-center py-10">
          {/* <ProductCard src="3" h1="SEED" />
          <ProductCard src="2" h1="RICE" />
          <ProductCard src="1" h1="Broken RICE " /> */}
          {/* <h2 className="text-primary xl:text-5xl text-3xl  font-semibold drop-shadow-2xl border rounded-2xl shadow-sm bg-white px-10 py-4">
            SEED
          </h2> */}
          <h2 className="text-primary text-2xl w-40 h-20 flex justify-center items-center text-center font-semibold drop-shadow-2xl border rounded-2xl shadow-sm bg-white  py-4">
            RICE
          </h2>
          <h2 className="text-primary  text-2xl w-40 h-20  flex justify-center items-center text-center font-semibold drop-shadow-2xl border rounded-2xl shadow-sm bg-white  py-4">
            BROKEN <br /> RICE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;
