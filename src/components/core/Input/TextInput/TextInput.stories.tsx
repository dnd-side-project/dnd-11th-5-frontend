import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Core/Input/TextInput",
  component: TextInput,
  parameters: {},
  argTypes: {
    maxLength: {
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
    error: {
      control: {
        type: "text",
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <TextInput {...args} />
    </div>
  ),
  args: {
    maxLength: 30,
    currentLength: 3,
    label: "페스티벌 명",
    placeholder: "페스티벌 명을 입력해주세요.",
  },
};

export const Error: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <TextInput {...args} />
    </div>
  ),
  args: {
    maxLength: 30,
    currentLength: 0,
    label: "페스티벌 명",
    placeholder: "페스티벌 명을 입력해주세요.",
    error: "제목 입력은 필수항목입니다",
  },
};
