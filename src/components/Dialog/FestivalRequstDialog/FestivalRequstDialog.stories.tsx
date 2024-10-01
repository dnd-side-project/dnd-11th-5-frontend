import type { Meta, StoryObj } from "@storybook/react";

import FestivalRequstDialog from "./FestivalRequstDialog";

const meta: Meta<typeof FestivalRequstDialog> = {
  title: "Dialog/FestivalRequstDialog",
  component: FestivalRequstDialog,
  parameters: {
    controls: { include: ["placeholder", "label", "open"] },
  },
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FestivalRequstDialog {...args} />,
  args: {
    open: false,
    title: "라벨",
    placeholder: "컨텐츠를 적어주세요.",
  },
};
