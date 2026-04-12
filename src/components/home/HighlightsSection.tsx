import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileText, Newspaper, Info } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const highlights = [
  {
    icon: Info,
    title: 'About the Project',
    description:
      'Learn about our mission, vision, and the impact we aim to create for rural youth in our partner countries.',
    href: '/about',
    color: 'bg-root-dark',
    iconColor: 'text-root-orange',
  },
  {
    icon: Users,
    title: 'Our Partners',
    description:
      'Meet the six organizations from different countries collaborating to make ROOT a reality.',
    href: '/partners',
    color: 'bg-root-orange',
    iconColor: 'text-white',
  },
  {
    icon: FileText,
    title: 'Deliverables',
    description:
      'Explore the toolkits, reports, and training materials being developed through the project.',
    href: '/deliverables',
    color: 'bg-root-yellow',
    iconColor: 'text-root-dark',
  },
  {
    icon: Newspaper,
    title: 'News & Updates',
    description:
      'Stay informed with the latest project news, articles, and announcements from the consortium.',
    href: '/news',
    color: 'bg-root-dark-soft',
    iconColor: 'text-root-yellow',
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title="Explore ROOT"
            subtitle="Dive deeper into the project, meet our partners, and stay up to date."
            centered
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 100}>
              <Link
                to={item.href}
                className="group block rounded-2xl overflow-hidden border border-root-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colored top block */}
                <div
                  className={`${item.color} p-6 flex items-center justify-center h-40`}
                >
                  <item.icon
                    size={48}
                    strokeWidth={1.5}
                    className={`${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                {/* Content */}
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-root-dark mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-root-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-root-orange group-hover:gap-2.5 transition-all duration-200">
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
