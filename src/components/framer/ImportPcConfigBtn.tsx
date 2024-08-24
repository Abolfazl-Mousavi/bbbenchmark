"use client";
import React, { useEffect } from "react";
import { motion, useAnimate, useAnimationControls } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const ImportPcConfigBtn = ({ controls }: { controls?: any }) => {
  return (
    <motion.div
      className="flex flex-col w-full"
      variants={{
        expandIt: { opacity: 0, transitionEnd: { display: "none" } },
      }}
      transition={{ duration: 0.2 }}
      animate={controls}
    >
      <Button onClick={() => controls.start("expandIt")} variant={"outline"}>
        Get started by configuring your PC
      </Button>
      <Button
        className="text-muted-foreground underline p-0 h-min"
        variant={"link"}
      >
        <Link href={"/dashboard"}>skip</Link>
      </Button>
    </motion.div>
  );
};

export default ImportPcConfigBtn;
