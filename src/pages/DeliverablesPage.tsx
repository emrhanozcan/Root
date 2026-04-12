import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import DeliverableCard from '@/components/deliverables/DeliverableCard';
import { deliverables } from '@/data/deliverables';

export default function DeliverablesPage() {
  usePageTitle('Deliverables');

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                Project{' '}
                <span className="text-root-orange">Deliverables</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Explore the outputs and resources being developed through the ROOT project.
                All deliverables will be made openly available for download upon completion.
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
              title="Outputs & Resources"
              subtitle="Toolkits, reports, curricula, and multimedia resources developed through ROOT."
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
                📌 Deliverables are released progressively throughout the project duration.
                Check back regularly for updates or follow our{' '}
                <a href="/news" className="text-root-orange font-semibold hover:underline">
                  News page
                </a>{' '}
                for announcements.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </div>
  );
}
