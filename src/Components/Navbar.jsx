import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bar h-[10vh] bg-lightPurple flex justify-center items-center ">
        <div className="buttons w-[50vw] flex justify-between">
          <a className=" hover:text-white" href="">
            Home
          </a>
          <a className=" hover:text-white" href="">
            Subscription
          </a>
          <a className=" hover:text-white" href="">
            Features
          </a>
          <a className=" hover:text-white" href="">
            Reviews
          </a>
          <a className=" hover:text-white" href="">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
