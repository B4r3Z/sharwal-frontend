import React, { useState } from "react";
import "./OneFabricCard.css";

export const OneFabricCard = ({
  imgsrc,
  fabricName,
  fabricType,
  fabricOrigin,
  fabricSeason,
  fabricDescription,
  fabricPricePerMeter,
}) => {
  const [data, setData] = useState(0);
  return (
    <div className="bg-mySecondary flex flex-col items-center gap-4">
      <img src={imgsrc} alt="construction" className=" w-full" />
      <div className="flex flex-col items-center text-myPrimary w-[95%] gap-4">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-satoshiBold text-3xl uppercase py-2">
            {fabricName}
          </h1>
          <h2 className="font-satoshiMid text-2xl">
            ${fabricPricePerMeter}
            <span className="text-xl">/meter</span>
          </h2>
        </div>

        <div className="flex items-end w-full justify-between ">
          <input
            type="range"
            className="transparent h-1 cursor-pointer appearance-none bg-myPrimary w-[70%] mb-2"
            min="0"
            max="10"
            step="0.5"
            id="meter"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <output
            htmlFor="meter"
            className="text-myPrimary font-satoshiMid text-xl flex items-end justify-center gap-2"
          >
            <h3>{data}m </h3>
            <h3>|</h3>
            <h3 className="text-3xl font-satoshiBold">
              {Math.floor(data * fabricPricePerMeter, 2)}$
            </h3>
          </output>
        </div>
        <button className="bg-myPrimary text-mySecondary font-satoshiBold text-xl px-3 py-3 my-3 w-full">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
