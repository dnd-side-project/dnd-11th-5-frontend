import { FC } from "react";

import { BasicButton } from "@/components/core/Button";

interface Props {
  totalStep: number;
  currentStep: number;
  onNext: () => void;
}

const CreateFestivalButton: FC<Props> = ({
  currentStep,
  totalStep,
  onNext,
}) => {
  return (
    <div className="fixed bottom-[8px] w-full max-w-none px-[16px] lg:max-w-[450px]">
      <BasicButton
        type={totalStep === currentStep ? "submit" : "button"}
        label={currentStep === 1 ? "다음" : "페스티벌 등록하기"}
        onClick={onNext}
      />
    </div>
  );
};

export default CreateFestivalButton;
