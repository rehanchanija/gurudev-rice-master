import React from "react";

const AboutText = () => {
  return (
    <div className="bg-gray-100 sm:px-0 px-4 sm:py-10 py-0">
      {/* <div className="sm:flex-row flex-col  max-w-7xl mx-auto py-10 sm:flex hidden ">
        <div className="flex-1 justify-center items-center pb-3 sm:pb-0 ">
          <h1 className=" xl:text-4xl  text-3xl font-semibold text-primary ">
            <span className=""> Our Mission</span> <br />
            <span className=""> </span> <br />
            <br />
            <span className=""> Our Vision</span> <br />
          </h1>
        </div>
        <div className="flex-1 justify-center items-center ">
          <p className="xl:text-xl text-lg">
            Guided by our Purpose, we transform food, feed, for a Committed to
            deliver precision – perfect quality products to our customers, and
            be a company that creates value for our stakeholders.
            <br /> <br />
            <br />
            We strive to offer our customers the lowest possible prices, the
            best available selection, and the utmost convenience. <br /> <br />
          </p>
        </div>
      </div> */}
      <div className="flex py-3 max-w-7xl mx-auto">
        <div className="flex-1 justify-center items-center pb-3 sm:pb-0 ">
          <h1 className=" xl:text-4xl  text-3xl font-semibold text-primary text-center py-4">
            <span className=""> Our Mission</span> <br />
          </h1>

          <p className="xl:text-xl text-lg text-center">
            Guided by our Purpose, we transform food, feed, for a Committed to
            deliver precision – perfect quality products to our customers, and
            be a company that creates value for our stakeholders.
          </p>
          <h1 className=" xl:text-4xl  text-3xl font-semibold text-center py-4 text-primary ">
            <span className=""> Our Vision</span> <br />
          </h1>
          <p className="xl:text-xl text-lg text-center">
            We strive to offer our customers the lowest possible prices, the
            best available selection, and the utmost convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
