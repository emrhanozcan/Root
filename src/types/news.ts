export type NewsCategory = 'update' | 'article' | 'event' | 'announcement';

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: NewsCategory;
  author?: string;
  featured?: boolean;
}
