import React from "react";
import { Showcase } from "./showcase/Showcase";
import { Featured } from "./featured/Featured";
import { OneCarousel } from "./carousel/OneCarousel";
import { MadeInKurdistan } from "./madeInKurdistan/madeInKurdistan";
import { Footer } from "../../footer/Footer";

export const Content = () => {
  return (
    <div className="flex flex-col gap-y-32">
      <Showcase />
      <Featured />
      <span className="w-[97.5%] bg-mySecondary h-1 mx-auto"></span>
      <OneCarousel />
      <MadeInKurdistan />
    </div>
  );
};
