import { FC } from "react";

import ProgressUnit from "../ProgressUnit/ProgressUnit";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ totalSteps, currentStep }) => {
  return [...Array(totalSteps)].map((v, index) => (
    <ProgressUnit key={index} active={currentStep >= index + 1} />
  ));
};
export default ProgressBar;
