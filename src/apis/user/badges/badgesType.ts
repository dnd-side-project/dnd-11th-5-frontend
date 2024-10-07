export type Badge = {
  badgeId: number;
  badgeName: string;
  description: string;
  imageUrl: string;
  isAquired: boolean;
};

export type BadgesResponse = Array<Badge>;
