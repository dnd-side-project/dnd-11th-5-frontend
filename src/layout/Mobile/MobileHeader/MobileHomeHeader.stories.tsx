import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MobileHomeHeader from "./MobileHomeHeader";

const meta: Meta<typeof MobileHomeHeader> = {
  title: "Header/HomeHeader",
  component: MobileHomeHeader,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <MobileHomeHeader {...args} />
    </div>
  ),
  args: {},
};
