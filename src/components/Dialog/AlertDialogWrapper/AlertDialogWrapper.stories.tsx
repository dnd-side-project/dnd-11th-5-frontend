import type { Meta, StoryObj } from "@storybook/react";

import AlertDialogWrapper from "./AlertDialogWrapper";

const meta: Meta<typeof AlertDialogWrapper> = {
  title: "Dialog/AlertDialogWrapper",
  component: AlertDialogWrapper,
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
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialogWrapper {...args}>
      <div className="text-center">This is Content</div>
    </AlertDialogWrapper>
  ),
  args: {
    open: false,
  },
};
