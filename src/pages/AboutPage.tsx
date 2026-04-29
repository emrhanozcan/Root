import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useTranslation } from 'react-i18next';
import {
  Target,
  Eye,
  Heart,
  Users,
  BarChart3,
  Sprout,
} from 'lucide-react';

const targetGroups = [
  {
    icon: Users,
    label: 'Rural Youth (18–30)',
    description:
      'Young people living in rural and semi-rural areas seeking opportunities for personal and professional growth.',
  },
  {
    icon: Sprout,
    label: 'Youth Workers & Educators',
    description:
      'Professionals supporting young people in rural contexts through non-formal and informal education.',
  },
  {
    icon: BarChart3,
    label: 'Local Authorities & Stakeholders',
    description:
      'Municipal leaders, civil society organizations, and community stakeholders invested in rural development.',
  },
];

const impactPoints = [
  'Increased awareness of rural opportunities among youth',
  'Strengthened capacity of youth organizations in partner countries',
  'Open-access educational resources available in multiple languages',
  'Cross-border network of rural youth change-makers',
  'Policy recommendations for sustainable rural development',
  'Replicable models for rural youth empowerment internationally',
];

export default function AboutPage() {
  const { t } = useTranslation();
  usePageTitle(t('nav.About'));

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                {t('about.hero_title')}
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                {t('about.hero_sub')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimateOnScroll>
              <SectionHeading
                title={t('about.overview_title')}
                subtitle={t('about.overview_sub')}
              />
              <div className="space-y-4 text-root-muted leading-relaxed">
                <p>
                  {t('about.overview_p1')}
                </p>
                <p>
                  {t('about.overview_p2')}
                </p>
                <p>
                  {t('about.overview_p3')}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="space-y-6">
                {/* Mission */}
                <div className="p-6 rounded-2xl bg-root-bg border border-root-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-root-orange/10 flex items-center justify-center">
                      <Target size={20} className="text-root-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-root-dark font-heading">
                      {t('about.mission_t')}
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {t('about.mission_d')}
                  </p>
                </div>

                {/* Vision */}
                <div className="p-6 rounded-2xl bg-root-bg border border-root-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-root-yellow/15 flex items-center justify-center">
                      <Eye size={20} className="text-root-yellow" />
                    </div>
                    <h3 className="text-lg font-bold text-root-dark font-heading">
                      {t('about.vision_t')}
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {t('about.vision_d')}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="p-6 rounded-2xl bg-root-bg border border-root-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-root-dark/10 flex items-center justify-center">
                      <Heart size={20} className="text-root-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-root-dark font-heading">
                      {t('about.matters_t')}
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {t('about.matters_d')}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Target Groups */}
      <section className="py-20 md:py-28 bg-root-bg">
        <Container>
          <AnimateOnScroll>
            <SectionHeading
              title={t('about.target_title')}
              subtitle={t('about.target_sub')}
              centered
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {targetGroups.map((group, index) => (
              <AnimateOnScroll key={group.label} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border border-root-border text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-root-orange/10 flex items-center justify-center mx-auto mb-5">
                    <group.icon size={28} className="text-root-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-root-dark mb-3 font-heading">
                    {t(`about.target_g${index + 1}_t`)}
                  </h3>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {t(`about.target_g${index + 1}_d`)}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Expected Impact */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <SectionHeading
                title={t('about.impact_title')}
                subtitle={t('about.impact_sub')}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="space-y-3">
                {impactPoints.map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-root-bg/50 border border-root-border/50"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-root-orange/10 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-root-orange">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-root-dark leading-relaxed">{t(`about.impact_${index + 1}`)}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </div>
  );
}
