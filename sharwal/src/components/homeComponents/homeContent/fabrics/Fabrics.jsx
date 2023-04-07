import React from "react";
import { AllFabricCards } from "./AllFabricCards/AllFabricCards";

export const Fabrics = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-10">
      <div className="flex items-center justify-center flex-col text-myYellow gap-2">
        <h1 className="font-satoshiBold text-6xl">FABRICS.</h1>
        <h2 className="font-satoshiBold text-lg">SEE COLLECTIONS</h2>
      </div>
      <div>
        <AllFabricCards />
      </div>
    </div>
  );
};
