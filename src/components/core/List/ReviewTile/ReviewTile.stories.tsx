import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ReviewTile from "./ReviewTile";

const meta: Meta<typeof ReviewTile> = {
  title: "List/ReviewTile",
  component: ReviewTile,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <ReviewTile {...args} />
    </div>
  ),
  args: {
    festivalReview: {
      src: "/images/festivalReview.png",
      title: "서울 치맥 페스티벌",
      content:
        "완전 더워요... 선크림 필수.. 빨간 트럭에서파는 치킨 추천합니당 바삭하고 맛있어요. 바삭하고 맛있어요. 바삭하고 맛있어요.",
      duration: "8월 1일 ~ 8월 4일",
      rating: 4,
      keywords: ["✨쾌적해요", "✨쾌적해요"],
    },
  },
};

export const WithOutPhoto: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <ReviewTile {...args} />
    </div>
  ),
  args: {
    festivalReview: {
      title: "서울 치맥 페스티벌",
      content:
        "완전 더워요... 선크림 필수.. 빨간 트럭에서파는 치킨 추천합니당 바삭하고 맛있어요. 바삭하고 맛있어요. 바삭하고 맛있어요.",
      duration: "8월 1일 ~ 8월 4일",
      rating: 4,
      keywords: ["✨쾌적해요", "✨쾌적해요"],
    },
  },
};
