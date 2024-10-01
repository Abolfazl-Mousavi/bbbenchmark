import { cn } from "@/lib/utils";
import React from "react";

const Sidebar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col", className)}>Sidebar</div>;
};

export default Sidebar;
