import React from "react";

const MypageBadgeCount = ({ count }: { count: number }) => {
  return (
    <div className="flex w-full">
      <span className="m-auto w-auto rounded-[8px] bg-primary-05 px-[10px] py-[12px] text-title-bold text-primary-01">
        획득 뱃지 {count}개!
      </span>
    </div>
  );
};

export default MypageBadgeCount;
