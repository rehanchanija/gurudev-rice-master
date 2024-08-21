import React from "react";

const AboutSubBanner = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="xl:h-[75vh] w-full bg-gray-100  flex  sm:flex-row flex-col">
          <div className="flex-1 bg-[#F3F4F6]">
            <div className="flex-1 justify-center h-full flex flex-col pl-4 xl:w-[70%] sm:w-[90%] mx-auto my-auto">
              <h1 className="xl:text-4xl text-3xl font-semibold xl:my-6 my-2 text-primary">
                We Are Building on Our Heritage
              </h1>
              <p className="xl:text-xl text-lg lg:w-[90%]">
                Founded over 100 years ago, Gurudev Rice started operations in
                India and has since grown to become one of the world’s leading
                food and agri-businesses with a global expertise across major
                food and agricultural value chains and operations on four
                continents. <br /> <br />
              </p>
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
                fill="#F3F4F6"
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

export default AboutSubBanner;
