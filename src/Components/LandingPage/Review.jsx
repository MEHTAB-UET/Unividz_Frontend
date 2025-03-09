import React from "react";
import Card from "./Card";

const Review = () => {
  return (
    <>
      <div className="bg-shadePurple">
        {" "}
        <div className="h-[20rem]  flex justify-center items-center">
          {" "}
          <div className="heading ">
            <h1 className="font-playwright pl-[2rem] md:p-0 text-[4rem]">
              Loved by 1,000,000+ creators
            </h1>
          </div>
        </div>
        {/* CARDS */}
        <div className="cards p-8 w-full grid grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="p-8 grid grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Review;
