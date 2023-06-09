import React from "react";
import heroImg from "../../../assets/ColorRecord.png";
import "./HeroStyle.css";
import male from "../../../assets/male.svg";
import female from "../../../assets/female.svg";
import { PageHeader } from "./pageheader/PageHeader.jsx";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageHeader />
      <div className="w-[97.5%] mx-auto bg-mySecondary self-center">
        <div className="grid grid-cols-3 gap-4 justify-between text-[4rem] items-center">
          <div className=" pl-16 pt-40 pb-96 flex flex-col justify-center items-center text-left relative">
            <h1 className=" text-myRed font-satoshiBold">
              WHAT ARE YOU LOOKING FOR?
            </h1>
            <h1 className=" bottom-[12.25rem] txtStroke font-satoshiBold absolute top-1/4 opacity-50">
              WHAT ARE YOU LOOKING FOR?
            </h1>
          </div>
          <div className="">
            <img src={heroImg} alt="ididid" width={400} className="mx-auto" />
          </div>
          <div className="pr-16 flex flex-col">
            <div className="flex items-center justify-end py-16 gap-16 ">
              <img src={male} alt="" />
              <img src={female} alt="" />
            </div>
            <div className=" pb-40 pt-96 flex flex-col justify-end items-center text-right relative">
              <h1 className=" txtStroke2 font-satoshiBold text-myPrimary absolute bottom-[22.5%] opacity-50">
                JUST CLICK AND WE'LL DO THE REST.
              </h1>
              <h1 className="text-myPrimary font-satoshiBold">
                JUST CLICK AND WE'LL DO THE REST.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
