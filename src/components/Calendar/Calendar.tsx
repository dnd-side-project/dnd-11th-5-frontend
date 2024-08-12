import { Dayjs } from "dayjs";
import { FC, useState } from "react";

import { dayjsWithExt } from "@/lib/dayjs";
import { cn } from "@/utils/cn";

import { BasicButton } from "../core/Button";
import IconButton from "../core/Button/IconButton/IconButton";
import { ArrowLeftSmallIcon, ArrowRightSmallIcon } from "../icons";

interface Props {
  startDay: string | null;
  endDay: string | null;
  onConfirm: (_startDate: string | null, _endDate: string | null) => void;
}

const Calendar: FC<Props> = ({ onConfirm, startDay, endDay }) => {
  const [currentDate, setCurrentDate] = useState(dayjsWithExt());
  const [startDate, setStartDate] = useState<Dayjs | null>(
    startDay ? dayjsWithExt(startDay) : null,
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    endDay ? dayjsWithExt(endDay) : null,
  );

  const generateCalendar = (date: Dayjs) => {
    const days = [];
    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");
    const startOfWeek = startOfMonth.startOf("week");
    const endOfWeek = endOfMonth.endOf("week");

    let currentDay = startOfWeek;

    while (currentDay.isBefore(endOfWeek) || currentDay.isSame(endOfWeek)) {
      days.push({
        date: currentDay.format("YYYY-MM-DD"),
        isCurrentMonth: currentDay.isBetween(
          startOfMonth,
          endOfMonth,
          "day",
          "[]",
        ),
        isToday: currentDay.isToday(),
        isInRange:
          startDate &&
          endDate &&
          currentDay.isBetween(startDate, endDate, "day", "[]"),
        isStart: startDate && currentDay.isSame(startDate, "day"),
        isEnd: endDate && currentDay.isSame(endDate, "day"),
      });
      currentDay = currentDay.add(1, "day");
    }

    // ? 항상 달력에 6줄을 보장함.
    const totalDays = days.length;
    const extraDays = 6 * 7 - totalDays;

    for (let i = 0; i < extraDays; i++) {
      days.push({
        date: "",
        isCurrentMonth: false,
        isToday: false,
        isInRange: false,
        isStart: false,
        isEnd: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendar(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDayClick = (date: string) => {
    const clickedDate = dayjsWithExt(date);

    if (startDate && clickedDate.isSame(startDate, "day")) {
      return;
    }

    if (!startDate || (startDate && endDate)) {
      setStartDate(dayjsWithExt(date));
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (dayjsWithExt(date).isBefore(startDate)) {
        setEndDate(startDate);
        setStartDate(dayjsWithExt(date));
      } else {
        setEndDate(dayjsWithExt(date));
      }
    }
  };

  const handleOnConfirm = () => {
    onConfirm(
      !startDate ? null : (startDate as Dayjs).format("YYYY/MM/DD"),
      !endDate ? null : (endDate as Dayjs).format("YYYY/MM/DD"),
    );
  };

  return (
    <div className="w-full max-w-none lg:max-w-[450px]">
      <div className="flex w-full items-center justify-center gap-[10px]">
        <IconButton
          onClick={handlePrevMonth}
          className="rounded-full p-2 hover:bg-gray-200"
        >
          <ArrowLeftSmallIcon
            width={20}
            height={20}
            className="text-gray-scale-800"
          />
        </IconButton>

        <span
          id="currentMonth"
          className="text-caption2-medium text-gray-scale-800"
        >
          {currentDate.format("YYYY.MM")}
        </span>
        <IconButton
          onClick={handleNextMonth}
          className="rounded-full p-2 hover:bg-gray-200"
        >
          <ArrowRightSmallIcon
            width={20}
            height={20}
            className="text-gray-scale-800"
          />
        </IconButton>
      </div>
      <div className="grid w-full grid-cols-7">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div
            key={index}
            className="flex h-[48px] w-full items-center justify-center text-caption2-medium text-gray-scale-700"
          >
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDayClick(day.date)}
            className={cn(
              "w-full h-[48px] flex justify-center items-center cursor-pointer relative",
              day.isCurrentMonth
                ? "text-gray-scale-700"
                : "text-gray-scale-500",
              day.isInRange ? "bg-primary-04" : "",
              day.isStart
                ? "bg-primary-01 text-white rounded-full z-[99] w-[48px]"
                : "",
              day.isEnd
                ? "bg-primary-01 text-white rounded-full z-[99] w-[48px]"
                : "",
            )}
          >
            {day.date && dayjsWithExt(day.date).date()}
            {day.isStart && (
              <>
                {!!startDate && !!endDate && (
                  <div className="absolute right-0 top-0 z-[-1] h-[48px] w-[24px] bg-primary-04 md:right-[-24px] md:w-[40px]" />
                )}
                <div className="absolute right-0 top-0 z-[-1] h-[48px] w-[24px] rounded-br-full rounded-tr-full bg-primary-01" />
              </>
            )}
            {day.isEnd && (
              <>
                {!!startDate && !!endDate && (
                  <div className="absolute left-0 top-0 z-[-1] h-[48px] w-[24px] bg-primary-04" />
                )}
                <div className="absolute left-0 top-0 z-[-1] h-[48px] w-[24px] rounded-bl-full rounded-tl-full bg-primary-01" />
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <BasicButton
          label={"선택완료"}
          className="max-w-[126px]"
          onClick={handleOnConfirm}
        />
      </div>
    </div>
  );
};

export default Calendar;
