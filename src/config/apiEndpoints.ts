const FIESTA_ENDPOINTS = {
  users: {
    profile: "users/profile",
    bookmarks: "users/bookmarks",
    badges: "users/badges",
    onboarding_info: "users/onboarding-info",
    reissue: "users/reissue",
    logout: "users/logout",
    unlink: "users/unlink",
    login: "users/oauth/login",
    me: "users/me",
  },
  festivals: {
    recommend: "festivals/recommend",
    priorities: "festivals/priorities",
    companions: "festivals/companions",
    categories: "festivals/categories",
    moods: "festivals/moods",
    mostlike: "festivals/mostlike",
    thisWeek: "festivals/thisweek",
    filter: "festivals/filter",
    base: "festivals",
    monthly: "festivals/monthly",
    daily: "festivals/daily",
    detail: (festivalId: string) => `festivals/${festivalId}`,
    trending: "festivals/trending",
    search: "festivals/search",
    bookmark: (festivalId: number) => `festivals/${festivalId}/bookmark`,
  },
  admin: {
    festivals: "admin/festivals",
    festivalDetail: (festivalId: string) => `admin/festivals/${festivalId}`,
  },
  global: {
    keywords: "global/keywords",
  },
  reviews: {
    topKeywords: "reviews/keywords/top",
    base: "reviews",
    detail: (reviewId: string | number) => `reviews/${reviewId}`,
    like: (reviewId: string | number) => `reviews/${reviewId}/like`,
    mostlike: "reviews/mostlike",
    keywords: "reviews/keywords",
    report: (reviewId: string) => `reviews/${reviewId}/report`,
  },
  logs: {
    userLogs: (userId: string) => `users/${userId}/logs`,
    base: "logs",
    detail: (logId: string) => `logs/${logId}`,
    keywords: "logs/keywords",
  },
};

export default FIESTA_ENDPOINTS;
