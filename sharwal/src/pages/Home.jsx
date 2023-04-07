import React from "react";
import { Hero } from "../components/homeComponents/hero/Hero";
import { Content } from "../components/homeComponents/homeContent/Content";

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-32">
      <Hero />
      <Content />
    </div>
  );
};
