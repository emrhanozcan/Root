export interface Deliverable {
  id: string;
  title: string;
  description: string;
  type: 'report' | 'toolkit' | 'guide' | 'video' | 'publication' | 'other';
  downloadUrl?: string;
  status: 'available' | 'coming-soon';
  relatedActivity?: string;
}
