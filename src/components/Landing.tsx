"use client";
import React from "react";
import DesktopLogo from "./framer/DesktopLogo";
import { motion } from "framer-motion";
const Landing = ({ controls }: { controls?: any }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      variants={{
        expandIt: { opacity: 0, transitionEnd: { display: "none" } },
      }}
      transition={{ duration: 0.2 }}
      animate={controls}
      className="text-center"
    >
      <DesktopLogo />
      <h1 className="text-3xl">
        Welcome to <span className="font-semibold">BBBenchmark</span>
      </h1>
      <p className="text-muted-foreground">but Better Benchmark</p>
    </motion.div>
  );
};

export default Landing;
