import Link from "next/link";
import React from "react";

const SustainabilitySubBanner = () => {
  return (
    <div>
      <div className="bg-pink-100">
        <div className="xl:h-[75vh] w-full bg-pink-100  flex  sm:flex-row flex-col">
          <div className="flex-1 bg-slate-100">
            <div className="flex-1 justify-center h-full flex flex-col pl-4 xl:w-[70%] sm:w-[90%] mx-auto my-auto">
              <h1 className="xl:text-5xl text-3xl font-semibold xl:my-6 my-2">
                Our Sustainability Policies & Positions
              </h1>
              <p className="xl:text-xl text-lg lg:w-[90%]">
                We’re committed to operating in an environmentally sustainable
                manner throughout our business. Through our parent company, Olam
                Group, we have a suite of sustainability policies and position
                statements to operate with, and achieve, integrity and honesty.
                <br /> <br />
              </p>
              <div className="sm:flex sm:space-x-10">
                <Link href="/aboutus">
                  <button className="text-lg font-semibold text-white bg-primary px-6 py-2 rounded-sm w-60 my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px]">
                    Read Our Policies
                  </button>
                </Link>
                <Link href="/aboutus">
                  <button className="text-lg font-semibold text-white bg-primary px-6 py-2 rounded-sm w-60 my-6 hover:scale-105 ease-in-out transition-transform rounded-tl-[30px]">
                    Read Our Terms
                  </button>
                </Link>
              </div>
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
                fill="#F1F5F9"
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
                fill="#F1F5F9"
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

export default SustainabilitySubBanner;
