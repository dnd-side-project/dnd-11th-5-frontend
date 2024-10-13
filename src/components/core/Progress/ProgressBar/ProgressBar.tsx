import { FC } from "react";

import ProgressUnit from "../ProgressUnit/ProgressUnit";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  totalSteps,
  currentStep,
  className,
}) => {
  return (
    <div className={className}>
      {[...Array(totalSteps)].map((_, index) => (
        <ProgressUnit key={index} active={currentStep >= index + 1} />
      ))}
    </div>
  );
};
export default ProgressBar;
