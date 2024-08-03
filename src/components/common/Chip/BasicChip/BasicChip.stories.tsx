import type { Meta, StoryObj } from "@storybook/react";

import BasicChip from "./BasicChip";

const meta: Meta<typeof BasicChip> = {
  title: "Chip/BasicChip",
  component: BasicChip,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    label: "Text",
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: "Text",
    active: true,
  },
};
