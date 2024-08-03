import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MobileSearchHeader from "./MobileSearchHeader";

const meta: Meta<typeof MobileSearchHeader> = {
  title: "Header/SearchHeader",
  component: MobileSearchHeader,
  parameters: {
    layout: "centered",
  },

  argTypes: {
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
      <MobileSearchHeader {...args} />
    </div>
  ),
  args: {
    label: "TEXT",
  },
};
