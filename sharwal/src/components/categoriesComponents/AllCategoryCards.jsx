import React from "react";

import { OneCategoryCard } from "./oneCategoryCard/OneCategoryCard";
import { CategoryCardData } from "./CategoryCardData";

export const AllCategoryCards = () => {
  return (
    <div className="grid grid-cols-1 mx-5 space-y-6 sm:space-y-0 sm:mx-0 sm:grid-cols-2  md:grid-cols-3 justify-items-center">
      <div className="flex flex-col gap-6">
        {CategoryCardData.map((val, index) => {
          if (index % 3 !== 0) {
            return null;
          }
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
      <div className="flex flex-col gap-6">
        {CategoryCardData.map((val, index) => {
          if ((index + 2) % 3 !== 0) {
            return null;
          }
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
      <div className="flex flex-col gap-6 ">
        {CategoryCardData.map((val, index) => {
          if ((index + 1) % 3 !== 0) {
            return null;
          }
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
    </div>
  );
};
