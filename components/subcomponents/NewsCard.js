import Image from "next/image";
import React from "react";

const NewsCard = ({ src }) => {
  return (
    <div className="h-auto rounded-tr-3xl rounded-bl-3xl w-80 border-2 my-8 shadow-lg">
      <Image
        src={`/images/news${src}.jpg`}
        width={500}
        height={500}
        alt="news"
        className="rounded-tr-3xl w-80 h-auto"
      />
      <div className="p-3 py-5">
        <h1 className="text-lg font-medium">
          Olam Agri Cameroon marks World Breast Cancer Awareness Month
        </h1>
        <p>
          n honor of Breast Cancer Awareness Month, Riz Mémé in partnership with
          Olam Agri Cameroon, launched a week-long awareness campaign to
        </p>
        <p className="font-medium py-2">Read More {">"}</p>
      </div>
    </div>
  );
};

export default NewsCard;
