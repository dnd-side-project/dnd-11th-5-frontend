import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ReviewTile from "./ReviewTile";

const meta: Meta<typeof ReviewTile> = {
  title: "List/ReviewTile",
  component: ReviewTile,
  parameters: {},
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
    review: {
      reviewId: 6532,
      festivalId: 123,
      festivalName: "2024 팔레트 뮤직 페스티벌",
      content: "음악 듣기 정말 좋은 페스티벌인 것 같아요. 진짜 힐링 그 자체~",
      rating: 4,
      images: {
        imageId: 145156,
        imageUrl: "/images/festivalReview.png",
      },
      keywords: [
        {
          keywordId: 12,
          keyword: "✨쾌적해요",
        },
        {
          keywordId: 12,
          keyword: "✨쾌적해요",
        },
      ],
    },
  },
};

export const NoPhoto: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <ReviewTile {...args} />
    </div>
  ),
  args: {
    review: {
      reviewId: 6532,
      festivalId: 123,
      festivalName: "2024 팔레트 뮤직 페스티벌",
      content:
        "완전 더워요... 그냥 더워 죽어요... ㅜㅜ 시원하게 입고가세요... 물이랑 손풍기 필수",
      rating: 4,
      keywords: [
        {
          keywordId: 12,
          keyword: "✨쾌적해요",
        },
        {
          keywordId: 12,
          keyword: "✨쾌적해요",
        },
      ],
    },
  },
};
