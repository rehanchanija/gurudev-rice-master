import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = ({ id1, id2, id3, im1, im2, im3 }) => {
  return (
    <div>
      <div className="sm:flex hidden">
        <Carousel
          autoPlay={true}
          showStatus={false}
          dotPosition="left"
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <div className="h-[70vh] w-full bg-blue-200 relative">
              <div className="sm:flex hidden">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/New/banner${id1}.jpg`}
                  className="w-full h-[70vh] "
                />
              </div>
            </div>
          </div>
          <div>
            <div className="h-[70vh] w-full bg-pink-200 relative">
              <div className="sm:flex hidden">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/New/banner${id2}.jpg`}
                  className="w-full h-[70vh]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="h-[70vh] w-full bg-green-200 relative">
              <div className="sm:flex hidden">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/New/banner${id3}.jpg`}
                  className="w-full h-[70vh]"
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="sm:hidden">
        <Carousel
          autoPlay={true}
          showStatus={false}
          dotPosition="left"
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <div className="h-[60vh] w-full  relative">
              <div className="">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/Slide${im1}.png`}
                  className="w-full h-[60vh]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="h-[60vh] w-full bg-pink-200 relative">
              <div className="">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/Slide${im2}.png`}
                  className="w-full h-[60vh]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="h-[60vh] w-full bg-green-200 relative">
              <div className="">
                <Image
                  width={2000}
                  height={1000}
                  quality={100}
                  alt="Banner"
                  src={`/images/Slide${im3}.png`}
                  className="w-full h-[60vh]"
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
