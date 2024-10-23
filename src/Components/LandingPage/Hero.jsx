import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" flex h-[50dvh] w-full justify-center items-center bg-lightestPurple ">
      <div className="MainContent flex flex-col justify-center items-center">
        {/* Heading no 1 */}
        <h1 className="text-2xl font-bold">Unividz Storyteller</h1>
        {/* description */}
        <div className="flex justify-center items-center">
          <p className="text-lg">Turn your ideas into visual stories</p>
        </div>
        {/* Search Box */}
        <div className="h-20px w-[50vw]  bg-white p-1 rounded-lg">
          <div className="inline-block">logooo</div>
          <input
            type="text"
            className="h-full w-[50%] p-1 px-2 focus:outline-none font-playwright"
            placeholder="Type into your ideas to generate "
          />
          <button className="float-right bg-slate-400 p-2 px-3 rounded-md hover:px-5 transition-all ease-in duration-2500 flex justify-center items-center ">
            <div className=" flex justify-center items-center">
              Generate <FaWandMagicSparkles />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
