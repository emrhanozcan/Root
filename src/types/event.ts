export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  country: string;
  type: 'meeting' | 'workshop' | 'training' | 'conference' | 'multiplier-event';
  status: 'upcoming' | 'ongoing' | 'past';
  image?: string;
}
