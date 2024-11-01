import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bar h-[10vh] bg-lightPurple flex justify-center items-center ">
        <div className="buttons md:w-[50vw] flex justify-between">
          <a className=" hover:text-white  px-1" href="">
            Home
          </a>
          <a className=" hover:text-white px-1" href="">
            Subscription
          </a>
          <a className=" hover:text-white px-1" href="">
            Features
          </a>
          <a className=" hover:text-white px-1" href="">
            Reviews
          </a>
          <a className=" hover:text-white px-1" href="">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
