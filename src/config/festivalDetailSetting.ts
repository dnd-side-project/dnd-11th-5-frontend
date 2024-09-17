export type CategoryType = {
  category: string;
  code:
    | "MT1"
    | "CS2"
    | "SC4"
    | "AC5"
    | "PK6"
    | "OL7"
    | "SW8"
    | "CT1"
    | "AT4"
    | "AD5"
    | "FD6"
    | "CE7"
    | "HP8"
    | "PM9";
};

// ? https://apis.map.kakao.com/web/documentation/#CategoryCode
export const CATEGORIES: Array<CategoryType> = [
  { category: "대형마트", code: "MT1" },
  { category: "편의점", code: "CS2" },
  { category: "학교", code: "SC4" },
  { category: "학원", code: "AC5" },
  { category: "주차장", code: "PK6" },
  { category: "주유소", code: "OL7" },
  { category: "지하철역", code: "SW8" },
  { category: "문화시설", code: "CT1" },
  { category: "관광명소", code: "AT4" },
  { category: "숙박", code: "AD5" },
  { category: "음식점", code: "FD6" },
  { category: "카페", code: "CE7" },
  { category: "병원", code: "HP8" },
  { category: "약국", code: "PM9" },
];
