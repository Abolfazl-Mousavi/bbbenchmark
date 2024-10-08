import DashMain from "@/components/dashboard/DashMain";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  return (
    <>
      <Navbar />
      <div >
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20}>
            <Sidebar />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80}>
            <DashMain />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
