import React from "react";
import { OneFabricCard } from "./oneFabricCard/OneFabricCard";
import { FabricCardData } from "./FabricCardData";

export const AllFabricCards = () => {
  return (
    <div className="flex flex-row px-6 items-center space-x-4">
      {FabricCardData.map((val, index) => {
        return (
          <div className="flex items-center space-x-4">
            <OneFabricCard
              key={index}
              imgsrc={val.imgsrc}
              noOfColors={val.noOfColors}
              fabricName={val.fabricName}
              fabricType={val.fabricType}
              fabricPerk={val.fabricPerk}
            />
            <span className="h-16 w-1 bg-myYellow"></span>
          </div>
        );
      })}
    </div>
  );
};
