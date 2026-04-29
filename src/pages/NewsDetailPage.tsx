import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { getLocalizedNewsItem, newsItems } from '@/data/news';
import { formatDate, getCategoryColor } from '@/lib/utils';
import { ArrowLeft, Calendar, Download, FileText, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NewsDetailPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const sourceArticle = newsItems.find((item) => item.slug === slug);
  const article = sourceArticle ? getLocalizedNewsItem(sourceArticle, i18n.language) : undefined;
  const categoryLabels: Record<string, string> = {
    announcement: t('news.announcements'),
    update: t('news.updates'),
    article: t('news.articles'),
    event: t('news.events'),
  };

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
              {t('news.back_to_news')}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="custom" className={getCategoryColor(article.category)}>
                {categoryLabels[article.category] || article.category}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Calendar size={14} />
                {formatDate(article.date, i18n.language)}
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

            {article.pdfUrl && (
              <a
                href={article.pdfUrl}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-root-orange px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-root-orange/20 transition-colors hover:bg-root-orange/90"
              >
                <Download size={18} />
                {t('news.download_pdf')}
              </a>
            )}
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

          {article.pdfUrl && (
            <AnimateOnScroll delay={120}>
              <div className="mt-10 rounded-lg border border-root-border bg-root-bg p-5 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-root-orange/10 text-root-orange">
                      <FileText size={22} />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-root-dark">
                        {article.pdfLabel || 'Newsletter PDF'}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-root-muted">
                        {t('news.download_pdf_sub')}
                      </p>
                    </div>
                  </div>

                  <a
                    href={article.pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-root-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-root-orange/90"
                  >
                    <Download size={18} />
                    {t('news.download_pdf')}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          )}

          {/* Back to news */}
          <AnimateOnScroll delay={200}>
            <div className="mt-16 pt-8 border-t border-root-border">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-root-orange hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                {t('news.back_to_all_news')}
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </div>
  );
}
