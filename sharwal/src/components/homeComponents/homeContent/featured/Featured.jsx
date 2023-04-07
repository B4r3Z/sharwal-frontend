import React from "react";
import Spring from "../../../../assets/Spring.svg";

export const Featured = () => {
  return (
    <div className=" flex items-center w-[97.5%] mx-auto bg-myRed">
      <img src={Spring} alt="Spring Collection" />
      <div className="flex flex-col w-full items-center">
        <div className=" flex flex-col gap-y-32">
          <div className="flex flex-col items-start">
            <div className="flex flex-col -space-y-12 items-center">
              <h1 className="text-myYellow font-satoshiBold text-[8.125rem] leading-[11rem]">
                SPRING
              </h1>
              <h2 className="text-myYellow font-satoshiBold text-[4.75rem] leading-[6.5rem]">
                COLLECTION
              </h2>
            </div>
            <p className="font-dentonReg text-myYellow text-[2.625rem]">
              Soft. Vibrant. <i className="font-dentonRegItalic">Newroz</i>
              -Worthy.
            </p>
          </div>
          <div className="flex items-center space-x-4 self-start ">
            <h1 className="font-satoshiMid text-lg text-myWhite border-2 pl-3 pt-6 pr-6 pb-3">
              SEE COLLECTION
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
