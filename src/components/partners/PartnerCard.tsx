import type { Partner } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { MapPin, ExternalLink, Crown } from 'lucide-react';

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="relative overflow-hidden">
      {partner.isCoordinator && (
        <div className="absolute top-4 right-4">
          <Badge variant="orange" className="flex items-center gap-1">
            <Crown size={12} />
            Coordinator
          </Badge>
        </div>
      )}

      {/* Logo placeholder */}
      <div className="w-16 h-16 rounded-xl bg-root-bg flex items-center justify-center mb-4 border border-root-border">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <span className="text-2xl font-bold text-root-orange font-heading">
            {partner.name.charAt(0)}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-root-dark mb-2 font-heading">
        {partner.name}
      </h3>

      <div className="flex items-center gap-1.5 text-sm text-root-muted mb-3">
        <MapPin size={14} className="text-root-orange" />
        <span>{partner.country}</span>
        <span className="ml-1 text-xs px-1.5 py-0.5 bg-root-bg rounded font-medium">
          {partner.countryCode}
        </span>
      </div>

      <p className="text-sm text-root-muted leading-relaxed mb-4">
        {partner.description}
      </p>

      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-root-orange hover:text-root-orange-light transition-colors"
        >
          Visit website
          <ExternalLink size={14} />
        </a>
      )}
    </Card>
  );
}
