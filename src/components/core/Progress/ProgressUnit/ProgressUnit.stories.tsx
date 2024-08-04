import type { Meta, StoryObj } from "@storybook/react";

import ProgressUnit from "./ProgressUnit";

const meta: Meta<typeof ProgressUnit> = {
  title: "Core/Progress/ProgressUnit",
  component: ProgressUnit,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="h-auto w-[100px]">
      <ProgressUnit {...args} />
    </div>
  ),
  args: {
    active: false,
  },
};
