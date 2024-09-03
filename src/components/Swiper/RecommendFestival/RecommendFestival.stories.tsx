import type { Meta, StoryObj } from "@storybook/react";

import RecommendFestivalFallbackUI from "../../../app/(home)/_components/FestivalRecommend/RecommendFestivalFallbackUI";
import RecoomendFestivalList from "./RecommendFestival";

const meta: Meta<typeof RecoomendFestivalList> = {
  title: "Swiper/RecommendFestival",
  component: RecoomendFestivalList,
  parameters: {
    controls: { include: [] },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialData: {
      festivals: [
        {
          festivalId: 64,
          name: "dfdfd",
          sido: "충청남도",
          sigungu: "천안시 동남구",
          thumbnailImage:
            "https://fiesta-image.s3.ap-northeast-2.amazonaws.com/festival/6869294f-f5ef-4891-a3ca-60fac98e2873my-festival-type%20%282%29.png",
          startDate: "2024-08-29",
          endDate: "2024-08-31",
        },
        {
          festivalId: 43,
          name: "광주 버스킹 월드컵",
          sido: "광주",
          sigungu: "동구",
          thumbnailImage:
            "https://fiesta-image.s3.ap-northeast-2.amazonaws.com/festival/fd48e6eb-5ff6-457d-affd-d3cc659042503112130_image2_1.jpeg",
          startDate: "2024-10-02",
          endDate: "2024-10-06",
        },
        {
          festivalId: 44,
          name: "광주 추억의 충장축제",
          sido: "광주",
          sigungu: "동구",
          thumbnailImage:
            "https://fiesta-image.s3.ap-northeast-2.amazonaws.com/festival/00d385e7-5048-4265-abaf-8fd001ecff7711111111.jpg",
          startDate: "2024-10-02",
          endDate: "2024-10-06",
        },
        {
          festivalId: 45,
          name: "광주프린지페스티벌",
          sido: "광주",
          sigungu: "북구",
          thumbnailImage:
            "https://fiesta-image.s3.ap-northeast-2.amazonaws.com/festival/f54a1b88-0873-4696-b3a0-ca6e15b949ae3343042_image2_1.jpg",
          startDate: "2024-09-21",
          endDate: "2024-09-29",
        },
        {
          festivalId: 54,
          name: "국가유산 미디어아트 고흥분청사기요지",
          sido: "전라남도",
          sigungu: "고흥군",
          thumbnailImage:
            "https://fiesta-image.s3.ap-northeast-2.amazonaws.com/festival/d52dee4c-edbc-46c0-8236-b801411cad0d3340080_image2_1.jpg",
          startDate: "2024-09-13",
          endDate: "2024-10-06",
        },
      ],
      userType: {
        userTypeId: 2,
        name: "파티피플러",
      },
    },
  },
  render: (args) => (
    <div className="h-[300px] w-[400px]">
      <RecoomendFestivalList initialData={args.initialData} />
    </div>
  ),
};
export const NoSession: Story = {
  args: {},
  render: (args) => (
    <div className="h-[300px] w-[400px]">
      <RecommendFestivalFallbackUI />
    </div>
  ),
};
