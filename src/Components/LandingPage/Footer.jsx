import React from "react";
import "../../App.css";
const Footer = () => {
  return (
    <>
      <div className="wave  w-full h-[40vh]   bg-slate-200 flex justify-center items-center ">
        <div className="logosContainer   w-full  flex justify-evenly">
          <img
            src="public/logos/insta.svg"
            className="h-[50px] hover:text-white"
            alt="No image found"
          />
          <img
            src="public/logos/facebook.svg"
            className="h-[50px] "
            alt="No image found"
          />
          <img
            src="public/logos/youtube.svg"
            className="h-[50px] "
            alt="No image found"
          />
          <img
            src="public/logos/twitter.svg"
            className="h-[50px] "
            alt="No image found"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
