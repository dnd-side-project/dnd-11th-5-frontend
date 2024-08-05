import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Core/Divider/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHistory: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <Divider {...args} />
    </div>
  ),
  args: {},
};
