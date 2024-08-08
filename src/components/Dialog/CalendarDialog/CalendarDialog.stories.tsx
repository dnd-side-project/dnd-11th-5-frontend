import type { Meta, StoryObj } from "@storybook/react";

import CalendarDialog from "./CalendarDialog";

const meta: Meta<typeof CalendarDialog> = {
  title: "Dialog/CalendarDialog",
  component: CalendarDialog,
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
  render: (args) => <CalendarDialog {...args} />,
  args: {
    open: false,
  },
};
