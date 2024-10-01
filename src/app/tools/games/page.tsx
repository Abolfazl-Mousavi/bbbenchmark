import { StoragePieChart } from "@/components/charts/StoragePieChart";
import { KanbanBoard } from "@/components/dragNDrop/KanbanBoard";
import ImportGames from "@/components/ImportGames";
import React from "react";

const games = () => {
  return (
   <div className="flex justify-around" >
    <div>
      <ImportGames/>
      <KanbanBoard />
    </div>
    <StoragePieChart/>
    </div>
  );
};

export default games;
