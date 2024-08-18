import type { Meta, StoryObj } from "@storybook/react";

import RoundButton from "./RoundButton";

const meta: Meta<typeof RoundButton> = {
  title: "Core/Button/RoundButton",
  component: RoundButton,
  parameters: {},

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
  args: { label: "방문일지 기록하기" },
};
