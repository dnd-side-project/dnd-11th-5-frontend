import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Core/Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHistory: Story = {
  args: {},
};
