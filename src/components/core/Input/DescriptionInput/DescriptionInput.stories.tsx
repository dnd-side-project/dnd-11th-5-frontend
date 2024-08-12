import type { Meta, StoryObj } from "@storybook/react";

import DescriptionInput from "./DescriptionInput";

const meta: Meta<typeof DescriptionInput> = {
  title: "Core/Input/DescriptionInput",
  component: DescriptionInput,
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
      <DescriptionInput {...args} />
    </div>
  ),
  args: {
    maxlength: 300,
    currentLength: 0,
    label: "상세설명",
    placeholder: "상세설명을 입력해주세요.",
  },
};

export const Error: Story = {
  render: (args) => (
    <div className="flex w-[360px] items-center justify-center">
      <DescriptionInput {...args} />
    </div>
  ),
  args: {
    maxlength: 300,
    currentLength: 0,
    label: "상세설명",
    placeholder: "상세설명을 입력해주세요.",
    error: "제목 입력은 필수항목입니다",
  },
};
