import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

import ResetButton from "./ResetButton";

const meta: Meta<typeof ResetButton> = {
  title: "Core/Button/ResetButton",
  component: ResetButton,
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Available: Story = {
  args: { disabled: false },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};
