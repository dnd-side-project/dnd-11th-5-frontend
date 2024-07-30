"use client";
import { Theme, ThemePanel } from "@radix-ui/themes";

function RadixThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <Theme>
      {children}
      <ThemePanel />
    </Theme>
  );
}

export default RadixThemeProvider;
