import { Metadata } from "next/types";

import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import CalendarView from "./view";

export const metadata: Metadata = {
  title: "캘린더",
};

export default function Calendar() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <DefaultHeader href="/" label="Calendar" />
      <CalendarView />
      <NavigationBar />
    </div>
  );
}
