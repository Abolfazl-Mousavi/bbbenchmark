import React from "react";
import { Command } from "./ui/Command";
import { CommandButton } from "./CommandButton";

const Navbar = () => {
  return (
    <div className="flex justify-start items-start px-4 py-3">
      <h1 className="text-3xl font-semibold px-4 mx-2 text-white text-center">
        BBBenchmark
      </h1>
      <CommandButton/>
    </div>
  );
};

export default Navbar;
