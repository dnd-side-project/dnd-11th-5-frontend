export type TopKeywordParameter = {
  festivalId: number;
  size?: number;
};

export type TopKeyword = {
  keywordId: number;
  keyword: string;
  selectionCount: number;
};

export type TopKeywords = {
  keywords: TopKeyword[];
  totalCount: number;
};

export type TopKeywordResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: TopKeywords;
};
