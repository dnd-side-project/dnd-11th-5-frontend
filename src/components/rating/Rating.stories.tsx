import type { Meta, StoryObj } from "@storybook/react";

import Ratings from "./Ratings";

const meta: Meta<typeof Ratings> = {
  title: "Ratings",
  component: Ratings,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    rating: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FIVE: Story = {
  args: {
    rating: 5,
  },
};
export const FOUR: Story = {
  args: {
    rating: 4,
  },
};
export const THREE: Story = {
  args: {
    rating: 3,
  },
};
export const TWO: Story = {
  args: {
    rating: 2,
  },
};
export const ONE: Story = {
  args: {
    rating: 1,
  },
};
