import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import HomeHeader from "./HomeHeader";

const meta: Meta<typeof HomeHeader> = {
  title: "Header/HomeHeader",
  component: HomeHeader,
  parameters: {},

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <HomeHeader {...args} />
    </div>
  ),
  args: {},
};
