import React from "react";
import { StoragePieChart } from "../charts/StoragePieChart";
import Stats from "./Stats";
import { ConfigurationRating } from "../charts/ConfigurationRating";
import { SelectSeparator } from "../ui/select";

const DashMain = () => {
  return (
    <div className={"flex-col flex mx-3"}>
      <Stats />
      <div className="flex h-[500px] gap-5 mt-3">
        <ConfigurationRating />
        <StoragePieChart />
      </div>
    </div>
  );
};

export default DashMain;
