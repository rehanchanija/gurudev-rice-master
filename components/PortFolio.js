import Image from "next/image";
import React from "react";

const PortFolio = () => {
  return (
    <div className="flex flex-wrap max-w-7xl mx-auto ">
      <div className="sm:h-[500px] h-auto mx-4  rounded-bl-[40px] sm:w-[600px] w-full border-4 border-primary sm:my-8 my-4 shadow-xl relative drop-shadow-2xl">
        <Image
          width={1000}
          height={1000}
          src="/images/New/about1.jpg"
          alt="news"
          className="  rounded-bl-[40px] w-full h-full "
        />
        {/* <h1 className="text-white bg-primary px-3 py-2 sm:text-4xl text-lg font-bold absolute sm:top-6 top-3 sm:left-6 left-2 drop-shadow-2xl">
          Food & Feed
        </h1> */}
      </div>
      {/* <div className="sm:h-[500px] h-auto mx-4  rounded-bl-[40px] sm:w-[600px] w-full border-4 border-primary sm:my-8 my-4 shadow-xl relative">
        <Image
          width={1000}
          height={1000}
          src="/images/New/about2.jpg"
          alt="news"
          className="  rounded-bl-[40px] w-full h-full "
        />
        <h1 className="text-white bg-primary px-3 py-2 sm:text-4xl text-lg font-bold absolute sm:top-6 top-3 sm:left-6 left-2 drop-shadow-2xl">
          Fibre, Agri-Industrials <br /> & Ag Services
        </h1>
      </div>
      <div className="sm:h-[500px] h-auto mx-4  rounded-bl-[40px] sm:w-[600px] w-full border-4 border-primary sm:my-8 my-4 shadow-xl relative">
        <Image
          width={1000}
          height={1000}
          src="/images/New/about3.jpg"
          alt="news"
          className="  rounded-bl-[40px] w-full h-full "
        />
        <h1 className="text-white bg-primary px-3 py-2 sm:text-4xl text-lg font-bold absolute sm:top-6 top-3 sm:left-6 left-2 drop-shadow-2xl">
          Food & Feed
        </h1>
      </div> */}
      <div className="sm:h-[500px] h-auto mx-4  rounded-bl-[40px] sm:w-[600px] w-full border-4 border-primary sm:my-8 my-4 shadow-xl relative">
        <Image
          width={1000}
          height={1000}
          src="/images/New/about4.jpg"
          alt="news"
          className="  rounded-bl-[40px] w-full h-full "
        />
        {/* <h1 className="text-white bg-primary px-3 py-2 sm:text-4xl text-lg font-bold absolute sm:top-6 top-3 sm:left-6 left-2 drop-shadow-2xl">
          Processing Unit
        </h1> */}
      </div>
    </div>
  );
};

export default PortFolio;
