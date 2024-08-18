import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Pagination/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    controls: { include: ["currentPage"] },
  },
  argTypes: {
    currentPage: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 3,
  },
  render: (args) => {
    return (
      <div className="flex h-auto w-[500px] justify-center">
        <Pagination {...args} totalPage={3} currentPath="/" />
      </div>
    );
  },
};
