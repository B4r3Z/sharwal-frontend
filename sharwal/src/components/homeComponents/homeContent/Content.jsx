import React from "react";
import { Fabrics } from "./fabrics/Fabrics";
import { Featured } from "./featured/Featured";

export const Content = () => {
  return (
    <div className="flex flex-col gap-y-32">
      <Fabrics />
      <Featured />
    </div>
  );
};
