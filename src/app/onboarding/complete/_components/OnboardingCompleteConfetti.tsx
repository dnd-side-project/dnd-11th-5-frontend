"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

const OnboardingCompleteConfetti = () => {
  useEffect(() => {
    confetti({
      origin: {
        x: 0.5,
        y: 0.5,
      },
      particleCount: 100,
      spread: 80,
    });

    setTimeout(() => {
      confetti({
        origin: {
          x: 0.3,
          y: 0.8,
        },
        particleCount: 100,
        spread: 80,
      });
    }, 100);

    setTimeout(() => {
      confetti({
        origin: {
          x: 0.7,
          y: 1,
        },
        particleCount: 100,
        spread: 80,
      });
    }, 180);
  }, []);
  return <></>;
};

export default OnboardingCompleteConfetti;
