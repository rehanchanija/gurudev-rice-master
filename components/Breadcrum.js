import Link from "next/link";
import React from "react";

const Breadcrum = ({ l1, l2, h1, h2 }) => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto h-16 text-white flex justify-start items-center px-2">
        <h1 className="text-xl text-white   ">
          <Link href={l1}>
            <span className="font-medium text-white">{h1}</span>
          </Link>
          {" > "}
          <Link href={l2}>
            <span className="font-medium text-white">{h2}</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Breadcrum;
