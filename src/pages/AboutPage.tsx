import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
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
  usePageTitle('About the Project');

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-root-dark text-white py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="w-12 h-1 rounded-full bg-root-orange mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading">
                About the{' '}
                <span className="text-root-orange">ROOT</span> Project
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                ROOT – Rural Opportunities and Outreach for Tomorrow is an Erasmus+ funded
                youth project that brings together six organizations from different countries
                to address the challenges and unlock the potential of rural communities.
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
                title="Project Overview"
                subtitle="Bridging the urban-rural divide through youth empowerment and international cooperation."
              />
              <div className="space-y-4 text-root-muted leading-relaxed">
                <p>
                  Across many regions, rural areas face interconnected challenges: population decline,
                  limited access to services, and a widening gap with urban centers in terms of
                  economic opportunity and social connectivity. Young people are disproportionately
                  affected, often feeling compelled to leave their communities in search of
                  education, employment, and social life.
                </p>
                <p>
                  The ROOT project responds to this reality by creating a comprehensive framework
                  for rural youth empowerment. Through research, resource development, capacity
                  building, and cross-border exchange, we aim to demonstrate that rural areas can
                  be vibrant places of opportunity, innovation, and community.
                </p>
                <p>
                  Funded under the Erasmus+ programme (Key Action 2 – Cooperation Partnerships
                  in Youth), the project runs for 24 months and involves partners from Serbia,
                  Egypt, Türkiye, Spain, Tunisia, and Jordan.
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
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    To empower rural youth with skills, knowledge, and networks that enable
                    them to create meaningful change in their communities and build fulfilling
                    lives close to their roots.
                  </p>
                </div>

                {/* Vision */}
                <div className="p-6 rounded-2xl bg-root-bg border border-root-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-root-yellow/15 flex items-center justify-center">
                      <Eye size={20} className="text-root-yellow" />
                    </div>
                    <h3 className="text-lg font-bold text-root-dark font-heading">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    A world where rural communities thrive, where young people see the
                    countryside as a place of possibility, and where the urban-rural divide
                    is bridged by innovation, solidarity, and shared purpose.
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="p-6 rounded-2xl bg-root-bg border border-root-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-root-dark/10 flex items-center justify-center">
                      <Heart size={20} className="text-root-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-root-dark font-heading">
                      Why It Matters
                    </h3>
                  </div>
                  <p className="text-sm text-root-muted leading-relaxed">
                    Rural decline affects many regions — socially, economically, and
                    environmentally. By investing in rural youth, we invest in resilient
                    communities, sustainable food systems, and a more balanced society.
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
              title="Target Groups"
              subtitle="The people at the heart of ROOT."
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
                    {group.label}
                  </h3>
                  <p className="text-sm text-root-muted leading-relaxed">
                    {group.description}
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
                title="Expected Impact"
                subtitle="The change we aim to create through ROOT."
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="space-y-3">
                {impactPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-root-bg/50 border border-root-border/50"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-root-orange/10 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-root-orange">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-root-dark leading-relaxed">{point}</p>
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
