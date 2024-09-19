"use client";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { cn } from "@/lib/utils";
import SideBar from "../SideBar";

interface chatLayoutType {
  defaultLayout: number[] | undefined;
}

const ChatLayout = ({ defaultLayout = [320, 440] }: chatLayoutType) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // initial call
    checkScreenWidth();
    // event listner for screen size changes
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  });
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="min-h-[80vh] max-w-4xl rounded-lg border md:min-w-[550px] "
    >
      {/* left side */}
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile ? 0 : 40}
        maxSize={isMobile ? 8 : 40}
        onCollapse={() => {
          setCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=true`;
        }}
        onExpand={() => {
          setCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=false`;
        }}
        className={cn(
          isCollapsed && "min-w-[80px] transition-all duration-500 ease-in-out"
        )}
      >
        {/* <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold"></span>
        </div> */}
        <SideBar isCollapsed={isCollapsed} />
      </ResizablePanel>

      <ResizableHandle withHandle />
      {/* right side */}
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
export default ChatLayout;
