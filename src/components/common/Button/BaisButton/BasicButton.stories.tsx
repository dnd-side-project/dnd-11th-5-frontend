import type { Meta, StoryObj } from "@storybook/react";

import BasicButton from "./BasicButton";

const meta: Meta<typeof BasicButton> = {
  title: "Button/BasicButton",
  component: BasicButton,
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

export const Default: Story = {
  args: {
    active: false,
    label: "다음 (0/2)",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Active: Story = {
  args: {
    active: true,
    label: "다음 (0/2)",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};
