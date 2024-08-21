import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SubBanner = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="xl:h-[75vh] w-full bg-gray-100  flex  sm:flex-row flex-col">
          <div className="flex-1 bg-[#F3F4F6]">
            <div className="flex-1 justify-center h-full flex flex-col pl-4 xl:w-[70%] w-[90%] mx-auto my-auto">
              <h1 className="xl:text-4xl text-3xl font-semibold xl:my-6 my-2 text-primary">
                Our Products &<br /> Services
              </h1>
              <p className="xl:text-xl text-lg lg:w-[90%]">
                Ours is a Commodities and Grains Industry where we are majorly
                into rice exports for more than 100 years. The business is also
                backed up by a rice plant where in-house sorting and third-party
                job work are done.
              </p>
              <Link href="/products">
                <button className="text-lg font-semibold text-white bg-primary px-6 py-2 rounded-sm my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px]">
                  Discover More
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1  flex relative">
            <svg
              className="oga-text-asset-banner__curve oga-text-asset-banner__curve--solid z-30  w-min absolute  xl:max-h-[75vh] h-full left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 212.459 580"
            >
              <path
                className="oga-text-asset-banner__curve-primary"
                id="Path_14625"
                data-name="Path 14625"
                d="M66,580h7.706C143.426,235.384,278.459,0,278.459,0H66Z"
                transform="translate(-66)"
                fill="#F3F4F6"
              />
            </svg>
            <svg
              className="oga-text-asset-banner__curve z-50  w-min absolute  xl:max-h-[75vh] h-full left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 470.781 580"
            >
              <path
                id="Path_14624"
                data-name="Path 14624"
                d="M59.291,580h44.545C117.217,540.19,229.194,228.852,530.072,0H264.044S129.011,235.384,59.291,580"
                transform="translate(-59.291)"
                fill="#fff"
                opacity="0.25"
              />
            </svg>

            <video
              src="/video/mobvid.mp4"
              autoPlay={true}
              loop
              muted
              className="h-full sm:hidden flex"
            ></video>
            <video
              src="/video/deskvid.mp4"
              autoPlay={true}
              loop
              muted
              className="h-full sm:flex hidden"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
