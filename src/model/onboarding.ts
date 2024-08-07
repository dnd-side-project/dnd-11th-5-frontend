export type MoodModel = {
  moodId: number;
  mood: string;
};

export type PriorityModel = {
  priorityId: number;
  priority: string;
};

export type CompanyModel = {
  companionTypeId: number;
  companionType: string;
};

export type CategoryModel = {
  categoryId: number;
  category: string;
};

export const MOODS = [
  {
    moodId: 1,
    mood: "낭만적인",
  },
  {
    moodId: 2,
    mood: "여유로운",
  },
  {
    moodId: 3,
    mood: "활기찬",
  },
  {
    moodId: 4,
    mood: "모험적인",
  },
  {
    moodId: 5,
    mood: "화려한",
  },
  {
    moodId: 6,
    mood: "예술적인",
  },
  {
    moodId: 7,
    mood: "힙한",
  },
  {
    moodId: 8,
    mood: "감성적인",
  },
  {
    moodId: 9,
    mood: "레트로한",
  },
  {
    moodId: 10,
    mood: "친근한",
  },
  {
    moodId: 11,
    mood: "색다른",
  },
  {
    moodId: 12,
    mood: "로맨틱한",
  },
  {
    moodId: 13,
    mood: "클래식한",
  },
  {
    moodId: 14,
    mood: "신비한",
  },
  {
    moodId: 15,
    mood: "전통적인",
  },
  {
    moodId: 16,
    mood: "재미있는",
  },
  {
    moodId: 17,
    mood: "감동이 있는",
  },
];

export const PRIORITIES = [
  {
    priorityId: 1,
    priority: "주제 관심사 일치",
  },
  {
    priorityId: 2,
    priority: "페스티벌 입장료",
  },
  {
    priorityId: 3,
    priority: "페스티벌 내 음식 가격",
  },
  {
    priorityId: 4,
    priority: "주요 프로그램",
  },
  {
    priorityId: 5,
    priority: "동행하는 사람",
  },
  {
    priorityId: 6,
    priority: "날짜",
  },
  {
    priorityId: 7,
    priority: "위치",
  },
  {
    priorityId: 8,
    priority: "포토스팟",
  },
];

export const COMPANIES = [
  {
    companionTypeId: 1,
    companionType: "가족",
  },
  {
    companionTypeId: 2,
    companionType: "친구",
  },
  {
    companionTypeId: 3,
    companionType: "직장 동료",
  },
  {
    companionTypeId: 4,
    companionType: "연인",
  },
  {
    companionTypeId: 5,
    companionType: "혼자",
  },
];

export const CATEGORIES: Array<CategoryModel> = [
  {
    categoryId: 1,
    category: "문화",
  },
  {
    categoryId: 2,
    category: "음악&댄스",
  },
  {
    categoryId: 3,
    category: "영화",
  },
  {
    categoryId: 4,
    category: "음식&술",
  },
  {
    categoryId: 5,
    category: "엑티비티",
  },
  {
    categoryId: 6,
    category: "미술",
  },
  {
    categoryId: 7,
    category: "역사",
  },
  {
    categoryId: 8,
    category: "자연",
  },
  {
    categoryId: 9,
    category: "반려동물",
  },
  {
    categoryId: 10,
    category: "야간",
  },
  {
    categoryId: 11,
    category: "불꽃축제",
  },
  {
    categoryId: 12,
    category: "이색축제",
  },
];

export type OnboardingModel = {
  categories: Array<CategoryModel>;
  moods: Array<MoodModel>;
  companies: Array<CompanyModel>;
  priorities: Array<PriorityModel>;
};
