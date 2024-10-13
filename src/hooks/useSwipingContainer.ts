/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MouseEvent, useCallback, useEffect, useRef } from "react";

export const useSwipingContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ top: 0, left: 0, x: 0, y: 0 });

  const mouseDownHandler = useCallback(
    (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      const container = containerRef.current;
      if (!container) return;
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";

      pos.current = {
        left: container.scrollLeft,
        top: container.scrollTop,
        x: event.clientX,
        y: event.clientY,
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    },
    [],
  );

  const mouseMoveHandler = useCallback((event: globalThis.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const dx = event.clientX - pos.current.x;
    const dy = event.clientY - pos.current.y;

    container.scrollTop = pos.current.top - dy;
    container.scrollLeft = pos.current.left - dx;
  }, []);

  const mouseUpHandler = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.style.cursor = "grab";
    container.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }, []);

  useEffect(() => {
    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [mouseMoveHandler, mouseUpHandler]);

  return { containerRef, mouseDownHandler };
};
