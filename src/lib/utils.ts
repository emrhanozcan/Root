export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
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

export function getEventTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    meeting: 'Meeting',
    workshop: 'Workshop',
    training: 'Training Course',
    conference: 'Conference',
    'multiplier-event': 'Multiplier Event',
  };
  return labels[type] || type;
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
