"use client";

import Image from "next/image";
import React, { FC, useMemo } from "react";

import { useWindowStore } from "@/store/window";
import { useWindowSize } from "usehooks-ts";

import { getWindowPositionAndSize } from "@/lib/utils";

import { Biography } from "../Apps/Biography";
import { Resume } from "../Apps/Resume";
import { Projects } from "../Apps/Projects";
import { Mail } from "../Apps/Mail";

export const DesktopView = () => {
  const { openedWindows, openWindow } = useWindowStore();

  const { width, height } = useWindowSize();

  const ICONS = useMemo(() => {
    return [
      {
        label: "Biography",
        imageSrc: "/icons/computer.png",
        onDoubleClick: () => {
          openWindow({
            id: "biography",
            title: "Biography",
            imageSrc: "/icons/computer.png",
            altImage: "Computer",
            isFullScreen: false,
            isMinimized: false,
            component: <Biography />,
            ...getWindowPositionAndSize(width, height - 40, openedWindows),
          });
        },
      },
      {
        label: "Résumé",
        imageSrc: "/icons/document.png",
        onDoubleClick: () => {
          openWindow({
            id: "résumé",
            title: "Résumé",
            imageSrc: "/icons/document.png",
            altImage: "Document",
            isFullScreen: false,
            isMinimized: false,
            component: <Resume />,
            ...getWindowPositionAndSize(width, height - 40, openedWindows),
          });
        },
      },
      {
        label: "Projects",
        imageSrc: "/icons/briefcase.png",
        onDoubleClick: () => {
          openWindow({
            id: "projects",
            title: "Projects",
            imageSrc: "/icons/briefcase.png",
            altImage: "Briefcase",
            isFullScreen: false,
            isMinimized: false,
            component: <Projects />,
            ...getWindowPositionAndSize(width, height - 40, openedWindows),
          });
        },
      },
      {
        label: "Mail",
        imageSrc: "/icons/mail.png",
        onDoubleClick: () => {
          openWindow({
            id: "mail",
            title: "Mail",
            imageSrc: "/icons/mail.png",
            altImage: "Mail",
            isFullScreen: false,
            isMinimized: false,
            component: <Mail />,
            ...getWindowPositionAndSize(width, height - 40, openedWindows),
          });
        },
      },
    ];
  }, [openedWindows, width, height, openWindow]);

  return (
    <div className="flex h-full flex-1 select-none flex-col gap-6 bg-teal-600 p-5">
      {ICONS.map((desktopIcon) => (
        <DesktopItem key={desktopIcon.label} {...desktopIcon} />
      ))}
    </div>
  );
};

const DesktopItem: FC<{
  label: string;
  imageSrc: string;
  onDoubleClick?: () => void;
}> = ({ label, imageSrc, onDoubleClick }) => {
  return (
    <button
      className="group flex w-16 flex-col items-center gap-1 text-sm text-white"
      onDoubleClick={onDoubleClick}
    >
      <div className="group-focus:brightness-[30%] group-focus:contrast-[0.9] group-focus:grayscale group-focus:-hue-rotate-180 group-focus:saturate-[400%] group-focus:sepia group-focus:filter">
        <Image priority src={imageSrc} width={40} height={40} alt={label} />
      </div>
      <span className="group-focus:bg-accent group-focus:outline-dotted group-focus:outline-1">
        {label}
      </span>
    </button>
  );
};
