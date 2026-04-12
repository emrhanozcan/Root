import type { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'ROOT',
  acronym: 'ROOT',
  fullTitle: 'Rural Opportunities and Outreach for Tomorrow',
  description:
    'An Erasmus+ youth project empowering rural communities through outreach, sustainability, agritourism, and international cooperation.',
  euDisclaimer:
    'Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.',
  projectNumber: '2024-1-XX01-KA220-YOU-000012345',
  socialLinks: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  contactEmail: 'info@rootproject.eu',
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
