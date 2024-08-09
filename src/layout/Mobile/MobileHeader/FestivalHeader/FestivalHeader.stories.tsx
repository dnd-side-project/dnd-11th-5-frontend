import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import FestivalHeader from "./FestivalHeader";

const meta: Meta<typeof FestivalHeader> = {
  title: "Header/FestivalHeader",
  component: FestivalHeader,
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
      <FestivalHeader {...args} />
    </div>
  ),
  args: {},
};
