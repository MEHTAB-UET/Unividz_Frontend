import React from "react";
import Card from "./Card";

const Review = () => {
  return (
    <>
      <div className="bg-shadePurple">
        {" "}
        <div className="h-[30vh]  flex justify-center items-center">
          {" "}
          <div className="heading ">
            <h1 className="font-playwright text-[40px]">
              Loved by 1,000,000+ creators
            </h1>
          </div>
        </div>
        {/* Row no 1 */}
        <div className="grid grid-cols-3 gap-4  px-20 mt-8 mx-8 ">
          <div className="col-span-2">
            <Card
              description="Unividz has become an indispensable tool for many creators around the world.What you provide is not just software but a means that enables users to transform their ideas and dreams into tangible reality"
              userName="@TKyroeh"
            />
          </div>
          <div>
            <Card
              description="herem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fuga architecto tempora rerah"
              userName="BrentX"
            />
          </div>
        </div>
        {/* Row no 2 start here */}
        <div className="grid grid-cols-3 gap-4  b-2 m-8 pl-8">
          {" "}
          <div>
            <Card
              description="Unbelievable Motion Its great Tool I ever tried"
              userName="@GinaRKyro"
            />
          </div>
          <div>
            <Card
              description="I discovered Unividz pure by chance just browsing online and it immediately stood out! It was exactly what I was looking for to make my lessons more interactive and engaging!"
              userName="@AtefWagn"
            />
          </div>
          <div>
            <Card
              description="Your platform give my video a boost !"
              userName="@rouHeloplus"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
