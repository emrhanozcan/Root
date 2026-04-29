import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import DeliverableCard from '@/components/deliverables/DeliverableCard';
import { deliverables } from '@/data/deliverables';
import { useTranslation } from 'react-i18next';

export default function DeliverablesPage() {
  const { t } = useTranslation();
  usePageTitle(t('nav.Deliverables'));

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                {t('deliverables.hero_title')}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                {t('deliverables.hero_sub')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Deliverables Grid */}
      <section className="py-20 md:py-28 bg-root-bg">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title={t('deliverables.outputs_title')}
              subtitle={t('deliverables.outputs_sub')}
              centered
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {deliverables.map((deliverable, index) => (
              <AnimateOnScroll key={deliverable.id} delay={index * 80}>
                <DeliverableCard deliverable={deliverable} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Note */}
          <AnimateOnScroll delay={500}>
            <div className="mt-12 p-6 rounded-2xl bg-root-orange/5 border border-root-orange/15 text-center">
              <p className="text-sm text-root-muted">
                {t('deliverables.note')}{' '}
                <a href="/news" className="text-root-orange font-semibold hover:underline">
                  {t('deliverables.news_page')}
                </a>{' '}
                {t('deliverables.for_ann')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </div>
  );
}
