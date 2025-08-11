export interface FactCheck {
  id: string;
  title: string;
  summary: string;
  verdict: 'true' | 'false' | 'misleading' | 'unproven' | 'confirmed';
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  views: number;
  featured: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  students: number;
  rating: number;
  instructor: string;
}

export interface NewsSubmission {
  id: string;
  title: string;
  description: string;
  source: string;
  submitterName: string;
  submitterEmail: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'reviewing' | 'completed';
  submittedAt: string;
}

export interface FilterOptions {
  category: string;
  verdict: string;
  dateRange: string;
  sortBy: string;
}