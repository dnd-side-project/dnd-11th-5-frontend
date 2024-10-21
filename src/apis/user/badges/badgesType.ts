export type Badge = {
  badgeId: number;
  badgeName: string;
  description: string;
  imageUrl: string;
  isAcquired: boolean;
};

export type BadgesResponse = Array<Badge>;
