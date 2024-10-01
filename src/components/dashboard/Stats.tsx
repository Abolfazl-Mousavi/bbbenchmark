import React from "react";
import { StatsCard } from "./StatsCard";
import { stats } from "@/global/types/types";

const Stats = () => {
  const populateStats: stats[] = [
    { cardHeader: "119,153", cardContent: "Games you can play" },
    { cardHeader: "78 Titles", cardContent: "Games you have played" },
    { cardHeader: "25 Paths", cardContent: "Available upgrade paths" },
    {
      cardHeader: "♥ support us",
      cardContent: "enjoying our website?",
      buttonName: "Buy us KO-FI",
      buttonUrl: "https://kofi.com" /* todo */,
    },
  ];
  return (
    <div className="gap-2 grid grid-cols-4">
      {populateStats.map((i,index) => (
        <StatsCard  key={index} cardContent={i.cardContent}  cardHeader={i.cardHeader} buttonName={i.buttonName || undefined} buttonUrl={i.buttonUrl || undefined} className="my-2" />
      ))}
    </div>
  );
};

export default Stats;
