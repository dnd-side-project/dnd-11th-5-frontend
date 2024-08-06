import type { Meta, StoryObj } from "@storybook/react";

import BookingButton from "./BookingButton";

const meta: Meta<typeof BookingButton> = {
  title: "Core/Button/BookingButton",
  component: BookingButton,
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

export const BookingUnavailable: Story = {
  args: {
    scrabCount: 210,
    disabled: true,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const BookingAvailable: Story = {
  args: { scrabCount: 210, disabled: false },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const isScrabed: Story = {
  args: { scrabCount: 210, disabled: false, isScrabed: true },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};
