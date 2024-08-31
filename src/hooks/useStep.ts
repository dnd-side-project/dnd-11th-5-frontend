"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldPath, FieldValues, UseFormTrigger } from "react-hook-form";

const useStep = <T extends FieldValues>(
  initialStep: number,
  totalStep: number,
  stepValidations?: Record<number, Array<FieldPath<T>>>,
  trigger?: UseFormTrigger<T>,
) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const handlePrevStep = () => {
    if (currentStep === initialStep) {
      router.push("/");
    }

    setCurrentStep((prev) => {
      const newStep = prev + -1;
      return newStep >= initialStep && newStep <= totalStep ? newStep : prev;
    });
  };

  const handleNextStep = async () => {
    if (!!trigger && !!stepValidations) {
      const isValid = await trigger(stepValidations[currentStep]);
      if (!isValid) {
        return;
      }
    }

    setCurrentStep((prev) => {
      const newStep = prev + 1;
      return newStep >= initialStep && newStep <= totalStep ? newStep : prev;
    });
  };

  return {
    currentStep,
    handlePrevStep,
    handleNextStep,
    initialStep,
    totalStep,
  };
};

export default useStep;
