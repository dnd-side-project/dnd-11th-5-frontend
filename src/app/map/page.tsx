import MobileHeader from "@/layout/Mobile/MobileHeader/MobileHeader";
import NavigationBar from "@/layout/Mobile/NavigationBar/NavigationBar";

import MapView from "./view";

export default function Map() {
  return (
    <div className="mb-[60px] mt-[44px]">
      <MobileHeader label="지역" />
      <MapView />
      <NavigationBar />
    </div>
  );
}
