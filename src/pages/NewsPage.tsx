import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import NewsCard from '@/components/news/NewsCard';
import { newsItems } from '@/data/news';
import type { NewsCategory } from '@/types';
import { cn } from '@/lib/utils';

const categories: { label: string; value: NewsCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Announcements', value: 'announcement' },
  { label: 'Updates', value: 'update' },
  { label: 'Articles', value: 'article' },
  { label: 'Events', value: 'event' },
];

export default function NewsPage() {
  usePageTitle('News');
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
                News &{' '}
                <span className="text-root-orange">Updates</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Stay informed about the latest developments, articles, and announcements
                from the ROOT project consortium.
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
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                    activeCategory === cat.value
                      ? 'bg-root-orange text-white shadow-md'
                      : 'bg-white text-root-muted hover:text-root-dark border border-root-border hover:border-root-orange/30'
                  )}
                >
                  {cat.label}
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
                No news items found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
