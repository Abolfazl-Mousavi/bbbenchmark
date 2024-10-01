"use client";

import Landing from "@/components/Landing";
import ImportPcConfigBtn from "@/components/framer/ImportPcConfigBtn";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import { ComboboxDemo } from "@/components/ui/ComboBox";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const expandItControls = useAnimationControls();
  const MotionCard = motion(BackgroundGradient);
  useEffect(() => {
    if (localStorage.getItem("PC_CONFIGURATION")) {
      redirect("/dashboard");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col gap-2 justify-center items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <AnimatePresence>
          <Landing controls={expandItControls} />
          <ImportPcConfigBtn controls={expandItControls} />
          <motion.div
            layout
            initial={"intitial"}
            animate={expandItControls}
            transition={{ duration: 0.2 }}
            variants={{
              intitial: { display: "none" },
              expandIt: { display: "block" },
            }}
          >
            <MotionCard className="flex items-center justify-center h-[550px] md:w-[70vw] bg-[#0C0A09] rounded-3xl w-[93vw]">
              <ComboboxDemo />
            </MotionCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
