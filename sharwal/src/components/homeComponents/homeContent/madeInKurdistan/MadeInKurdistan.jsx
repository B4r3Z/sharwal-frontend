import React from "react";
import Kurdistan from "../../../../assets/KurdistanSquare.svg";

export const MadeInKurdistan = () => {
  return (
    <div className=" flex items-center w-[97.5%] mx-auto gap-8">
      <img
        src={Kurdistan}
        alt="The Kurdish Flag consists of fout main colors, 3 Bars and a Sun in the Center, the Bars are Red, White, and Green"
        className="border-8 border-myYellow"
      />
      <div className="flex flex-col w-full self-start">
        <div className=" flex flex-col gap-y-32">
          <div className="flex flex-col items-start">
            <div className="flex flex-col -space-y-12 items-start ">
              <h1 className="text-myYellow font-satoshiBold text-[8.125rem] leading-[10rem]">
                MADE IN
              </h1>
              <h2 className="text-myYellow font-satoshiBold text-[8.125rem] leading-[10rem]">
                KURDISTAN
              </h2>
            </div>
            <p className="font-dentonReg text-myYellow text-[2.625rem] leading-10 tracking-[-0.02em]">
              Experience the artistry and craftsmanship of Kurdistan through our
              collection of unique, handmade products that showcase the region's
              rich cultural heritage.
            </p>
          </div>
          <div className="flex items-center space-x-4 self-start ">
            <h1 className="font-satoshiMid text-lg text-myWhite border-2 pl-3 pt-6 pr-6 pb-3">
              READ MORE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
