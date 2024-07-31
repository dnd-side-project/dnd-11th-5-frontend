import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const paletteStyles = cva(`h-[100px] w-[100px] rounded-[12px]`, {
  variants: {
    intent: {
      PRIMARY_01: "bg-primary-01",
      PRIMARY_02: "bg-primary-02",
      PRIMARY_03: "bg-primary-03",
      PRIMARY_04: "bg-primary-04",
      PRIMARY_05: "bg-primary-05",
      GRAY_SCALE_0: "bg-gray-scale-0",
      GRAY_SCALE_50: "bg-gray-scale-50",
      GRAY_SCALE_100: "bg-gray-scale-100",
      GRAY_SCALE_200: "bg-gray-scale-200",
      GRAY_SCALE_300: "bg-gray-scale-300",
      GRAY_SCALE_400: "bg-gray-scale-400",
      GRAY_SCALE_500: "bg-gray-scale-500",
      GRAY_SCALE_600: "bg-gray-scale-600",
      GRAY_SCALE_700: "bg-gray-scale-700",
      GRAY_SCALE_800: "bg-gray-scale-800",
      GRAY_SCALE_900: "bg-gray-scale-900",
      SECONDARY_PINK: "bg-secondary-pink",
      SECONDARY_ORANGE: "bg-secondary-orange",
      SECONDARY_YELLOW: "bg-secondary-yellow",
      SECONDARY_GREEN: "bg-secondary-green",
      SECONDARY_BLUE: "bg-secondary-blue",
      SECONDARY_PINK_BG: "bg-secondary-pink-bg",
      SECONDARY_ORANGE_BG: "bg-secondary-orange-bg",
      SECONDARY_YELLOW_BG: "bg-secondary-yellow-bg",
      SECONDARY_GREEN_BG: "bg-secondary-green-bg",
      SECONDARY_BLUE_BG: "bg-secondary-blue-bg",
    },
  },
  defaultVariants: {
    intent: "PRIMARY_01",
  },
});

export interface Props
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof paletteStyles> {}

const ColorPalette: FC<Props> = ({ intent, ...props }) => {
  return <div className={paletteStyles({ intent })} {...props} />;
};

export default ColorPalette;
