import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Facebook = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Instagram = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Linkedin = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
import Container from '@/components/ui/Container';
import { siteConfig, navigationItems } from '@/data/siteConfig';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-root-black text-white" role="contentinfo">
      {/* EU Disclaimer Banner */}
      <div className="bg-root-dark-soft border-b border-white/10">
        <Container className="py-6">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <img
              src="/images/eu.png"
              alt="European Union flag"
              className="h-auto w-full max-w-[420px] scale-x-110 flex-shrink-0 object-contain sm:w-[400px] lg:w-[500px]"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              {t('footer.eu_disclaimer')}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/images/rootWhite.png"
                alt="ROOT"
                className="h-[144px] md:h-[172px] w-auto scale-x-125 object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteConfig.fullTitle}
            </p>
            <p className="text-white/30 text-xs">
              {t('common.project_no')}: {siteConfig.projectNumber}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-root-orange transition-colors duration-200"
                  >
                    {t(`nav.${item.label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Themes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {t('footer.project_themes')}
            </h3>
            <ul className="space-y-3">
              {[
                { key: 'rural_dev' },
                { key: 'youth_emp' },
                { key: 'sustainability' },
                { key: 'agritourism' },
                { key: 'entrepreneurship' },
                { key: 'intl_coop' },
              ].map((theme) => (
                <li key={theme.key}>
                  <span className="text-sm text-white/50">{t(`footer.themes.${theme.key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              {siteConfig.contactEmail && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-root-orange transition-colors"
                  >
                    <Mail size={16} className="flex-shrink-0" />
                    {siteConfig.contactEmail}
                  </a>
                </li>
              )}
              <li>
                <div className="flex items-center gap-2.5 text-sm text-white/50">
                  <MapPin size={16} className="flex-shrink-0" />
                  {t('common.location')}
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-root-orange hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
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
              © {currentYear} {siteConfig.acronym} – {siteConfig.fullTitle}. {t('footer.rights')}
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/50 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-white/50 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
