import React from "react";

export const OneShowcaseCard = ({
  imgsrc,
  noOfColors,
  itemName,
  itemType,
  itemPerk,
}) => {
  return (
    <div className="bg-myRed">
      <div className=" p-8 text-myYellow flex-col space-y-3">
        <img
          src={imgsrc}
          width="512px"
          alt={itemName}
          className="self-center"
        />
        <h3 className="text-lg">{noOfColors} Colors</h3>
        <h2 className="font-satoshiBold text-4xl">{itemName}</h2>
        <h3 className="text-lg font-satoshiBold">{itemType}</h3>
        <h3 className="text-lg">{itemPerk}</h3>
      </div>
    </div>
  );
};
