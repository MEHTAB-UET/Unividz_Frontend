import React from "react";
import "../../App.css";
import { LuCopyright } from "react-icons/lu";
import instaLogo from "../../../public/logos/insta.svg";
import facebookSVG from "../../../public/logos/facebook.svg";
import youtubeSVG from "../../../public/logos/youtube.svg";
import twitter from "../../../public/logos/twitter.svg";
const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="wave  w-full h-[40vh]   bg-slate-200 flex justify-center items-center flex-col relative">
        <div className="logosContainer   w-full  flex justify-evenly">
          <img
            src={instaLogo}
            className="h-[5rem] hover-effect"
            alt="No image found"
          />
          <img
            src={facebookSVG}
            className="h-[5rem] hover-effect "
            alt="No image found"
          />
          <img
            src={youtubeSVG}
            className="h-[5rem] hover-effect "
            alt="No image found"
          />
          <img
            src={twitter}
            className="h-[5rem] hover-effect "
            alt="No image found"
          />
        </div>
        <div className="copyRights absolute bottom-0 py-[2rem] flex">
          <text className="text-[2rem]">Copyrights</text>
          <LuCopyright className="text-[2rem]" />
          <text className="text-[2rem]">{date.getFullYear()};</text>
          <text className="text-gray-600">Develop by Unividz Team</text>
        </div>
      </div>
    </>
  );
};

export default Footer;
