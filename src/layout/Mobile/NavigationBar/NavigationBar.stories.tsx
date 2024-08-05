import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import MobileLayout from "../MobileLayout";
import NavigationBar from "./NavigationBar";

const meta: Meta<typeof NavigationBar> = {
  title: "NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MobileLayout className="mb-[60px]">
      <div className="h-[100px] w-full bg-blue-100"></div>
      <NavigationBar />
    </MobileLayout>
  ),
  args: {},
};
