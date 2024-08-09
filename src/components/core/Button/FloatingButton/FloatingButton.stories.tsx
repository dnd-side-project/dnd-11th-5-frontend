import type { Meta, StoryObj } from "@storybook/react";

import FloatingButton from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Core/Button/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
