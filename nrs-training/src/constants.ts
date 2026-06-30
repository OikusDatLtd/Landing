export const NRS = {
  green: '#006B3C',
  greenDark: '#003D22',
  greenLight: '#008F50',
  gold: '#F5A623',
  goldDark: '#C47F0E',
  white: '#FFFFFF',
  offWhite: '#F8F6F0',
  charcoal: '#1A1A1A',
};

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1080;

export const EPISODE_DURATION_FRAMES = 90 * FPS; // 90 seconds max

export const EPISODES: EpisodeMeta[] = [
  { id: 1, title: 'Welcome to NRS HQ', theme: 'Building overview, orientation, warmth', durationSecs: 85 },
  { id: 2, title: 'Your Building Guide', theme: 'Navigation, floor layout, finding your way', durationSecs: 88 },
  { id: 3, title: 'Tech at Your Fingertips', theme: 'IP telephony, CCTV, network, CCH', durationSecs: 86 },
  { id: 4, title: 'Facility Management', theme: 'Lifts, electrical, cleaning, reporting faults', durationSecs: 87 },
  { id: 5, title: 'Security & Safety', theme: 'Entry procedures, access control, emergency', durationSecs: 89 },
  { id: 6, title: 'Parking Made Easy', theme: 'Multi-level car park, allocation, access', durationSecs: 83 },
  { id: 7, title: 'Staff Rights & Duties', theme: 'Conduct, welfare, grievance, dress code', durationSecs: 88 },
  { id: 8, title: 'Meeting Rooms & Shared Spaces', theme: 'Booking rooms, etiquette, auditorium', durationSecs: 85 },
  { id: 9, title: 'Health, Wellness & Family', theme: 'Gymnasium, crèche, clinic, prayer rooms', durationSecs: 87 },
  { id: 10, title: 'Living the NRS Spirit', theme: 'Values, culture, excellence, purpose', durationSecs: 90 },
];

export interface EpisodeMeta {
  id: number;
  title: string;
  theme: string;
  durationSecs: number;
}
