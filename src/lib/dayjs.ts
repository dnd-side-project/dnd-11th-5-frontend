import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

const dayjsWithExt = dayjs;

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isToday);
dayjs.extend(isBetween);

const getDday = (startDate: string, endDate: string): string => {
  const targetDate = dayjsWithExt(startDate);
  const today = dayjsWithExt();

  if (today.isBetween(startDate, endDate, "day", "[]")) {
    return "진행중";
  }

  const Dday = targetDate.diff(today, "day");

  if (Dday < 0) {
    return "종료";
  }

  return `D-${targetDate.diff(today, "day")}`;
};

const formatToKoreanDate = (date: string) => {
  const targetDate = dayjsWithExt(date);
  return targetDate.format("MM월 DD일");
};

const formatToYYYYMMDD = (date?: string) => {
  if (!date) return "";

  const targetDate = dayjsWithExt(date);
  return targetDate.format("YYYY.MM.DD");
};

export { dayjsWithExt, formatToKoreanDate, formatToYYYYMMDD, getDday };
