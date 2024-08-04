import type { Meta, StoryObj } from "@storybook/react";

import ProgressCircle from "./ProgressCircle";

const meta: Meta<typeof ProgressCircle> = {
  title: "Core/Progress/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex h-[400px] w-[600px] items-center justify-center ">
      <ProgressCircle {...args} />
    </div>
  ),
};
