import { useState } from "react";

import { ONBOARDING } from "@/app/onboarding/_constants";

export const useOnBoardingStep = () => {
  const { INITIAL_STEP, TOTAL_STEP } = ONBOARDING;
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
    ONBOARDING,
  };
};
