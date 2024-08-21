import Image from "next/image";
import React from "react";

const HomeFirm = () => {
  return (
    <div className=" py-10">
      <div className="flex  sm:flex-row-reverse flex-col max-w-7xl mx-auto xl:px-0 px-3">
        <div className="flex-1 justify-center items-center flex flex-col  rounded-bl-3xl">
          <Image
            src="/images/homefirm.webp"
            width={800}
            height={800}
            quality={100}
            alt="asset"
            className="xl:w-[600px] w-[500px] xl:h-[400px] h-auto rounded-bl-3xl sm:shadow-xl"
          />
        </div>
        <div className="flex-1 justify-center flex flex-col pl-4">
          <h1 className="xl:text-4xl text-3xl font-semibold xl:my-6 my-2 text-primary">
            Manufacturer, Processor & <br /> Exporter of Indian Rice
          </h1>
          <p className="xl:text-xl text-lg lg:w-[90%]">
            Guru Dev Rice is one of the top manufacturers, suppliers, and
            exporters of superior quality Indian rice, broken rice, and
            pesticide-free rice. Our company offers a diverse range of raw,
            steam, and broken rice. It has an authentic taste, purity, and
            deliciousness and is full of nutritional value. <br />
            We have a milling and manufacturing unit of skilled laborers who
            take care of packaging according to industry standards. Our
            worldwide appreciated-rice is stored in a moisture-proof and
            infection-free environment.
          </p>
          {/* <Link href="/aboutus">
            <button className="text-lg font-semibold text-white bg-black px-6 py-2 rounded-sm  my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px] ">
              More About Us
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeFirm;
