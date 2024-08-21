import Image from "next/image";
import React from "react";

const ProductCard = ({ src, h1 }) => {
  return (
    <div className="h-auto rounded-tr-[60px] rounded-bl-[60px] w-64 border-2 my-8 shadow-lg relative">
      <Image
        src={`/images/product${src}.jpg`}
        width={500}
        height={500}
        alt="news"
        className="rounded-tr-[60px] rounded-bl-[60px] w-full h-full"
      />
      <h1 className="absolute  top-3 left-3 text-white text-2xl font-semibold">
        {h1}
      </h1>
    </div>
  );
};

export default ProductCard;
