"use client";

import { useResizeWindow } from "@/hooks/useResizeWindow";

import { DesktopView } from "@/components/DesktopView";
import { Apps } from "@/components/Apps";
import { TaskBar } from "@/components/TaskBar";

export default function Home() {
  const { onMouseDown, onMouseMove, onMouseUp } = useResizeWindow();

  return (
    <main
      className="flex h-[100svh] flex-col"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <DesktopView />
      <Apps />
      <TaskBar />
    </main>
  );
}
