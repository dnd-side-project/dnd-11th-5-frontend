import { Metadata } from "next/types";

import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import MapView from "./view";

export const metadata: Metadata = {
  title: "지도",
};

export default function Map() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <DefaultHeader href="/" label="지역" />
      <MapView />
      <NavigationBar />
    </div>
  );
}
