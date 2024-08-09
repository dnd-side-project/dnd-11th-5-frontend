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

export { dayjsWithExt };
