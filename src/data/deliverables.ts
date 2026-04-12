import type { Deliverable } from '@/types';

export const deliverables: Deliverable[] = [
  {
    id: 'needs-assessment-report',
    title: 'Needs Assessment Report',
    description:
      'A comprehensive comparative report analyzing the challenges, aspirations, and opportunities of rural youth across six countries. Based on surveys, interviews, and focus groups conducted in each partner country.',
    type: 'report',
    status: 'coming-soon',
    relatedActivity: 'Work Package 1 – Research & Analysis',
  },
  {
    id: 'root-toolkit',
    title: 'ROOT Toolkit for Rural Youth',
    description:
      'A practical, open-access toolkit designed to help young people identify, evaluate, and pursue opportunities in rural settings — including entrepreneurship, agritourism, digital work, and community leadership.',
    type: 'toolkit',
    status: 'coming-soon',
    relatedActivity: 'Work Package 2 – Toolkit Development',
  },
  {
    id: 'training-curriculum',
    title: 'Training Curriculum for Youth Workers',
    description:
      'A structured non-formal education curriculum enabling youth workers to facilitate workshops on rural opportunities, sustainability, and entrepreneurship with young people.',
    type: 'guide',
    status: 'coming-soon',
    relatedActivity: 'Work Package 3 – Capacity Building',
  },
  {
    id: 'best-practices-guide',
    title: 'Best Practices Guide',
    description:
      'A curated collection of success stories, case studies, and replicable models from different rural communities, showcasing innovative approaches to youth engagement and rural development.',
    type: 'publication',
    status: 'coming-soon',
    relatedActivity: 'Work Package 4 – Dissemination',
  },
  {
    id: 'project-video',
    title: 'ROOT Project Documentary',
    description:
      'A short documentary film capturing the journey of the ROOT project, featuring interviews with young participants, partners, and community leaders from all six countries.',
    type: 'video',
    status: 'coming-soon',
    relatedActivity: 'Work Package 4 – Dissemination',
  },
  {
    id: 'policy-recommendations',
    title: 'Policy Recommendations',
    description:
      'Evidence-based policy recommendations for local, national, and EU-level stakeholders on how to better support rural youth and foster sustainable rural development.',
    type: 'report',
    status: 'coming-soon',
    relatedActivity: 'Work Package 4 – Dissemination',
  },
];
