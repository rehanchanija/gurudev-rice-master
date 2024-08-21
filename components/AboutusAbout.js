import React from "react";

const AboutusAbout = ({ h1, h2a, h2b }) => {
  return (
    <div className="flex sm:flex-row flex-col max-w-7xl mx-auto xl:px-0 px-4 ">
      <div className="flex-1 flex-col flex ">
        <h1 className=" xl:text-4xl text-3xl font-semibold text-center pb-6 text-primary">
          {h1}
        </h1>
        <p className="xl:text-xl text-lg text-center ">{h2a}</p>
        <br />
        <p className="xl:text-xl text-lg text-center ">{h2b}</p>
      </div>
    </div>
  );
};

export default AboutusAbout;
