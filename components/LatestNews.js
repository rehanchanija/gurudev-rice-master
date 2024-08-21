import React from "react";
import NewsCard from "./subcomponents/NewsCard";

const LatestNews = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl pb-3 font-semibold text-center">Latest News</h1>
      <h2 className="text-xl text-center">
        Catch up on the latest news and blogs, find out how were driving
        innovation and change.
      </h2>
      <div className="flex sm:justify-evenly  sm:flex-row flex-col items-center ">
        <NewsCard src="1" />
        <NewsCard src="2" />
        <NewsCard src="4" />
      </div>
    </div>
  );
};

export default LatestNews;
