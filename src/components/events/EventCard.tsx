import type { Event } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate, getEventTypeLabel } from '@/lib/utils';
import { MapPin, Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const statusStyles = {
    upcoming: 'bg-root-orange text-white',
    ongoing: 'bg-root-yellow text-root-dark',
    past: 'bg-root-dark/10 text-root-muted',
  };

  return (
    <Card className="flex flex-col sm:flex-row gap-5 overflow-hidden">
      {/* Date Block */}
      <div className="flex-shrink-0 w-full sm:w-24 h-24 rounded-xl bg-root-bg flex flex-col items-center justify-center border border-root-border">
        <span className="text-3xl font-extrabold text-root-orange font-heading leading-none">
          {new Date(event.date).getDate()}
        </span>
        <span className="text-xs font-medium text-root-muted uppercase tracking-wider">
          {new Date(event.date).toLocaleDateString('en-GB', { month: 'short' })}
        </span>
        <span className="text-xs text-root-muted">
          {new Date(event.date).getFullYear()}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="custom" className={statusStyles[event.status]}>
            {event.status}
          </Badge>
          <Badge variant="dark">
            {getEventTypeLabel(event.type)}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-root-dark mb-2 font-heading">
          {event.title}
        </h3>

        <p className="text-sm text-root-muted leading-relaxed mb-3">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-root-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-root-orange" />
            {event.location}, {event.country}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-root-orange" />
            {formatDate(event.date)}
          </span>
          {event.endDate && (
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-root-orange" />
              Until {formatDate(event.endDate)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
