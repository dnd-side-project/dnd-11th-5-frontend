import { Metadata } from "next/types";

import NavigationBar from "@/layout/Mobile/NavigationBar";

import ChatView from "./view";

export const metadata: Metadata = {
  title: "채팅",
};

export default function Map() {
  return (
    <div className="mb-[60px] ">
      <ChatView />
      <NavigationBar />
    </div>
  );
}
