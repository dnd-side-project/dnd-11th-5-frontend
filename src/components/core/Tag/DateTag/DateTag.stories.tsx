import type { Meta, StoryObj } from "@storybook/react";

import DateTag from "./DateTag";

const meta: Meta<typeof DateTag> = {
  title: "Core/Tag/DateTag",
  component: DateTag,
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

export const Date: Story = {
  args: {
    label: "D-2",
  },
};
