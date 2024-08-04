import MobileHeader from "@/layout/Mobile/MobileHeader/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar/NavigationBar";

import CalendarView from "./view";

export default function Calendar() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <MobileHeader label="Calendar" />
      <CalendarView />
      <NavigationBar />
    </div>
  );
}
