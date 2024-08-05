import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLDivElement> {}

const MobileLayout: FC<Props> = ({ ...props }) => {
  return (
    <div className="relative flex  min-h-screen w-screen justify-center bg-gray-scale-0">
      <div
        className={cn(
          "relative min-h-screen w-full shadow-lg lg:max-w-screen-lg",
          props.className,
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default MobileLayout;
