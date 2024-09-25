import type { Meta, StoryObj } from "@storybook/react";

import LoginRequiredDialog from "./LoginRequiredDialog";

const meta: Meta<typeof LoginRequiredDialog> = {
  title: "Dialog/LoginRequiredDialog",
  component: LoginRequiredDialog,
  parameters: {},
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <LoginRequiredDialog {...args} />,
  args: {
    open: false,
  },
};
