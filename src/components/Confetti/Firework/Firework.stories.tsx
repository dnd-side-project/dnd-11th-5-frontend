import type { Meta, StoryObj } from "@storybook/react";

import FireworkAnimation from "./";

const meta: Meta<typeof FireworkAnimation> = {
  title: "Confetti/FireworkAnimation",
  component: FireworkAnimation,
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
