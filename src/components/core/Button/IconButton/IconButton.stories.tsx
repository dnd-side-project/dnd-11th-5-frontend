import type { Meta, StoryObj } from "@storybook/react";

import { CameraIcon } from "@/components/icons";

import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Core/Button/IconButton",
  component: IconButton,
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
    <div className="w-[360px]">
      <IconButton {...args}>
        <CameraIcon width={50} height={50} />
      </IconButton>
    </div>
  ),
  args: {
    active: false,
  },
};
export const Active: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <IconButton {...args}>
        <CameraIcon width={50} height={50} />
      </IconButton>
    </div>
  ),
  args: {
    active: true,
  },
};
