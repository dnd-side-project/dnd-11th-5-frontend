import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MobileHeader from "./MobileHeader";

const meta: Meta<typeof MobileHeader> = {
  title: "Header/DefaultHeader",
  component: MobileHeader,
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
      <MobileHeader {...args} />
    </div>
  ),
  args: {
    label: "TEXT",
  },
};
