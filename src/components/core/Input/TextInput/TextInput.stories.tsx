import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Core/Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    maxlength: {
      control: {
        type: "number",
      },
    },
    currentLength: {
      control: {
        type: "number",
      },
    },
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
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <TextInput {...args} />
    </div>
  ),
  args: {
    maxlength: 30,
    currentLength: 3,
    label: "페스티벌 명",
    placeholder: "페스티벌 명을 입력해주세요.",
  },
};
