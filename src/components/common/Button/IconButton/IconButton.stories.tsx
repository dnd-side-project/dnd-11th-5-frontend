import type { Meta, StoryObj } from "@storybook/react";

import { CameraIcon } from "@/components/icons";

import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Button/IconButton",
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
      <IconButton {...args} />
    </div>
  ),
  args: {
    active: false,
    icon: <CameraIcon width={50} height={50} />,
  },
};
export const Active: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <IconButton {...args} />
    </div>
  ),
  args: {
    active: true,
    icon: <CameraIcon width={50} height={50} />,
  },
};
