import { usePageTitle } from '@/hooks/usePageTitle';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ObjectivesSection from '@/components/home/ObjectivesSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import StatsSection from '@/components/home/StatsSection';

export default function HomePage() {
  usePageTitle('');

  return (
    <>
      <HeroSection />
      <IntroSection />
      <ObjectivesSection />
      <HighlightsSection />
      <StatsSection />
    </>
  );
}
