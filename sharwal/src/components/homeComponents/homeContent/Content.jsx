import React from "react";
import { Fabrics } from "./fabrics/Fabrics";
import { Featured } from "./featured/Featured";
import { OneCarousel } from "./carousel/OneCarousel";
import { MadeInKurdistan } from "./madeInKurdistan/madeInKurdistan";
import { Footer } from "../../footer/Footer";

export const Content = () => {
  return (
    <div className="flex flex-col gap-y-32">
      <Fabrics />
      <Featured />
      <span className="w-[97.5%] bg-myYellow h-1 mx-auto"></span>
      <OneCarousel />
      <MadeInKurdistan />
    </div>
  );
};
