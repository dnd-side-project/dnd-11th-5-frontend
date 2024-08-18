import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

import BasicButton from "./BasicButton";

const meta: Meta<typeof BasicButton> = {
  title: "Core/Button/BasicButton",
  component: BasicButton,
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

export const Default: Story = {
  args: {
    label: "다음 (0/2)",
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Active: Story = {
  args: {
    label: "다음 (0/2)",
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};
