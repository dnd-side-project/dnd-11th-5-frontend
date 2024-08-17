import { dayjsWithExt } from "@/lib/dayjs";

const useDayjs = () => {
  const getDday = (date: string) => {
    const targetDate = dayjsWithExt(date);
    const today = dayjsWithExt();
    return targetDate.diff(today, "day");
  };

  const formatToKoreanDate = (date: string) => {
    const targetDate = dayjsWithExt(date);
    return targetDate.format("MM월 DD일");
  };

  return { getDday, formatToKoreanDate };
};

export default useDayjs;
