import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

import BookingButton from "./BookingButton";

const meta: Meta<typeof BookingButton> = {
  title: "Core/Button/BookingButton",
  component: BookingButton,
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

export const BookingUnavailable: Story = {
  args: {},
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const BookingAvailable: Story = {
  args: {},
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const isScrabed: Story = {
  args: {},
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};
