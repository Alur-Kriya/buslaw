export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  quote: string;
  rating: number;
  practiceArea: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testi-1',
    clientName: 'Ir. Hendra Gunawan',
    clientTitle: 'Direktur Utama',
    company: 'PT Mega Konstruksi Nusantara',
    quote: 'Buslaw membuktikan keahlian luar biasa dalam mendampingi restrukturisasi anak perusahaan kami senilai miliaran rupiah. Kesiapan data dan diplomasi Dr. Bambang Sudirman sangat mengagumkan.',
    rating: 5,
    practiceArea: 'Hukum Korporasi & Bisnis'
  },
  {
    id: 'testi-2',
    clientName: 'Sylvia Tanuwijaya',
    clientTitle: 'Chief Financial Officer',
    company: 'Global Retail Logistics Indonesia',
    quote: 'Ketika perusahaan kami menghadapi sengketa PKPU mendadak dari vendor asing, Sarah Prameswari dan tim bertindak cepat dan menyusun rencana homologasi yang disetujui 100% kreditur.',
    rating: 5,
    practiceArea: 'Hukum Perdata & Sengketa'
  },
  {
    id: 'testi-3',
    clientName: 'Budi Santoso, MBA',
    clientTitle: 'Head of Human Resources',
    company: 'Fintech Dinamika Asia',
    quote: 'Dian Anggraini menyelaraskan seluruh klausul kontrak kerja dan audit kepatuhan ketenagakerjaan kami dengan regulasi omnibus law terbaru tanpa menimbulkan gejolak di serikat pekerja.',
    rating: 5,
    practiceArea: 'Hukum Ketenagakerjaan'
  },
  {
    id: 'testi-4',
    clientName: 'R. Kusumo',
    clientTitle: 'Managing Director',
    company: 'Kusumo Real Estate Group',
    quote: 'Arya Wicaksono menyelesaikan polemik tumpang tindih sertifikat tanah seluas 40 hektar yang sudah mandek selama 4 tahun. Pendekatannya lugas, taktis, dan sangat taat hukum.',
    rating: 5,
    practiceArea: 'Hukum Properti & Agraria'
  }
];

