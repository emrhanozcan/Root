import { Link } from 'react-router-dom';
import { ArrowRight, Sprout } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-root-bg">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-root-orange/5" />
        {/* Small circle */}
        <div className="absolute bottom-20 -left-16 w-[300px] h-[300px] rounded-full bg-root-yellow/5" />
        {/* Geometric dots pattern */}
        <div className="absolute top-1/4 right-1/4 grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-root-orange"
            />
          ))}
        </div>
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-root-border to-transparent" />
      </div>

      <Container className="relative z-10 pt-24 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-root-orange/10 text-root-orange text-sm font-semibold mb-8 animate-fade-in">
              <Sprout size={16} />
              Erasmus+ Youth Project
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-root-dark leading-[1.05] mb-6 animate-fade-in-up font-heading">
              Rural
              <br />
              Opportunities
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">&amp; Outreach</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-root-yellow/30 -z-0 rounded" />
              </span>
              <br />
              <span className="text-root-orange">for Tomorrow</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-root-muted leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
              Empowering rural youth through innovation, sustainability, and international cooperation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/about">
                <Button size="lg">
                  Discover the Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/news">
                <Button variant="outline" size="lg">
                  Latest News
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual Block */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Main visual card */}
              <div className="w-80 h-96 bg-gradient-to-br from-root-orange to-root-yellow rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-white">
                <Sprout size={64} strokeWidth={1.5} className="mb-6 opacity-90" />
                <span className="text-6xl font-extrabold font-heading tracking-tighter mb-2">
                  ROOT
                </span>
                <span className="text-sm font-medium text-white/80 text-center leading-relaxed">
                  Rural Opportunities
                  <br />
                  and Outreach for Tomorrow
                </span>
              </div>
              {/* Floating accent cards */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-root-dark rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-root-orange font-heading">6</span>
                <span className="text-xs text-white/60 ml-1">countries</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-20 bg-white rounded-2xl shadow-lg border border-root-border flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-root-dark font-heading">24</span>
                <span className="text-xs text-root-muted">months</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
