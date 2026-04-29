import { Target, TrendingUp, Heart, Handshake, BookOpen, TreePine } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useTranslation } from 'react-i18next';

const objectives = [
  {
    icon: Target,
    title: 'Map Rural Challenges',
    description:
      'Conduct comprehensive needs assessments to understand the real barriers facing rural youth across partner countries.',
  },
  {
    icon: BookOpen,
    title: 'Develop Educational Resources',
    description:
      'Create an open-access toolkit and training curriculum for youth workers and young change-makers.',
  },
  {
    icon: TrendingUp,
    title: 'Foster Entrepreneurship',
    description:
      'Equip young people with skills in agritourism, green business, and digital entrepreneurship.',
  },
  {
    icon: Handshake,
    title: 'Build Networks',
    description:
      'Establish a cross-border community of practice connecting rural youth, organizations, and stakeholders.',
  },
  {
    icon: Heart,
    title: 'Champion Sustainability',
    description:
      'Promote environmentally and socially sustainable approaches to rural community development.',
  },
  {
    icon: TreePine,
    title: 'Inspire Rural Futures',
    description:
      'Change perceptions about rural life and showcase the opportunities available in the countryside.',
  },
];

export default function ObjectivesSection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-root-bg">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title={t('objectives.title')}
            subtitle={t('objectives.subtitle')}
            centered
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {objectives.map((obj, index) => (
            <AnimateOnScroll key={obj.title} delay={index * 80}>
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-root-border hover:shadow-md transition-all duration-300 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-root-orange/10 flex items-center justify-center group-hover:bg-root-orange transition-colors duration-300">
                  <obj.icon
                    size={22}
                    className="text-root-orange group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-root-dark mb-1.5 font-heading">
                    {t(`objectives.o${index + 1}_t`)}
                  </h3>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {t(`objectives.o${index + 1}_d`)}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
