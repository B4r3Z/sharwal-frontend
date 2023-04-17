import React from "react";

export const OneCategoryCard = ({ imgSrc, noOfProducts, alt }) => {
  console.log(imgSrc, noOfProducts, alt);
  return (
    <div>
      <img src={imgSrc} alt={alt} />
    </div>
  );
};
