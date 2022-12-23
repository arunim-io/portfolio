interface BlogPost {
  id: number | string;
  title: string;
  subtitle?: string;
  cover?: string;
  draft: boolean;
  types?: string[];
  createdAt: string;
  updatedAt: string;
}
