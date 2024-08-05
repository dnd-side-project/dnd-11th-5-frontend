import type { Meta, StoryObj } from "@storybook/react";

import EmptyFestivalCard from "./EmptyFestivalCard";

const meta: Meta<typeof EmptyFestivalCard> = {
  title: "Card/EmptyFestivalCard",
  component: EmptyFestivalCard,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story: React.ComponentType) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
};
