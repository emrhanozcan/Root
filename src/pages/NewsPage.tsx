import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import NewsCard from '@/components/news/NewsCard';
import { newsItems } from '@/data/news';
import type { NewsCategory } from '@/types';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const categoriesKeys: { key: string; value: NewsCategory | 'all' }[] = [
  { key: 'all', value: 'all' },
  { key: 'announcements', value: 'announcement' },
  { key: 'updates', value: 'update' },
  { key: 'articles', value: 'article' },
  { key: 'events', value: 'event' },
];

export default function NewsPage() {
  const { t } = useTranslation();
  usePageTitle(t('nav.News'));
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                {t('news.hero_title')}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                {t('news.hero_sub')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* News Listing */}
      <section className="py-20 md:py-28 bg-root-bg">
        <Container>
          {/* Category Filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categoriesKeys.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === cat.value
                      ? 'bg-root-orange text-white shadow-md'
                      : 'bg-white text-root-dark border border-root-border hover:bg-root-bg'
                  )}
                >
                  {t(`news.${cat.key}`)}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          {sorted.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sorted.map((item, index) => (
                <AnimateOnScroll key={item.slug} delay={index * 80}>
                  <NewsCard item={item} />
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-root-muted text-lg">
                {t('news.no_items')}
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
