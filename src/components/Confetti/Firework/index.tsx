"use client";

import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

const FireworkAnimation = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationEndRef = useRef<number>(0);

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const duration = 30 * 1000;
    animationEndRef.current = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    intervalRef.current = setInterval(() => {
      const timeLeft = animationEndRef.current - Date.now();

      if (timeLeft <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return null;
};

export default FireworkAnimation;
