export type NewsCategory = 'update' | 'article' | 'event' | 'announcement';
export type NewsLanguage = 'en' | 'tr' | 'sr' | 'es' | 'ar';

export interface NewsTranslation {
  title: string;
  excerpt: string;
  content: string;
  pdfLabel?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: NewsCategory;
  pdfUrl?: string;
  pdfLabel?: string;
  translations?: Partial<Record<NewsLanguage, NewsTranslation>>;
  author?: string;
  featured?: boolean;
}
