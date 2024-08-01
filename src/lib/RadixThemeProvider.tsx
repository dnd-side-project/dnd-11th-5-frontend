"use client";
import { Theme, ThemeProps } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

interface Props extends ThemeProps, PropsWithChildren {}

function RadixThemeProvider({ children, ...props }: Props) {
  return (
    <Theme {...props}>
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  );
}

export default RadixThemeProvider;
