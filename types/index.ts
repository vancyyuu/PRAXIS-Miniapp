// types/index.ts
export interface Badge {
  name: string;
  imageUrl: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  badges: Badge[];
  fullProfileUrl: string;
}

export interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
  requiredSkills: string[];
}

export type ActiveTabType = 'home' | 'my-profile' | 'search' | 'jobs' | 'profile' | 'assessment' | 'assessment-problem' | 'job-details' | 'tracker' | 'wallet';