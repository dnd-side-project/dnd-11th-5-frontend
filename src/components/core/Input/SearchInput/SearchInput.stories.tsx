import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Core/Input/SearchInput",
  component: SearchInput,
  parameters: {},

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHistory: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <SearchInput {...args} />
    </div>
  ),
  args: {},
};
