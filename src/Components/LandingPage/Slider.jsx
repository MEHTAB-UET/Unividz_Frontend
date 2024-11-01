import React from "react";
import "../../App.css";
// import "../../../public/logos/l";
import HtmlLogo from "../../../public/logos/html-5.svg";
import jsLogo from "../../../public/logos/js.svg";
import pyCharmLogo from "../../../public/logos/py.svg";
import nodeLogo from "../../../public/logos/node.svg";
import pythonLogo from "../../../public/logos/python.svg";
import mongoDBLogo from "../../../public/logos/mongo.svg";
import reactLogo from "../../../public/logos/react.svg";
import tailwindLogo from "../../../public/logos/tailwind.svg";

const Slider = () => {
  return (
    <>
      <div className="logoContainer m-0 p-0 overflow-hidden h-[16vh]  bg-dusty px-[10px]">
        <div className="logo-slider h-full flex justify-between">
          <img src={HtmlLogo} className="h-full" alt="HTML-LOGO" />
          <img src={jsLogo} className="h-full" alt="JS LOGO" />
          <img src={pyCharmLogo} className="h-full" alt="JS LOGO" />
          <img src={nodeLogo} className="h-full" alt="JS LOGO" />
          <img src={pythonLogo} className="h-full" alt="JS LOGO" />
          <img src={mongoDBLogo} className="h-full" alt="JS LOGO" />
          <img src={reactLogo} className="h-full" alt="JS LOGO" />
          <img src={tailwindLogo} className="h-full" alt="JS LOGO" />
          <img src={HtmlLogo} className="h-full" alt="HTML-LOGO" />
          <img src={jsLogo} className="h-full" alt="JS LOGO" />
          <img src={pyCharmLogo} className="h-full" alt="JS LOGO" />
          <img src={nodeLogo} className="h-full" alt="JS LOGO" />
          <img src={pythonLogo} className="h-full" alt="JS LOGO" />
          <img src={mongoDBLogo} className="h-full" alt="JS LOGO" />
          <img src={reactLogo} className="h-full" alt="JS LOGO" />
          <img src={tailwindLogo} className="h-full" alt="JS LOGO" />
        </div>
      </div>
    </>
  );
};

export default Slider;
