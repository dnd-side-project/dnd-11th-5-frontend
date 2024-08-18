import { useState } from "react";

import { ONBOARDING_SETTING } from "@/config";

export const useOnBoardingStep = () => {
  const { INITIAL_STEP, TOTAL_STEP } = ONBOARDING_SETTING;
  const [currentStep, setCurrentStep] = useState<number>(INITIAL_STEP);

  const handleStepChange = (stepChange: number) => {
    setCurrentStep((prev) => {
      const newStep = prev + stepChange;
      return newStep >= INITIAL_STEP && newStep <= TOTAL_STEP ? newStep : prev;
    });
  };

  const handlePrevStep = () => handleStepChange(-1);
  const handleNextStep = () => handleStepChange(1);

  return {
    currentStep,
    handlePrevStep,
    handleNextStep,
    INITIAL_STEP,
    TOTAL_STEP,
  };
};
