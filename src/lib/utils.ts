export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string, locale = 'en-GB'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    update: 'bg-root-orange/10 text-root-orange',
    article: 'bg-root-yellow/10 text-root-dark',
    event: 'bg-root-dark/10 text-root-dark',
    announcement: 'bg-root-orange text-white',
  };
  return colors[category] || 'bg-root-border text-root-muted';
}

export function getDeliverableIcon(type: string): string {
  const icons: Record<string, string> = {
    report: '📊',
    toolkit: '🧰',
    guide: '📖',
    video: '🎬',
    publication: '📚',
    other: '📄',
  };
  return icons[type] || '📄';
}
