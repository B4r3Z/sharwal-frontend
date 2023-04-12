import React from "react";

export const Footer = () => {
  return (
    <div className="border-myYellow border-t-2 w-[97.5%] mx-auto py-3 flex items-center justify-between">
      <h1 className="text-myYellow font-satoshiBold text-sm">
        Kurdi Websites 2023 <span>&copy;</span>
      </h1>
      <div className="flex items-center justify-between gap-2  text-myYellow ">
        <h1 className="font-satoshiBold text-sm">Terms and Conditions</h1>
        <span className="w-2 h-[97.5%] bg-myYellow mx-auto"></span>
        <h1 className="font-satoshiBold text-sm">Privacy Policy</h1>
      </div>
    </div>
  );
};
