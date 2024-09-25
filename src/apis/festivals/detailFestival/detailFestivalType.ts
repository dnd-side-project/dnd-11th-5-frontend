export type Category = {
  categoryId: number;
  name: string;
  emoji: string;
};

export type Mood = {
  moodId: number;
  name: string;
};

export type Image = {
  imageId: number;
  imageUrl: string;
};

export type DetailFestivalResponse = {
  festivalId: number;
  name: string;
  sigungu: string;
  startDate: string;
  playtime: string;
  endDate: string;
  description: string;
  address: string;
  sido: string;
  tip: string;
  homepageUrl: string;
  instagramUrl: string;
  fee: string;
  ticketLink: string;
  latitude: number;
  longitude: number;
  bookmarkCount: number;
  isBookmarked?: boolean;
  categories: Category[];
  moods: Mood[];
  images: Image[];
};
