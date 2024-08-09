import type { Meta, StoryObj } from "@storybook/react";

import ReviewDeleteConfirmDialog from "./ReviewDeleteConfirmDialog";

const meta: Meta<typeof ReviewDeleteConfirmDialog> = {
  title: "Dialog/ReviewDeleteConfirmDialog",
  component: ReviewDeleteConfirmDialog,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReviewDeleteConfirmDialog {...args} />,
  args: {
    open: false,
  },
};
