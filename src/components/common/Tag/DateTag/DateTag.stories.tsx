import type { Meta, StoryObj } from "@storybook/react";

import DateTag from "./DateTag";

const meta: Meta<typeof DateTag> = {
  title: "Tag/DateTag",
  component: DateTag,
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

export const Date: Story = {
  args: {
    label: "D-2",
  },
};
