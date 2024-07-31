import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const typographyStyles = cva(`w-full font-pretendard`, {
  variants: {
    intent: {
      LABEL_SEMIBOLD: "text-label-semi",
      TITLE_BOLD: "text-title-bold",
      SUBTITLE_BOLD: "text-subtitle-bold",
      SUBTITLE_SEMIBOLD: "text-subtitle-semi",
      SUBTITLE_MEDIUM: "text-subtitle-medium",
      BODY1_MEDIUM: "text-body1-medium",
      BODY1_REGULAR: "text-body1-regular",
      BODY2_MEDIUM: "text-body2-medium",
      BODY2_REGULAR: "text-body2-regular",
      BODY2_SEMIBOLD: "text-body2-semi",
      BODY2_BOLD: "text-body2-bold",
      CAPTION1_REGULAR: "text-caption1-regular",
      CAPTION1_MEDIUM: "text-caption1-medium",
      CAPTION1_MEDIUM_NAV: "text-caption1-medium-nav",
      CAPTION1_MEDIUM_SMALL: "text-caption1-medium-small",
      CAPTION2_REGULAR: "text-caption2-regular",
      CAPTION2_MEDIUM: "text-caption2-medium",
      BUTTON1_SEMIBOLD: "text-button1-semi",
      BUTTON2_MEDIUM: "text-button2-medium",
      BUTTON2_REGULAR: "text-button2-regular",
    },
  },
  defaultVariants: {
    intent: "LABEL_SEMIBOLD",
  },
});

export interface Props
  extends React.HTMLProps<HTMLParagraphElement>,
    VariantProps<typeof typographyStyles> {
  label: string;
}

const Typography: FC<Props> = ({ intent, label, ...props }) => {
  return (
    <p className={typographyStyles({ intent })} {...props}>
      {label}
    </p>
  );
};

export default Typography;
