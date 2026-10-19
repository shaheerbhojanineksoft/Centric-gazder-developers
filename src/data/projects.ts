export type UnitType = {
  id: 'A1' | 'B1' | 'C1';
  label: string;
  areaSqFt: number;
  bedrooms: number;
  parking: number;
  totalPrice: number;
  booking: number;
  startOfWork: number;
  monthly: number;
  monthlyCount: number;
  possession: number;
  planImage: string;
  planPdf: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  status: string;
  location: string;
  tagline: string;
  excerpt: string;
  description: string[];
  cardImage: string;
  heroImage: string;
  units: UnitType[];
};

const units: UnitType[] = [
  {
    id: 'A1',
    label: 'Type A1',
    areaSqFt: 3340,
    bedrooms: 4,
    parking: 2,
    totalPrice: 120000000,
    booking: 18000000,
    startOfWork: 12000000,
    monthly: 2166667,
    monthlyCount: 36,
    possession: 12000000,
    planImage: '/images/plans/plan-a1.webp',
    planPdf: '/downloads/floor-plan-a1.pdf',
    highlights: [
      'Drawing room',
      'Lounge & dining',
      'Kitchen with utility kitchen',
      "Maid's room",
      'Private terrace',
    ],
  },
  {
    id: 'B1',
    label: 'Type B1',
    areaSqFt: 3310,
    bedrooms: 4,
    parking: 2,
    totalPrice: 120000000,
    booking: 18000000,
    startOfWork: 12000000,
    monthly: 2166667,
    monthlyCount: 36,
    possession: 12000000,
    planImage: '/images/plans/plan-b1.webp',
    planPdf: '/downloads/floor-plan-b1.pdf',
    highlights: [
      'Drawing room',
      'Lounge & dining',
      'Kitchen with store',
      'Service balcony',
      'Private terrace',
    ],
  },
  {
    id: 'C1',
    label: 'Type C1',
    areaSqFt: 3278,
    bedrooms: 4,
    parking: 2,
    totalPrice: 117500000,
    booking: 17625000,
    startOfWork: 11750000,
    monthly: 2121528,
    monthlyCount: 36,
    possession: 11750000,
    planImage: '/images/plans/plan-c1.webp',
    planPdf: '/downloads/floor-plan-c1.pdf',
    highlights: [
      'Drawing room',
      'Lounge & dining',
      'Kitchen with utility kitchen',
      "Maid's room",
      'Terrace & balcony',
    ],
  },
];

export const residencia: Project = {
  slug: 'residencia',
  name: 'Centric Gazdar Residencia',
  shortName: 'Residencia',
  status: 'Now Booking',
  location: 'Clifton, Karachi',
  tagline: 'The art of city living, perfected.',
  excerpt:
    'Four-bedroom residences shaped by refined curves, natural light and a royal sense of calm — in the heart of Clifton.',
  description: [
    'Centric Gazdar Residencia carries an aura of eliteness that settles gracefully within the heart of Clifton. The tower creates an impression that stays with the viewer, shaped with refined curves and a graceful stance that sparks confidence.',
    'A gentle sense of luxury moves through its design, raising the entire living experience. The air around the residence feels uplifted, as the project combines modern comfort with a royal character.',
  ],
  cardImage: 'project-residencia',
  heroImage: 'hero-residencia',
  units,
};

export const projects: Project[] = [residencia];
