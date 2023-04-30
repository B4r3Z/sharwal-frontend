import React from "react";
import { ShowcaseCardData } from "./ShowcaseCardData";
import { OneShowcaseCard } from "./oneShowcaseCard/OneShowcaseCard";

export const AllShowcaseCards = () => {
  return (
    <div className="grid grid-cols-4 px-6 gap-10 items-center justify-between">
      {ShowcaseCardData.map((val, index) => {
        return (
          <OneShowcaseCard
            key={index}
            imgsrc={val.imgsrc}
            noOfColors={val.noOfColors}
            itemName={val.itemName}
            itemType={val.itemType}
            itemPerk={val.itemPerk}
          />
        );
      })}
    </div>
  );
};
