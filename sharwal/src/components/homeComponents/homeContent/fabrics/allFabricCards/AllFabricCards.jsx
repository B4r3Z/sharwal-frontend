import React from "react";
import { FabricCardData } from "./FabricCardData";
import { OneFabricCard } from "./oneFabricCard/OneFabricCard";

export const AllFabricCards = () => {
  return (
    <div className="grid grid-cols-4 px-6 gap-10 items-center justify-between">
      {FabricCardData.map((val, index) => {
        return (
          <OneFabricCard
            key={index}
            imgsrc={val.imgsrc}
            noOfColors={val.noOfColors}
            fabricName={val.fabricName}
            fabricType={val.fabricType}
            fabricPerk={val.fabricPerk}
          />
        );
      })}
    </div>
  );
};
