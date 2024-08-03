import type { Meta, StoryObj } from "@storybook/react";

import KakaoButton from "./KakaoButton";

const meta: Meta<typeof KakaoButton> = {
  title: "Core/Button/KakaoButton",
  component: KakaoButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "카카오 로그인",
  },
};
