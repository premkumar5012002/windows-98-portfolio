import Image from "next/image";
import { FC, MouseEvent, useState } from "react";

import { cn } from "@/lib/utils";

import { useWindowSize } from "usehooks-ts";
import { useWindowStore, Window } from "@/store/window";
import { useMoveWindow } from "@/hooks/useMoveWindow";

export const AppWindow: FC<{
  window: Window;
}> = ({ window }) => {
  const { width, height } = useWindowSize();

  const { openedWindows, refocusWindow } = useWindowStore();

  const { onMouseDown, onMouseMove, onMouseUp, onMouseLeave } =
    useMoveWindow(window);

  const { closeWindow, toggleMinimizeWindow, toggleMaximizeWindow } =
    useWindowStore();

  const {
    id,
    title,
    imageSrc,
    isFullScreen,
    altImage,
    x,
    y,
    component,
    width: windowWidth,
    height: windowHeight,
  } = window;

  return (
    <div
      id={window.id}
      style={{
        top: isFullScreen ? 0 : y,
        left: isFullScreen ? 0 : x,
        width: isFullScreen ? width : windowWidth,
        height: isFullScreen ? height - 40 : windowHeight,
      }}
      className="absolute flex flex-col overflow-hidden border-2 border-white border-b-black border-r-black bg-silver p-[2px]"
      onClick={() => refocusWindow(id)}
    >
      <div
        className={cn(
          "flex select-none items-center justify-between px-1 hover:cursor-move",
          openedWindows[openedWindows.length - 1].id === window.id
            ? "bg-accent"
            : "bg-[#85898d]",
        )}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex items-center gap-1 py-0.5">
          {imageSrc && altImage && (
            <Image
              priority
              src={imageSrc}
              width={15}
              height={15}
              alt={altImage}
            />
          )}
          <h2 className="text-sm font-bold text-white">{title}</h2>
        </div>

        <div className="flex items-center gap-0.5">
          <button
            className="button-98"
            onClick={() => toggleMinimizeWindow(id)}
          >
            <Image
              priority
              src="/icons/minimize.png"
              width={15}
              height={15}
              alt="Minimize"
            />
          </button>

          <button
            className="button-98"
            onClick={() => toggleMaximizeWindow(id)}
          >
            <Image
              priority
              width={15}
              height={15}
              alt="Maximize"
              src="/icons/maximize.png"
            />
          </button>

          <button className="button-98" onClick={() => closeWindow(id)}>
            <Image
              priority
              src="/icons/close.png"
              width={15}
              height={15}
              alt="Close"
            />
          </button>
        </div>
      </div>

      {component}
    </div>
  );
};
