import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteConfig, navigationItems } from '@/data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-root-black text-white" role="contentinfo">
      {/* EU Disclaimer Banner */}
      <div className="bg-root-dark-soft border-b border-white/10">
        <Container className="py-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-11 bg-[#003399] rounded flex items-center justify-center">
              <div className="relative">
                <span className="text-[#FFCC00] text-xs font-bold">EU</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteConfig.euDisclaimer}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
                <img src="/images/root.png" alt="ROOT Logo" className="h-[46px] w-auto object-contain" />
              <div>
                <span className="text-xl font-extrabold tracking-tight font-heading">
                  ROOT
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteConfig.fullTitle}
            </p>
            <p className="text-white/30 text-xs">
              Project No: {siteConfig.projectNumber}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-root-orange transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Themes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Project Themes
            </h3>
            <ul className="space-y-3">
              {[
                'Rural Development',
                'Youth Empowerment',
                'Sustainability',
                'Agritourism',
                'Entrepreneurship',
                'International Cooperation',
              ].map((theme) => (
                <li key={theme}>
                  <span className="text-sm text-white/50">{theme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-root-orange transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-sm text-white/50">
                  <MapPin size={16} className="flex-shrink-0" />
                  Ankara, Türkiye
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>
              © {currentYear} {siteConfig.acronym} – {siteConfig.fullTitle}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/50 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/50 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
