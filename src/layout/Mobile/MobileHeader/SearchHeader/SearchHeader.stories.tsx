import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import SearchHeader from "./SearchHeader";

const meta: Meta<typeof SearchHeader> = {
  title: "Header/SearchHeader",
  component: SearchHeader,
  parameters: {},

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <SearchHeader {...args} />
    </div>
  ),
  args: {},
};
