import { Metadata } from "next/types";
import { Suspense } from "react";

import OnBoardingCompleteView from "./view";

export const metadata: Metadata = {
  title: "온보딩",
};

const OnBoardingComplete = () => {
  return (
    <Suspense>
      <OnBoardingCompleteView />
    </Suspense>
  );
};

export default OnBoardingComplete;
