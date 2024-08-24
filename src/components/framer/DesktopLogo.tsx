"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function DesktopLogo() {
  const fillControls = useAnimationControls();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <motion.path
        fill={"none"}
        stroke="#ffffff"
        strokeWidth={1.5}
        d="M105.9,168.7c-8.1,14.1-2.6,25.7,8.6,32.2c11.3,6.5,24.1,5.5,32.2-8.6c8.1-14.1,59.6-140,55.1-142.6C197.4,47.1,114,154.5,105.9,168.7z M128,79c5.2,0,10.2,0.4,15.1,1.3c5.2-6.5,11-13.6,16.6-20.4C149.6,57,139,55.4,128,55.4c-66.2,0-118,55.8-118,127c0,4.4,0.2,8.8,0.6,13c0.6,6.5,6.4,11.3,12.8,10.7c6.5-0.6,11.3-6.3,10.7-12.8c-0.3-3.6-0.5-7.3-0.5-10.9C33.6,124.4,75.1,79,128,79z M213.2,93.7c-3.3,8.8-6.8,17.9-9.9,25.7c12,17.3,19.1,39.1,19.1,63c0,3.7-0.2,7.5-0.5,11.2c-0.6,6.5,4.2,12.2,10.7,12.8c0.4,0,0.7,0,1.1,0c6,0,11.2-4.6,11.7-10.7c0.4-4.4,0.6-8.8,0.6-13.3C246,147.6,233.6,116.4,213.2,93.7z"
        initial={"initial"}
        animate={{
          pathLength: 1,
          transitionEnd: { fill: "white" },
        }}
        transition={{ duration: 2, ease: "easeIn" }}
        variants={{
          initial: { pathLength: 0, fill: "none" },
        }}
      />
    </svg>
  );
}
