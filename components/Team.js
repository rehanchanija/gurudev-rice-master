import React from "react";

const Team = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h1 className="mb-4 xl:text-4xl text-3xl font-semibold t  text-primary ">
              Our Team
            </h1>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">
              Explore Our Team Members
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex justify-center ">
              <div className="p-5 flex flex-col items-center">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 text-center ">
                  Shri Ramesh Jain
                </h2>
                <span className="text-gray-500 ">Father</span>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex justify-center ">
              <div className="p-5 flex flex-col items-center">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 text-center ">
                  Shri Mayur Jain
                </h2>
                <span className="text-gray-500 ">Self</span>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex justify-center ">
              <div className="p-5 flex flex-col items-center">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 text-center ">
                  Shri Sandesh Jain
                </h2>
                <span className="text-gray-500 ">Brother</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
