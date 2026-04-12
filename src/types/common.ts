export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  acronym: string;
  fullTitle: string;
  description: string;
  euDisclaimer: string;
  projectNumber: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  contactEmail: string;
}

export interface SEOProps {
  title: string;
  description?: string;
}
