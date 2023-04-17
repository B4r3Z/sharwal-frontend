import React from "react";

import { OneCategoryCard } from "./oneCategoryCard/OneCategoryCard";
import { CategoryCardData } from "./CategoryCardData";

export const AllCategoryCards = () => {
  return (
    <div>
      {CategoryCardData.map((val, index) => {
        return (
          <OneCategoryCard
            key={index}
            imgSrc={val.imgSrc}
            noOfProducts={val.noOfProducts}
            alt={val.alt}
          />
        );
      })}
    </div>
  );
};
