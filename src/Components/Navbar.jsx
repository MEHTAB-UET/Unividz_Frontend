import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="bar">
        {" "}
        <div className=" h-[7rem] bg-lightPurple flex justify-center items-center px-[1rem] ">
          <div className="flex mr-auto bg-white md:hidden">
            <RiMenuFill
              className="text-[5rem]   text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="links w-[50%] bg-white hidden md:flex   justify-between items-center">
            <a className="text-[2rem]">Home</a>
            <a className="text-[2rem]">About</a>{" "}
            <a className="text-[2rem]">Subscription</a>{" "}
            <a className="text-[2rem]">Contact</a>{" "}
          </div>
        </div>
        {isOpen && (
          <div className="sidebar w-[40%] h-[80vh]  bg-lightPurple ">
            {" "}
            <div className="grid grid-cols-1 grid-rows-4 p-10 bg-lightPurple border-t-2 border-black h-[40%]">
              <div className="div flex justify-center items-center  ">
                {" "}
                <a className="text-[2rem]">Home</a>
              </div>
              <div className="div flex justify-center items-center ">
                {" "}
                <a className="text-[2rem]">Home</a>
              </div>
              <div className="div flex justify-center items-center ">
                {" "}
                <a className="text-[2rem]">Home</a>
              </div>
              <div className="div flex justify-center items-center  ">
                {" "}
                <a className="text-[2rem]">Home</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
