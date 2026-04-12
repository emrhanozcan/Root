import { Leaf, Users, Globe, Lightbulb } from 'lucide-react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    description:
      'Promoting environmentally conscious approaches to rural development and community building.',
  },
  {
    icon: Users,
    title: 'Youth Leadership',
    description:
      'Equipping young people with the skills and confidence to drive change in their communities.',
  },
  {
    icon: Globe,
    title: 'International Exchange',
    description:
      'Connecting rural youth across 6 countries to share experiences and best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Exploring creative solutions to rural challenges through agritourism, digital tools, and entrepreneurship.',
  },
];

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-12 h-1 rounded-full bg-root-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-root-dark mb-6 font-heading tracking-tight">
              Growing Opportunities,{' '}
              <span className="text-root-orange">Together</span>
            </h2>
            <p className="text-lg text-root-muted leading-relaxed">
              ROOT brings together youth organizations from 6 countries to tackle the
              challenges of rural decline by empowering young people with knowledge, networks, and
              tools for sustainable rural development.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <div className="group p-6 rounded-2xl border border-root-border bg-root-bg/50 hover:bg-white hover:shadow-lg hover:border-root-orange/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-root-orange/10 flex items-center justify-center mb-4 group-hover:bg-root-orange group-hover:text-white transition-all duration-300">
                  <feature.icon
                    size={24}
                    className="text-root-orange group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-root-dark mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-sm text-root-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
