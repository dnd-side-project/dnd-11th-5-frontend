import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";

import { ClockIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  label?: string;
  className?: string;
  value: string;
  onChange: (time: string) => void;
}

const TimeInput: FC<Props> = ({
  label = "페스티벌 시간",
  className,
  value,
  onChange,
  ...props
}) => {
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  useEffect(() => {
    const [start, end] = value.split(" ~ ");
    setStartTime(start);
    setEndTime(end === "undefined" ? "" : end);
  }, [value]);

  const handleOpenPicker = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.showPicker();
    }
  };

  const handleOnChange = (start?: string, end?: string) => {
    onChange(`${start ?? startTime} ~ ${end ?? endTime}`);
  };

  const handleStartTImeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setStartTime(time);
    handleOnChange(time);
  };
  const handleEndTImeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setEndTime(time);
    handleOnChange(undefined, time);
  };

  const isBothSelected = !!startTime && !!endTime;

  return (
    <div className="flex w-full flex-col items-start gap-[8px]">
      <label
        htmlFor={label}
        className="text-subtitle-medium text-gray-scale-900"
      >
        {label}
      </label>
      <div
        id={label}
        className={cn(
          "w-full rounded-[8px]  p-[16px] bg-gray-scale-0 duration-300",
          "border-[1px] border-gray-scale-200",
          "placeholder:text-caption2-medium placeholder:text-gray-400 text-gray-scale-700",
          "flex gap-[8px] justify-start items-center",
          className,
        )}
        {...props}
      >
        <ClockIcon
          width={16}
          height={16}
          className={isBothSelected ? "text-primary-01" : "text-gray-400"}
        />

        <div className="flex w-full items-center gap-[8px] ">
          <input
            type="time"
            ref={startTimeRef}
            id="start-time"
            value={startTime ?? ""}
            className={
              (cn(
                "leading-none text-sm rounded-lg focus:ring-primary-01 focus:border-primary-01 w-auto",
              ),
              !!startTime ? "text-primary-01" : "text-gray-400")
            }
            onClick={() => handleOpenPicker(startTimeRef)}
            onChange={handleStartTImeChange}
          />
          <strong
            className={cn(isBothSelected ? "text-primary-01" : "text-gray-400")}
          >
            ~
          </strong>
          <input
            type="time"
            ref={endTimeRef}
            value={endTime ?? ""}
            id="end-time"
            className={cn(
              "leading-none text-gray-900 text-sm rounded-lg focus:ring-primary-01 focus:border-primary-01 w-auto",
              !!endTime ? "text-primary-01" : "text-gray-400",
            )}
            onClick={() => handleOpenPicker(endTimeRef)}
            onChange={handleEndTImeChange}
          />
        </div>

        {/* {isTimeEmpty && (
          <button
            className={cn(
              "!text-caption2-medium max-w-[90%] text-ellipsis line-clamp-1",
              isFilled ? "text-gary-scale-700" : "text-gray-400",
            )}
            onClick={handleSetStartTime}
          >
            {!!value ? value : "페스티벌 시간을 입력해주세요."}
          </button>
        )}
        <input ref={startDateRef} type="time" className="hidden" /> */}
      </div>
    </div>
  );
};

export default TimeInput;
