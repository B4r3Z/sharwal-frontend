import React from "react";

export const OneFabricCard = ({
  imgsrc,
  noOfColors,
  fabricName,
  fabricType,
  fabricPerk,
}) => {
  return (
    <div className="bg-myRed">
      <div className=" p-8 text-myYellow flex-col space-y-3">
        <img src={imgsrc} alt={fabricName} className="self-center" />
        <h3 className="text-lg">{noOfColors} Colors</h3>
        <h2 className="font-satoshiBold text-4xl">{fabricName}</h2>
        <h3 className="text-lg font-satoshiBold">{fabricType}</h3>
        <h3 className="text-lg">{fabricPerk}</h3>
      </div>
    </div>
  );
};
