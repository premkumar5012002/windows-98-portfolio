import { MouseEvent, useState } from "react";

import { getResizeCursor, getResizePosition } from "@/lib/utils";

import { useWindowStore } from "@/store/window";

export const useResizeWindow = () => {
  const { openedWindows, resizeWindow } = useWindowStore();

  const [resizePosition, setResizePosition] = useState<string | null>();

  const [resizeWindowId, setResizeWindowId] = useState<string | null>();

  const onMouseDown = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    for (const window of openedWindows) {
      const resizePosition = getResizePosition(window, clientX, clientY);

      if (resizePosition) {
        setResizeWindowId(window.id);
        setResizePosition(resizePosition);
        break;
      }
    }
  };

  const onMouseUp = () => {
    setResizeWindowId(null);
    setResizePosition(null);
  };

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    for (let i = openedWindows.length - 1; i >= 0; i--) {
      const window = openedWindows[i];

      const element = document.getElementById(window.id);

      const resizeCursor = getResizeCursor(window, clientX, clientY);

      if (element) {
        if (resizeCursor) {
          element.style.cursor = resizeCursor;
          break;
        } else {
          element.style.cursor = "auto";
        }
      }
    }

    if (!resizeWindowId || !resizePosition) return;

    const window = openedWindows.find((window) => window.id === resizeWindowId);

    if (!window) return;

    const { id, x, y, width, height } = window;

    const x1 = x;
    const y1 = y;
    const x2 = width + x1 - clientX;
    const y2 = height + y1 - clientY;

    e.preventDefault();

    switch (resizePosition) {
      case "TOP_LEFT_CORNER":
        return resizeWindow(id, clientX, clientY, x2, y2);
      case "TOP_RIGHT_CORNER":
        return resizeWindow(id, x1, clientY, clientX - x1, y2);
      case "BOTTOM_LEFT_CORNER":
        return resizeWindow(id, clientX, y1, x2, clientY - y1);
      case "BOTTOM_RIGHT_CORNER":
        return resizeWindow(id, x1, y1, clientX - x1, clientY - y1);
      case "TOP_LINE":
        return resizeWindow(id, x1, clientY, width, y2);
      case "LEFT_LINE":
        return resizeWindow(id, clientX, y1, x2, height);
      case "BOTTOM_LINE":
        return resizeWindow(id, x1, y1, width, clientY - y1);
      case "RIGHT_LINE":
        return resizeWindow(id, x1, y1, clientX - x1, height);
    }
  };

  return { onMouseUp, onMouseDown, onMouseMove };
};
