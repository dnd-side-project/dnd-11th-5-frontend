import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

import EmptyFestivalCard from "./EmptyFestivalCard";

const meta: Meta<typeof EmptyFestivalCard> = {
  title: "Card/EmptyFestivalCard",
  component: EmptyFestivalCard,
  parameters: {},

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story: ComponentType) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
};
