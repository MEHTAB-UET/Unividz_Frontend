import React from "react";

const PowerAi = () => {
  return (
    <>
      {/* Section no 1 where we write Ai easy creation  */}
      <div className="h-[100vh] flex justify-center items-center px-40 bg-slate-200">
        {/* inner box to kkep a suitable padding */}
        <div className="bg-slate-200 h-full w-full ">
          {/* dividing inner box into three rows  in first row we write H1---->AI easy creation */}
          <div className="grid grid-cols-1 grid-rows-3 h-full">
            {/* Heading  */}
            <div className=" h-full flex justify-center items-center">
              <h1 className="font-playwright text-[40px]">
                Powerful AI,easy creation{" "}
              </h1>
            </div>
            {/* we split second container into two different rows in order ot increase its height */}
            <div className=" row-span-2 grid grid-cols-2 p-4 px-6">
              {/* now we are creating a new Box and then divide it into two columns left side we write some description and on right side we add an image  */}
              <div className="  px-10">
                <h2 className="font-Inconsolate text-[50px] flex flex-wrap  ">
                  Create without editing skill
                </h2>
                {/* description */}
                <text className="font-Inconsolate text-[30px]">
                  Create your videos in simple 4 steps. No more timeline, no
                  more tracks syncing, no more editing tricks, start from your
                  mind and Mootion creates viral videos under 5 minutes.
                </text>
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src="../../../public/images/promt.jpg"
                  alt="no image found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerAi;
