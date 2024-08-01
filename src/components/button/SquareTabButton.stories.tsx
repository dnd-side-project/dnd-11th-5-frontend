import type { Meta, StoryObj } from "@storybook/react";

import SquareTabButton from "./SquareTabButton";

const meta: Meta<typeof SquareTabButton> = {
  title: "SquareTabButton",
  component: SquareTabButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Typographys: Story = {
  args: {
    active: false,
    label: "Text",
  },
};
