import Image from "next/image";
import Link from "next/link";
import React from "react";

const Talk = () => {
  return (
    <div className="bg-[#F3F4F6] px-4 sm:px-0">
      <div className="bg-[#F3F4F6] flex flex-col justify-center items-center py-10 max-w-7xl mx-auto">
        <Image
          src="/images/asset5.png"
          width={200}
          height={200}
          alt="Support"
          className="w-20 h-20"
        />
        <h1 className="xl:text-4xl text-3xl font-semibold py-4 text-primary">
          Talk To Us
        </h1>
        <p className="xl:text-xl text-lg text-center">
          Whether you’re interested in speaking to our country management team,
          enquiring about one of our products or partnering <br /> with us, we
          want to hear from you.
        </p>
        <Link href="/contactus">
          <button className="text-lg font-semibold text-white bg-primary px-6 py-2 rounded-sm my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px]">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Talk;
