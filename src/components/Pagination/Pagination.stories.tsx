import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ServerPagination from "./ServerPagination";

const meta: Meta<typeof ServerPagination> = {
  title: "Pagination/Pagination",
  component: ServerPagination,
  parameters: {
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
        <ServerPagination {...args} totalPage={3} currentPath="/" />
      </div>
    );
  },
};
