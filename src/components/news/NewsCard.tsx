import { Link } from 'react-router-dom';
import type { NewsItem } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getLocalizedNewsItem } from '@/data/news';
import { formatDate, getCategoryColor } from '@/lib/utils';
import { ArrowRight, Calendar, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const { t, i18n } = useTranslation();
  const localizedItem = getLocalizedNewsItem(item, i18n.language);
  const categoryLabels: Record<string, string> = {
    announcement: t('news.announcements'),
    update: t('news.updates'),
    article: t('news.articles'),
    event: t('news.events'),
  };

  return (
    <Card padding="none" className="overflow-hidden group">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-br from-root-dark to-root-dark-soft overflow-hidden">
        {localizedItem.coverImage ? (
          <img
            src={localizedItem.coverImage}
            alt={localizedItem.title}
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
          <Badge variant="custom" className={getCategoryColor(localizedItem.category)}>
            {categoryLabels[localizedItem.category] || localizedItem.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs text-root-muted mb-2">
          <Calendar size={12} />
          {formatDate(localizedItem.date, i18n.language)}
        </div>

        <h3 className="text-lg font-bold text-root-dark mb-2 font-heading leading-snug group-hover:text-root-orange transition-colors">
          {localizedItem.title}
        </h3>

        <p className="text-sm text-root-muted leading-relaxed mb-4 line-clamp-3">
          {localizedItem.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={`/news/${localizedItem.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-root-orange hover:gap-2.5 transition-all duration-200"
          >
            {t('news.read_more')}
            <ArrowRight size={14} />
          </Link>

          {localizedItem.pdfUrl && (
            <a
              href={localizedItem.pdfUrl}
              download
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-root-dark hover:text-root-orange transition-colors"
            >
              <Download size={14} />
              PDF
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
