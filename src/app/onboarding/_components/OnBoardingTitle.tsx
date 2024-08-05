import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
}

const OnBoardingTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex w-full flex-col items-start gap-[6px]">
      <h1 className="text-title-bold text-gray-scale-900">{title}</h1>
      <h3 className="text-caption2-medium text-gray-scale-600">{subtitle}</h3>
    </div>
  );
};

export default OnBoardingTitle;
