import React from "react";
import Cotton from "../../../../assets/Cotton.svg";

export const OneCarousel = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between ">
          <h1 className="font-satoshiBold text-3xl text-mySecondary">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-mySecondary">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between ">
          <h1 className="font-satoshiBold text-3xl text-mySecondary">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-mySecondary">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between ">
          <h1 className="font-satoshiBold text-3xl text-mySecondary">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-mySecondary">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
};
