import { Link } from 'react-router-dom';
import type { NewsItem } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate, getCategoryColor } from '@/lib/utils';
import { ArrowRight, Calendar } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Card padding="none" className="overflow-hidden group">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-br from-root-dark to-root-dark-soft overflow-hidden">
        {item.coverImage ? (
          <img
            src={item.coverImage}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-root-orange/20 to-root-yellow/20">
            <span className="text-5xl font-extrabold text-root-orange/30 font-heading">
              ROOT
            </span>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="custom" className={getCategoryColor(item.category)}>
            {item.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs text-root-muted mb-2">
          <Calendar size={12} />
          {formatDate(item.date)}
        </div>

        <h3 className="text-lg font-bold text-root-dark mb-2 font-heading leading-snug group-hover:text-root-orange transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-root-muted leading-relaxed mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        <Link
          to={`/news/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-root-orange hover:gap-2.5 transition-all duration-200"
        >
          Read more
          <ArrowRight size={14} />
        </Link>
      </div>
    </Card>
  );
}
