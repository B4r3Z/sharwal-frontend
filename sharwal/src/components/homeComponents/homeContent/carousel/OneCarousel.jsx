import React from "react";
import Cotton from "../../../../assets/Cotton.svg";

export const OneCarousel = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between bg-blue-100 ">
          <h1 className="font-satoshiBold text-3xl text-myYellow">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-myYellow">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between bg-blue-100 ">
          <h1 className="font-satoshiBold text-3xl text-myYellow">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-myYellow">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={Cotton} alt="" />
        <div className="flex flex-col items-left justify-between bg-blue-100 ">
          <h1 className="font-satoshiBold text-3xl text-myYellow">
            THE COTTON COLLECTION
          </h1>
          <p className="font-dentonReg text-lg text-myYellow">
            Discover our versatile and durable cotton fabric collection - soft,
            breathable, and perfect for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
};
