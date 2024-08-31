import type { Meta, StoryObj } from "@storybook/react";

import TimeInput from "./TimeInput";

const meta: Meta<typeof TimeInput> = {
  title: "Core/Input/TimeInput",
  component: TimeInput,
  parameters: {
    controls: { include: ["label"] },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <TimeInput {...args} />
    </div>
  ),
  args: {
    label: "페스티벌 명",
    value: "",
    onChange: () => {},
  },
};
