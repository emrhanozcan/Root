import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const stats = [
  { value: '6', label: 'Partner Countries' },
  { value: '24', label: 'Months Duration' },
  { value: '6', label: 'Key Deliverables' },
  { value: '500+', label: 'Youth to Reach' },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-root-dark text-white">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <div className="w-12 h-1 rounded-full bg-root-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">
              Project at a Glance
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Key facts and figures about the ROOT project.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-root-orange mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
