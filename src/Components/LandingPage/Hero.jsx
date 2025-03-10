import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbCameraSelfie } from "react-icons/tb";

const Hero = () => {
  return (
    <div className=" flex h-[50dvh] w-full justify-center items-center bg-lightestPurple ">
      <div className="MainContent flex flex-col justify-center items-center">
        {/* Heading no 1 */}
        <h1 className="text-[4rem] font-bold">Unividz Storyteller</h1>
        {/* description */}
        <div className="flex justify-center items-center py-2">
          <p className="text-lg text-[2rem]">
            Turn your ideas into visual stories
          </p>
        </div>
        {/* Search Box */}
        <div className="h-2rem w-[50rem]  bg-white p-[2rem] md:p-[1rem] rounded-lg flex justify-between">
          <TbCameraSelfie className="text-4xl inline-block" />

          <input
            type="text"
            className="h-full w- p-1 px-2 focus:outline-none font-playwright"
            placeholder="Type into your ideas to generate "
          />
          <button className="float-right bg-slate-400 p-2 px-3 rounded-md hover:px-5 transition-all ease-in duration-2500 flex justify-center items-center ">
            <div className=" flex justify-center items-center">
              <text className="text-[1rem]">Generate</text>
              <FaWandMagicSparkles className="hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
