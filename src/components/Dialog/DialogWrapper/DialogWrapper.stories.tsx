import type { Meta, StoryObj } from "@storybook/react";

import DialogWrapper from "./DialogWrapper";

const meta: Meta<typeof DialogWrapper> = {
  title: "Dialog/DialogWrapper",
  component: DialogWrapper,
  parameters: {
    layout: "centered",
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
  render: (args) => (
    <DialogWrapper {...args}>
      <main>This is Content</main>
    </DialogWrapper>
  ),
  args: {
    open: false,
  },
};
