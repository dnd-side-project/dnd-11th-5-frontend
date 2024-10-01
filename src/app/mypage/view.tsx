"use client";

import { postSignOut } from "@/apis/auth/auth";
import { useUserStore } from "@/store/user";

const MyPageView = () => {
  const setUser = useUserStore((state) => state.updateUser);
  const handleLogout = () => {
    setUser(null);
    postSignOut();
  };

  return (
    <form className="flex flex-wrap gap-4 bg-indigo-300 text-title-bold">
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
    </form>
  );
};

export default MyPageView;
