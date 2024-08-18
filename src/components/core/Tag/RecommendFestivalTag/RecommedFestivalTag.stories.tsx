import type { Meta, StoryObj } from "@storybook/react";

import RecommedFestivalTag from "./RecommedFestivalTag";

const meta: Meta<typeof RecommedFestivalTag> = {
  title: "Core/Tag/RecommedFestivalTag",
  component: RecommedFestivalTag,
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

export const RecommedFestival: Story = {
  args: {
    label: "오디가님을 위한 추천 페스티벌",
  },
};
