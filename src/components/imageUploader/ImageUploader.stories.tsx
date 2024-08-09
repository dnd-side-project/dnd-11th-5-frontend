import type { Meta, StoryObj } from "@storybook/react";

import ImageUploader from "./ImageUploader";

const meta: Meta<typeof ImageUploader> = {
  title: "ImageUploader",
  component: ImageUploader,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "대표이미지",
  },
  render: (args) => (
    <div style={{ width: "300px" }}>
      <ImageUploader value={[]} onChange={() => {}} label={args.label} />
    </div>
  ),
};
