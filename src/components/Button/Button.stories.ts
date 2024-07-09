import { Button, ButtonProps } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    className: "bg-blue-400 text-white font-bold py-2 px-4 rounded",
    children: "Primary",
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = await canvas.getByRole("button", {});
  //   await userEvent.click(button);
  // },
};

export const Secondary: Story = {
  args: {
    className:
      "bg-red-100 text-red-500 font-bold py-2 px-4 rounded hover:scale-115 duration-300",
    children: "Secondary",
  },
};

export const Large: Story = {
  args: {
    className: "bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg",
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    className: "bg-yellow-200 text-yellow-800 font-bold py-1 px-2 rounded-sm",
    children: "Small",
  },
};
