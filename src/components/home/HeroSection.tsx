import { Link } from 'react-router-dom';
import { ArrowRight, Sprout } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-root-bg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/RootBackground.jpeg')" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-root-orange/5" />
        {/* Small circle */}
        <div className="absolute bottom-20 -left-16 w-[300px] h-[300px] rounded-full bg-root-yellow/5" />
        {/* Geometric dots pattern */}
        <div className="absolute top-1/4 right-1/4 grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-root-orange"
            />
          ))}
        </div>
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-root-border to-transparent" />
      </div>

      <Container className="relative z-10 pt-24 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-3 sm:py-2 rounded-2xl sm:rounded-full bg-root-orange/10 text-root-orange text-sm font-semibold mb-8 animate-fade-in border border-root-orange/20">
              <div className="flex items-center gap-2">
                <Sprout size={18} />
                <span>{t('hero.badge')}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-root-orange/30" />
              <span className="text-xs font-mono opacity-90">{siteConfig.projectNumber}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-root-dark leading-[1.05] mb-6 animate-fade-in-up font-heading">
              {t('hero.title1')}
              <br />
              {t('hero.title2')}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">{t('hero.title3')}</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-root-yellow/30 -z-0 rounded" />
              </span>
              <br />
              <span className="text-root-orange">{t('hero.title4')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-root-muted leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/about">
                <Button size="lg">
                  {t('hero.cta_discover')}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/news">
                <Button variant="outline" size="lg">
                  {t('hero.cta_news')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual Block */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Main visual card */}
              <div className="w-80 h-96 bg-gradient-to-br from-root-orange to-root-yellow rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-white text-center">
                <Sprout size={64} strokeWidth={1.5} className="mb-6 opacity-90" />
                <span className="text-6xl font-extrabold font-heading tracking-tighter mb-2">
                  {t('hero.card_title')}
                </span>
                <span className="text-sm font-medium text-white/80 leading-relaxed whitespace-pre-line">
                  {t('hero.card_subtitle').replace('\\n', '\n')}
                </span>
              </div>
              {/* Floating accent cards */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-root-dark rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-root-orange font-heading">6</span>
                <span className="text-xs text-white/60 ml-1">{t('hero.card_countries')}</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-20 bg-white rounded-2xl shadow-lg border border-root-border flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-root-dark font-heading">24</span>
                <span className="text-xs text-root-muted">{t('hero.card_months')}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
