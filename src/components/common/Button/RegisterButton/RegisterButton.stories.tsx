import type { Meta, StoryObj } from "@storybook/react";

import RegisterButton from "./RegisterButton";

const meta: Meta<typeof RegisterButton> = {
  title: "Button/RegisterButton",
  component: RegisterButton,
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
    label: "페스티벌 등록하기",
  },
};
