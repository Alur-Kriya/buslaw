export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Tim Pengacara', href: '/tim' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Kontak', href: '/kontak' },
];

export const firmContact = {
  name: 'BUSLAW & PARTNERS',
  tagline: 'Advocates & Legal Consultants',
  slogan: 'Keahlian Terpercaya, Keadilan Berkelanjutan',
  address: 'Sudirman Central Business District (SCBD), Gedung Equity Tower Lantai 28, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia',
  phone: '+62 21 5550 8888',
  hotline: '+62 811 8899 7700',
  whatsapp: '6281188997700',
  email: 'consultation@buslaw.id',
  operationalHours: 'Senin - Jumat: 08:30 - 18:00 WIB (Sabtu & Layanan Darurat Berdasarkan Janji Temu)',
  socials: {
    linkedin: 'https://linkedin.com/company/buslaw',
    instagram: 'https://instagram.com/buslaw.id',
    facebook: 'https://facebook.com/buslawoffice',
  }
};

