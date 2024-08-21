import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirmSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex  sm:flex-row flex-col max-w-7xl mx-auto xl:px-0 px-3">
        <div className="flex-1 justify-center items-center flex flex-col  rounded-bl-3xl">
          <Image
            src="/images/farmer.jpg"
            width={800}
            height={800}
            quality={100}
            alt="asset"
            className="xl:w-[600px] w-[500px] xl:h-[400px] h-auto rounded-bl-3xl shadow-xl"
          />
        </div>
        <div className="flex-1 justify-center flex flex-col pl-4">
          <h1 className="xl:text-4xl text-3xl font-semibold xl:my-6 my-2 text-primary">
            Firm Foundations for <br /> Sustainable Growth
          </h1>
          <p className="xl:text-xl text-lg lg:w-[90%]">
            We offer our farmers, our customers and every member of our global
            supply chains, a robust, and forward-looking approach to worldwide
            food. <br /> <br />
            Our global practices are firmly rooted in experience and
            understanding second to none.
          </p>
          <Link href="/aboutus">
            <button className="text-lg font-semibold text-white bg-primary px-6 py-2 rounded-sm  my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px] ">
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirmSection;
