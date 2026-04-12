import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PartnerCard from '@/components/partners/PartnerCard';
import { partners } from '@/data/partners';

export default function PartnersPage() {
  usePageTitle('Partners');

  const coordinator = partners.find((p) => p.isCoordinator);
  const otherPartners = partners.filter((p) => !p.isCoordinator);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                Our <span className="text-root-orange">Partners</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                ROOT brings together six organizations from different countries, each bringing
                unique expertise and local knowledge to create lasting change for rural youth.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Partner Map / Overview */}
      <section className="py-16 bg-root-bg">
        <Container>
          <AnimateOnScroll>
            <div className="text-center mb-4">
              <p className="text-root-muted text-lg">
                <span className="font-bold text-root-dark">{partners.length} organizations</span>{' '}
                from{' '}
                <span className="font-bold text-root-orange">
                  {new Set(partners.map((p) => p.country)).size} countries
                </span>{' '}
                working together
              </p>
            </div>
          </AnimateOnScroll>

          {/* Country flags row */}
          <AnimateOnScroll delay={100}>
            <div className="flex justify-center gap-4 flex-wrap">
              {partners.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-root-border text-sm font-medium text-root-dark"
                >
                  <span className="text-xs px-1.5 py-0.5 bg-root-orange/10 text-root-orange rounded font-bold">
                    {p.countryCode}
                  </span>
                  {p.country}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Coordinator */}
      {coordinator && (
        <section className="py-16 bg-white">
          <Container>
            <AnimateOnScroll>
              <SectionHeading
                title="Project Coordinator"
                subtitle="Leading the ROOT consortium and managing overall project implementation."
                centered
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div className="max-w-xl mx-auto">
                <PartnerCard partner={coordinator} />
              </div>
            </AnimateOnScroll>
          </Container>
        </section>
      )}

      {/* Other Partners */}
      <section className="py-16 bg-root-bg">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title="Consortium Partners"
              subtitle="Expert organizations contributing to the project's success."
              centered
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {otherPartners.map((partner, index) => (
              <AnimateOnScroll key={partner.id} delay={index * 100}>
                <PartnerCard partner={partner} />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
