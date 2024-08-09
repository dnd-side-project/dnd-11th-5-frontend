import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar";

import MapView from "./view";

export default function Map() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <DefaultHeader label="지역" />
      <MapView />
      <NavigationBar />
    </div>
  );
}
