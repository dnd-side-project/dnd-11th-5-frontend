import type { Meta, StoryObj } from "@storybook/react";

import SearchHistoryChip from "./SearchHistoryChip";

const meta: Meta<typeof SearchHistoryChip> = {
  title: "Core/Chip/SearchHistoryChip",
  component: SearchHistoryChip,
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

export const SearchHistory: Story = {
  args: {
    label: "인천 락 페스티벌",
  },
};
