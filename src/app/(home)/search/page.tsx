import { Suspense } from "react";

import { SearchHeader } from "@/layout/Mobile/MobileHeader";

import SearchView from "./view";

export default async function SearchPage() {
  return (
    <Suspense>
      <div className="mb-[60px] mt-[44px]">
        <SearchHeader />
        <SearchView />
      </div>
    </Suspense>
  );
}
