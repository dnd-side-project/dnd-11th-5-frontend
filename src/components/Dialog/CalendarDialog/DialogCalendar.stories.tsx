import type { Meta, StoryObj } from "@storybook/react";

import DialogCalendar from "./DialogCalendar";

const meta: Meta<typeof DialogCalendar> = {
  title: "Dialog/DialogCalendar",
  component: DialogCalendar,
  parameters: {
    layout: "centered",
  },

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
  render: (args) => <DialogCalendar {...args} />,
  args: {
    open: false,
  },
};
