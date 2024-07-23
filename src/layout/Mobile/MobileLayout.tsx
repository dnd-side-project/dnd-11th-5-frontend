import React from "react";

import MobileBottomNavBar from "./MobileBottomNavBar";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex  min-h-screen w-screen justify-center bg-white">
      <section className="relative mb-btm-nav-bar min-h-screen w-full max-w-screen-m-lg shadow-lg">
        {children}
        <MobileBottomNavBar />
      </section>
    </main>
  );
};

export default MobileLayout;
