import DefaultHeader from "@/layout/Mobile/MobileHeader/DefaultHeader/DefaultHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar/NavigationBar";

import CalendarView from "./view";

export default function Calendar() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <DefaultHeader label="Calendar" />
      <CalendarView />
      <NavigationBar />
    </div>
  );
}
