import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import EventCard from '@/components/events/EventCard';
import { events } from '@/data/events';
import { useTranslation } from 'react-i18next';

export default function EventsPage() {
  const { t } = useTranslation();
  usePageTitle(t('nav.Events'));

  const upcoming = events.filter((e) => e.status === 'upcoming' || e.status === 'ongoing');
  const past = events.filter((e) => e.status === 'past');

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                {t('events.hero_title')}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                {t('events.hero_sub')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <section className="py-20 md:py-28 bg-root-bg">
          <Container>
            <AnimateOnScroll>
              <SectionHeading
                title={t('events.upcoming')}
                subtitle=""
              />
            </AnimateOnScroll>

            <div className="space-y-6">
              {upcoming.map((event, index) => (
                <AnimateOnScroll key={event.id} delay={index * 100}>
                  <EventCard event={event} />
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Past Events */}
      {past.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <AnimateOnScroll>
              <SectionHeading
                title={t('events.past')}
                subtitle=""
              />
            </AnimateOnScroll>

            <div className="space-y-6">
              {past.map((event, index) => (
                <AnimateOnScroll key={event.id} delay={index * 100}>
                  <EventCard event={event} />
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
