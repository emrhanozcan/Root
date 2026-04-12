import type { Deliverable } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getDeliverableIcon } from '@/lib/utils';
import { Download, Clock } from 'lucide-react';

interface DeliverableCardProps {
  deliverable: Deliverable;
}

export default function DeliverableCard({ deliverable }: DeliverableCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl" role="img" aria-label={deliverable.type}>
          {getDeliverableIcon(deliverable.type)}
        </span>
        <Badge
          variant={deliverable.status === 'available' ? 'orange' : 'dark'}
        >
          {deliverable.status === 'available' ? 'Available' : 'Coming Soon'}
        </Badge>
      </div>

      <h3 className="text-lg font-bold text-root-dark mb-2 font-heading">
        {deliverable.title}
      </h3>

      <p className="text-sm text-root-muted leading-relaxed mb-4 flex-1">
        {deliverable.description}
      </p>

      {deliverable.relatedActivity && (
        <p className="text-xs text-root-muted/70 mb-4 italic">
          {deliverable.relatedActivity}
        </p>
      )}

      <div className="mt-auto">
        {deliverable.status === 'available' ? (
          <a href={deliverable.downloadUrl || '#'} download>
            <Button size="sm" variant="primary" className="w-full">
              <Download size={16} />
              Download
            </Button>
          </a>
        ) : (
          <Button size="sm" variant="outline" className="w-full" disabled>
            <Clock size={16} />
            Coming Soon
          </Button>
        )}
      </div>
    </Card>
  );
}
