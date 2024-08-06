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
export const FourPointFive: Story = {
  args: {
    rating: 4.5,
  },
};
