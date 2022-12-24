interface BlogPost {
  id: number | string;
  title: string;
  subtitle?: string;
  cover?: string;
  draft: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}
