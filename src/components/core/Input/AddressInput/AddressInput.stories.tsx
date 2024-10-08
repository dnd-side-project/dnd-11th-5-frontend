import type { Meta, StoryObj } from "@storybook/react";

import AddressInput from "./AddressInput";

const meta: Meta<typeof AddressInput> = {
  title: "Core/Input/AddressInput",
  component: AddressInput,
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
      <AddressInput {...args} />
    </div>
  ),
  args: {
    label: "페스티벌 명",
    value: "",
    onChange: () => {},
  },
};
