import * as Progress from "@radix-ui/react-progress";
import { FC } from "react";

interface Props {
  active: boolean;
}

const ProgressUnit: FC<Props> = ({ active }) => {
  return (
    <Progress.Root
      className="relative flex h-[6px] w-full items-center justify-between gap-2 overflow-hidden rounded-full bg-primary-01"
      value={active ? 100 : 0}
    >
      <Progress.Indicator
        className="h-full w-full rounded-full bg-gray-scale-0 transition-transform duration-[660ms]"
        style={{
          transform: `translateX(${active ? 100 : 0}%)`,
        }}
      />
    </Progress.Root>
  );
};

export default ProgressUnit;
