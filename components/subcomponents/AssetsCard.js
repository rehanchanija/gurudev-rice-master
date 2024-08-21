import Image from "next/image";
import React from "react";

const AssetsCard = ({ src, h1, h2 }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <div>
        <Image
          src={`/images/asset${src}.gif`}
          width={500}
          height={500}
          quality={100}
          alt="asset"
          className="xl:w-48 w-36  xl:h-48 h-36"
        />
      </div>

      <h1 className="xl:text-7xl text-6xl font-extrabold sm:py-2 p-0 m-0">
        {h1}
      </h1>
      <p className="text-xl font-semibold p-0 m-0">{h2}</p>
    </div>
  );
};

export default AssetsCard;
