import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { newsItems } from '@/data/news';
import { formatDate, getCategoryColor } from '@/lib/utils';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsItems.find((item) => item.slug === slug);

  usePageTitle(article?.title || 'Article Not Found');

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-16 md:py-24">
        <Container size="narrow">
          <AnimateOnScroll>
            {/* Back link */}
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-root-orange transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to News
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="custom" className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Calendar size={14} />
                {formatDate(article.date)}
              </span>
              {article.author && (
                <span className="flex items-center gap-1.5 text-sm text-white/40">
                  <User size={14} />
                  {article.author}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              {article.title}
            </h1>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Cover Image */}
      {article.coverImage && (
        <section className="bg-white">
          <Container size="narrow">
            <div className="-mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="narrow">
          <AnimateOnScroll>
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-root-dark prose-headings:font-bold
                prose-p:text-root-muted prose-p:leading-relaxed
                prose-a:text-root-orange prose-a:no-underline hover:prose-a:underline
                prose-strong:text-root-dark
                prose-li:text-root-muted
                prose-ul:list-disc prose-ol:list-decimal
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimateOnScroll>

          {/* Back to news */}
          <AnimateOnScroll delay={200}>
            <div className="mt-16 pt-8 border-t border-root-border">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-root-orange hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                Back to all news
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </div>
  );
}
