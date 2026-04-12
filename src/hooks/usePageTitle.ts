import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    const base = 'ROOT – Rural Opportunities and Outreach for Tomorrow';
    document.title = title ? `${title} | ${base}` : base;
    return () => {
      document.title = base;
    };
  }, [title]);
}
