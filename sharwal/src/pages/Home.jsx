import React from "react";
import { Hero } from "../components/homeComponents/hero/Hero";
import { Content } from "../components/homeComponents/homeContent/content";

export const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Content />
    </div>
  );
};
