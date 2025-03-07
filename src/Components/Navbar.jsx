import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bar">
        <div className=" h-[8rem] bg-lightPurple flex justify-center items-center px-[1rem] ">
          <div className="flex mr-auto md:hidden">
            <RiMenuFill
              className="text-[5rem]   text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="links w-[50%]  hidden md:flex text-[2rem]  justify-between items-center">
            <a className="hover:text-white">Home</a>
            <a className="hover:text-white">About</a>{" "}
            <a className="hover:text-white">Subscription</a>{" "}
            <a className="hover:text-white">Contact Us</a>{" "}
          </div>
        </div>
        {isOpen && (
          <div className="sidebar w-[50%] h-[100vh]  bg-lightPurple md:hidden flex flex-col justify-between  absolute top-[8rem] left-0 z-50">
            <div className="grid grid-cols-1 grid-rows-4  bg-lightPurple   h-[40%]">
              <div className="div flex justify-center items-center  border-b-2">
                <a className="text-[2rem]">Home</a>
              </div>
              <div className="div flex justify-center items-center border-b-2">
                <a className="text-[2rem]">About</a>
              </div>
              <div className="div flex justify-center items-center border-b-2">
                <a className="text-[2rem]">Subscription</a>
              </div>
              <div className="div flex justify-center items-center  border-b-2">
                <a className="text-[2rem]">Contact Us</a>
              </div>
            </div>
            <div className="login flex items-center bottom-0 p-4">
              <CgProfile className="text-[6rem] text-gray-600" />
              <text className="text-[2rem] pl-4">LogIn</text>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
