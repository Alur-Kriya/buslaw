export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const firmStats: StatItem[] = [
  {
    id: 'experience',
    value: 18,
    suffix: '+',
    label: 'Tahun Pengalaman',
    description: 'Dedikasi melayani klien korporasi dan perseorangan sejak 2008'
  },
  {
    id: 'cases',
    value: 850,
    suffix: '+',
    label: 'Perkara Diselesaikan',
    description: 'Litigasi dan non-litigasi di berbagai tingkatan peradilan Indonesia'
  },
  {
    id: 'success-rate',
    value: 98,
    suffix: '%',
    label: 'Tingkat Keberhasilan',
    description: 'Penyelesaian damai, putusan inkrah, dan negosiasi optimal'
  },
  {
    id: 'corporate-clients',
    value: 120,
    suffix: '+',
    label: 'Klien Korporasi Aktif',
    description: 'Perusahaan multinasional, BUMN, dan startup teknologi'
  }
];

