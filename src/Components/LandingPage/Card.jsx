import React from "react";

const Card = (prop) => {
  return (
    <>
      <div className="card border border-gray-700 rounded-xl hover:cursor-pointer   bg-lightGray p-4 font-Inconsolate hover:bg-blue-300 ">
        <text>{prop.description}</text>
        <div className="profile flex mt-6">
          <img
            src="../../../public/logos/profile.svg"
            className="h-[30px] "
            alt="profile"
          />
          <text className="font-sans ">{prop.userName}</text>
        </div>
      </div>
    </>
  );
};

export default Card;
