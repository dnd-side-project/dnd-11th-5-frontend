import type { Meta, StoryObj } from "@storybook/react";

import BasicTile from "./BasicTile";

const meta: Meta<typeof BasicTile> = {
  title: "List/BasicTile",
  component: BasicTile,
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

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <BasicTile {...args} />
    </div>
  ),
  args: {
    active: false,
    label: "👫👭 가족",
  },
};

export const Active: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <BasicTile {...args} />
    </div>
  ),
  args: {
    active: true,
    label: "👫👭 가족",
  },
};
