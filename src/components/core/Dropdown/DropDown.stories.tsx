import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from ".";

const meta: Meta<typeof DropdownMenu> = {
  title: "Core/Dropdown",
  component: DropdownMenu,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    options: [
      {
        label: "수정하기",
        onClick: () => {},
      },
      {
        label: "삭제하기",
        onClick: () => {},
      },
    ],
  },
};
