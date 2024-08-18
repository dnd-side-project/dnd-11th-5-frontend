import type { Meta, StoryObj } from "@storybook/react";

import FestivalPostCompleteDialog from "./FestivalPostCompleteDialog";

const meta: Meta<typeof FestivalPostCompleteDialog> = {
  title: "Dialog/FestivalPostCompleteDialog",
  component: FestivalPostCompleteDialog,
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
  render: (args) => <FestivalPostCompleteDialog {...args} />,
  args: {
    open: false,
  },
};
