import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { Window } from "@/store/window";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWindowPositionAndSize = (
  screenWidth: number,
  screenHeight: number,
  openedWindows: Window[],
): { x: number; y: number; width: number; height: number } => {
  let windowWidth: number;
  let windowHeight: number;

  if (screenWidth < 768) {
    windowWidth = Math.floor(screenWidth * 0.9);
    windowHeight = Math.floor(screenHeight * 0.9);
  } else if (screenWidth < 992) {
    windowWidth = Math.floor(screenWidth * 0.75);
    windowHeight = Math.floor(screenHeight * 0.75);
  } else {
    windowWidth = 800;
    windowHeight = 600;
  }

  const lastWindow = openedWindows[openedWindows.length - 1];

  // Calculate window position around the middle of the screen
  let windowX = lastWindow?.x ?? Math.floor((screenWidth - windowWidth) / 2);
  let windowY = lastWindow?.y ?? Math.floor((screenHeight - windowHeight) / 2);

  if (openedWindows.length > 0 && screenWidth > 992) {
    // if windows length is even then shift window 60x60
    if (openedWindows.length % 2 === 0) {
      windowX -= 60;
      windowY -= 60;
    } else {
      windowX += 60;
      windowY += 60;
    }
  }

  return {
    x: windowX,
    y: windowY,
    width: windowWidth,
    height: windowHeight,
  };
};

export const getResizeCursor = (window: Window, x: number, y: number) => {
  const {
    x: windowX,
    y: windowY,
    width,
    height,
    isFullScreen,
    isMinimized,
  } = window;

  const x1 = windowX;
  const y1 = windowY;
  const x2 = windowX + width;
  const y2 = windowY + height;

  if (isFullScreen || isMinimized) {
    return undefined;
  }

  // TL
  if (nearPoint(x, y, x1, y1)) {
    return "nwse-resize";
  }

  // TR
  if (nearPoint(x, y, x2, y1)) {
    return "nesw-resize";
  }

  // BL
  if (nearPoint(x, y, x1, y2)) {
    return "nesw-resize";
  }

  // BR
  if (nearPoint(x, y, x2, y2)) {
    return "nwse-resize";
  }

  // Top Line
  if (nearLine(x, y, x1, y1, x2, y1)) {
    return "ns-resize";
  }

  // Botton Line
  if (nearLine(x, y, x1, y2, x2, y2)) {
    return "ns-resize";
  }

  // Left Line
  if (nearLine(x, y, x1, y1, x1, y2)) {
    return "ew-resize";
  }

  // Right Line
  if (nearLine(x, y, x2, y1, x2, y2)) {
    return "ew-resize";
  }

  return undefined;
};

export const getResizePosition = (window: Window, x: number, y: number) => {
  const {
    x: windowX,
    y: windowY,
    width,
    height,
    isMinimized,
    isFullScreen,
  } = window;

  const x1 = windowX;
  const y1 = windowY;
  const x2 = windowX + width;
  const y2 = windowY + height;

  if (isFullScreen || isMinimized) {
    return undefined;
  }

  if (nearPoint(x, y, x1, y1)) {
    return "TOP_LEFT_CORNER";
  }

  if (nearPoint(x, y, x2, y1)) {
    return "TOP_RIGHT_CORNER";
  }

  if (nearPoint(x, y, x1, y2)) {
    return "BOTTOM_LEFT_CORNER";
  }

  if (nearPoint(x, y, x2, y2)) {
    return "BOTTOM_RIGHT_CORNER";
  }

  if (nearLine(x, y, x1, y1, x2, y1)) {
    return "TOP_LINE";
  }

  if (nearLine(x, y, x1, y2, x2, y2)) {
    return "BOTTOM_LINE";
  }

  if (nearLine(x, y, x1, y1, x1, y2)) {
    return "LEFT_LINE";
  }

  if (nearLine(x, y, x2, y1, x2, y2)) {
    return "RIGHT_LINE";
  }
};

export const nearPoint = (x: number, y: number, x1: number, y1: number) => {
  return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5;
};

export const nearLine = (
  x: number,
  y: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  maxDistance: number = 0.15,
) => {
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };
  const offset = distance(a, b) - (distance(a, c) + distance(b, c));
  return Math.abs(offset) < maxDistance;
};

export const distance = (
  a: { x: number; y: number },
  b: { x: number; y: number },
) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};
