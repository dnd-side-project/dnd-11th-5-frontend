import { Theme } from "@radix-ui/themes";
import React from "react";

// * Reference - https://www.radix-ui.com/themes/docs/overview/getting-started

const RadixThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      {children}
      {/* ThemePanel은 실시간으로 테마를 미리보기 할 수 있는 드롭인 컴포넌트입니다.
        동작을 확인하려면 컴포넌트 플레이그라운드를 방문하세요. */}
      {/* <ThemePanel /> */}
    </Theme>
  );
};

export default RadixThemeProvider;
