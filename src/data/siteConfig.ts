import type { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'ROOT',
  acronym: 'ROOT',
  fullTitle: 'Rural Opportunities and Outreach for Tomorrow',
  description:
    'An Erasmus+ youth project empowering rural communities through outreach, sustainability, agritourism, and international cooperation.',
  euDisclaimer:
    'Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.',
  projectNumber: '101243317 — ROOT — ERASMUS-YOUTH-2025-CB',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=61584645714638',
    instagram: 'https://www.instagram.com/rooterasmus/',
    linkedin: 'https://www.linkedin.com/showcase/root-–-rural-opportunities-and-outreach-for-tomorrow/?viewAsMember=true',
  },
  contactEmail: '',
};

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Deliverables', href: '/deliverables' },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];
