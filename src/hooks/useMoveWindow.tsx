import { useState, MouseEvent } from "react";

import { Window, useWindowStore } from "@/store/window";

export const useMoveWindow = (window: Window) => {
  const { id, x, y } = window;

  const { moveWindow } = useWindowStore();

  const [isMoving, setIsMoving] = useState(false);

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    setIsMoving(true);
    setOffset({ x: clientX - x, y: clientY - y });
  };

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    if (isMoving) {
      return moveWindow(id, clientX - offset.x, clientY - offset.y);
    }
  };

  const onMouseUp = () => {
    setIsMoving(false);
    setOffset({ x: 0, y: 0 });
  };

  const onMouseLeave = () => {
    setIsMoving(false);
    setOffset({ x: 0, y: 0 });
  };

  return { onMouseDown, onMouseMove, onMouseUp, onMouseLeave };
};
