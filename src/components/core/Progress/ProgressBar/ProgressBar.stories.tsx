import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Core/Progress/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    totalSteps: {
      control: {
        type: "number",
      },
    },
    currentStep: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FourSteps: Story = {
  render: (args) => (
    <div className="flex h-[200px] w-[100px] items-center justify-center gap-[4px]">
      <ProgressBar {...args} />
    </div>
  ),
  args: {
    totalSteps: 4,
    currentStep: 2,
  },
};

export const TwoSteps: Story = {
  render: (args) => (
    <div className="flex h-[200px] w-[100px] items-center justify-center gap-[4px]">
      <ProgressBar {...args} />
    </div>
  ),
  args: {
    totalSteps: 2,
    currentStep: 1,
  },
};
