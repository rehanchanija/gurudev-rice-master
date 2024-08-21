import React from "react";

const About = ({ h1, h2a, h2b }) => {
  return (
    <div className="flex sm:flex-row flex-col max-w-7xl mx-auto xl:px-0 px-4 ">
      <div className="flex-1 sm:pr-2 sm:pb-0 pb-4 flex items-center">
        <h1 className=" xl:text-4xl text-3xl font-semibold text-primary ">
          {h1}
        </h1>
      </div>
      <div className="flex-1 flex-col flex ">
        <p className="xl:text-xl text-lg ">{h2a}</p>
        <br />
        <p className="xl:text-xl text-lg ">{h2b}</p>
      </div>
    </div>
  );
};

export default About;
