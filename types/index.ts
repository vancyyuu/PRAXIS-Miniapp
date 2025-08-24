// types/index.ts
export interface Badge {
  name: string;
  imageUrl: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  badges: Badge[]; // Now uses the centralized Badge interface
  fullProfileUrl: string;
}