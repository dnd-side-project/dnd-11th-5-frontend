import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import DefaultHeader from "./DefaultHeader";

const meta: Meta<typeof DefaultHeader> = {
  title: "Header/DefaultHeader",
  component: DefaultHeader,
  parameters: {},

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
      <DefaultHeader {...args} />
    </div>
  ),
  args: {
    label: "Text",
  },
};
