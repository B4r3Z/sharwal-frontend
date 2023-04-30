import React from "react";
import { OneFabricCard } from "./oneFabricCard/OneFabricCard";
import { FabricCardData } from "./FabricCardData";

export const AllFabricCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-4">
      {FabricCardData.map((val, index) => {
        return (
          <OneFabricCard
            key={index}
            imgsrc={val.imgsrc}
            fabricName={val.fabricName}
            fabricType={val.fabricType}
            fabricOrigin={val.fabricOrigin}
            fabricSeason={val.fabricSeason}
            fabricDescription={val.fabricDescription}
            fabricPricePerMeter={val.fabricPricePerMeter}
          />
        );
      })}
    </div>
  );
};
