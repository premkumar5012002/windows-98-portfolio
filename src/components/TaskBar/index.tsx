"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useOnClickOutside } from "usehooks-ts";
import { useWindowStore, Window } from "@/store/window";

import { StartMenu } from "@/components/StartMenu";

export const TaskBar: FC = () => {
  return (
    <div className="z-10 flex h-[40px] select-none items-center gap-1 border-t-2 border-white bg-silver p-[3px] md:gap-2">
      <StartMenuButton />
      <div className="h-full border border-l-[#808080] border-r-white" />
      <RunningApps />
      <SystemTray />
    </div>
  );
};

const StartMenuButton: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button
        className="start-button-98 h-[30px] text-sm font-bold md:text-base"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative mr-0.5 h-5 w-5 md:h-7 md:w-7">
          <Image priority fill src="/icons/start.png" alt="Start Menu" />
        </div>
        <span className="truncate">Start</span>
      </button>
      {isOpen && <StartMenu />}
    </div>
  );
};

const RunningApps: FC = () => {
  const {
    openedWindows,
    openedWindowsOrder,
    refocusWindow,
    toggleMinimizeWindow,
  } = useWindowStore();

  const focusedWindow = openedWindows[openedWindows.length - 1];

  const onClick = (window: Window) => {
    if (focusedWindow.id === window.id) {
      toggleMinimizeWindow(window.id);
    } else {
      refocusWindow(window.id);
    }
  };

  return (
    <div className="flex w-full gap-1.5 overflow-clip">
      {openedWindowsOrder.map((windowId) => {
        const window = openedWindows.find((window) => window.id === windowId);

        if (window && window.altImage && window.imageSrc) {
          return (
            <button
              key={window.id}
              className={cn(
                "flex h-[30px] w-full max-w-28 items-center gap-1.5 border-2 border-black pl-1 text-xs font-bold md:max-w-36 md:text-sm",
                window.isMinimized || focusedWindow.id !== window.id
                  ? "border-l-white border-t-white bg-[#d6d6cf]"
                  : "active-window border-b-white border-r-white",
              )}
              onClick={() => onClick(window)}
            >
              <Image
                priority
                width={16}
                height={16}
                alt={window.altImage}
                src={window.imageSrc}
              />
              <span className="truncate">{window.title}</span>
            </button>
          );
        }
      })}
    </div>
  );
};

const SystemTray: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center border-2 border-[#7c7c7c] border-b-white border-r-white py-0.5 pl-1 pr-2 text-sm md:pr-4 md:text-base">
      <div className="relative mr-1.5 h-5 w-5 md:mr-3 md:h-6 md:w-6">
        <Image priority fill alt="Sound" src="/icons/sound.png" />
      </div>
      <p suppressContentEditableWarning className="truncate">
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
};
