import type { Event } from '@/types';

export const events: Event[] = [
  {
    id: 'kick-off-meeting',
    title: 'Project Kick-Off Meeting',
    description:
      'The official launch meeting of the ROOT project, bringing together all partner organizations to align on objectives, work plan, and communication strategy.',
    date: '2025-03-15',
    endDate: '2025-03-17',
    location: 'Ankara',
    country: 'Türkiye',
    type: 'meeting',
    status: 'past',
  },
  {
    id: 'tpm-1-serbia',
    title: 'First Transnational Project Meeting',
    description:
      'Working sessions to review needs assessment results and plan toolkit development, including field visits to rural development projects in Serbia.',
    date: '2025-07-10',
    endDate: '2025-07-12',
    location: 'Smederevo',
    country: 'Serbia',
    type: 'meeting',
    status: 'past',
  },
  {
    id: 'youth-workshop-spain',
    title: 'Youth Entrepreneurship Workshop',
    description:
      'An intensive workshop on rural entrepreneurship and agritourism, featuring hands-on activities, mentoring sessions, and cross-cultural exchange among young participants.',
    date: '2025-11-18',
    endDate: '2025-11-22',
    location: 'Granada',
    country: 'Spain',
    type: 'workshop',
    status: 'upcoming',
  },
  {
    id: 'training-romania',
    title: 'Non-Formal Education Training Course',
    description:
      'A five-day training course for youth workers focused on non-formal education methods for rural community engagement and youth empowerment.',
    date: '2026-02-10',
    endDate: '2026-02-14',
    location: 'Sfax',
    country: 'Tunisia',
    type: 'training',
    status: 'upcoming',
  },
  {
    id: 'multiplier-event-portugal',
    title: 'Multiplier Event: Rural Futures',
    description:
      'A public dissemination event showcasing project results, the ROOT Toolkit, and inspiring stories of rural youth empowerment from the partner countries.',
    date: '2026-06-20',
    location: 'Amman',
    country: 'Jordan',
    type: 'multiplier-event',
    status: 'upcoming',
  },
];
