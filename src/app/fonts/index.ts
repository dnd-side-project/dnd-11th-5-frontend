import localFont from "next/font/local";

export const Pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});
