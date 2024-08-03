import type { Meta, StoryObj } from "@storybook/react";

import SearchHistoryChip from "./SearchHistoryChip";

const meta: Meta<typeof SearchHistoryChip> = {
  title: "Chip/SearchHistoryChip",
  component: SearchHistoryChip,
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

export const SearchHistory: Story = {
  args: {
    label: "인천 락 페스티벌",
  },
};
