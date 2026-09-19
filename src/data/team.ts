export interface Lawyer {
  id: string;
  name: string;
  title: string;
  roleLevel: 'partner' | 'associate';
  specialties: string[];
  education: string[];
  memberships: string[];
  experienceYears: number;
  email: string;
  phone: string;
  bio: string;
  quote: string;
  image: string;
  achievements: string[];
  casesHandled: number;
}

export const lawyers: Lawyer[] = [
  {
    id: 'bambang-sudirman',
    name: 'Dr. Bambang Sudirman, S.H., M.H.',
    title: 'Managing Partner',
    roleLevel: 'partner',
    specialties: ['Hukum Korporasi & Bisnis', 'Merger & Akuisisi', 'Arbitrase Komersial Internasional'],
    education: [
      'Doktor Ilmu Hukum (S3) - Universitas Indonesia (2012)',
      'Magister Hukum Bisnis (S2) - Universitas Padjadjaran (2004)',
      'Sarjana Hukum (S1) - Universitas Gadjah Mada (1998)'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI)',
      'Badan Arbitrase Nasional Indonesia (BANI) - Panel Arbiter',
      'International Bar Association (IBA)'
    ],
    experienceYears: 24,
    email: 'bambang.sudirman@buslaw.id',
    phone: '+62 21 5550 101',
    bio: 'Sebagai Managing Partner pendiri Buslaw, Dr. Bambang Sudirman telah memimpin ratusan transaksi korporasi berskala nasional maupun lintas batas yurisdiksi. Beliau dipercaya oleh berbagai konglomerasi dan BUMN terkemuka dalam penanganan restrukturisasi strategis dan penyelesaian sengketa komersial bernilai tinggi.',
    quote: 'Integritas hukum yang kokoh adalah fondasi utama dalam menjaga kesinambungan dan ketahanan setiap entitas bisnis.',
    image: '/images/team/bambang-sudirman.jpg',
    achievements: [
      'Top 50 Indonesian Corporate Lawyers (Legal 500)',
      'Lead Counsel pada Akuisisi Lintas Batas senilai Rp 2,4 Triliun',
      'Penasihat Ahli Hukum Regulasi Energi & Infrastruktur'
    ],
    casesHandled: 340
  },
  {
    id: 'sarah-prameswari',
    name: 'Sarah Prameswari, S.H., LL.M.',
    title: 'Senior Partner',
    roleLevel: 'partner',
    specialties: ['Litigasi Komersial & Perdata', 'Restrukturisasi Utang & Kepailitan (PKPU)', 'Hukum Perbankan'],
    education: [
      'Master of Laws (LL.M.) in International Commercial Law - Universiteit Leiden, Belanda (2009)',
      'Sarjana Hukum (S1) - Universitas Indonesia (2004)'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI)',
      'Asosiasi Kurator dan Pengurus Indonesia (AKPI)',
      'Inter-Pacific Bar Association (IPBA)'
    ],
    experienceYears: 18,
    email: 'sarah.prameswari@buslaw.id',
    phone: '+62 21 5550 102',
    bio: 'Sarah Prameswari memiliki rekam jejak impresif dalam memenangkan perkara perdata kompleks di berbagai tingkat pengadilan Indonesia hingga Mahkamah Agung. Dikenal dengan pendekatan analitis yang tajam dan taktik litigasi yang adaptif dalam proses PKPU maupun sengketa perbankan.',
    quote: 'Keadilan bukan sekadar retorika, melainkan hasil dari penguasaan pembuktian fakta materiil yang presisi.',
    image: '/images/team/sarah-prameswari.jpg',
    achievements: [
      'Penyelamatan Aset Klien senilai Rp 850 Miliar dalam Kasus Kepailitan',
      'Kuasa Hukum Utama dalam 45+ Gugatan Perdata Tingkat Kasasi & PK',
      'Recognized Practitioner oleh Chambers Asia-Pacific'
    ],
    casesHandled: 260
  },
  {
    id: 'arya-wicaksono',
    name: 'Arya Wicaksono, S.H., M.Kn.',
    title: 'Partner',
    roleLevel: 'partner',
    specialties: ['Hukum Properti & Agraria', 'Hukum Investasi & Penanaman Modal', 'Sengketa Konstruksi'],
    education: [
      'Magister Kenotariatan (S2) - Universitas Diponegoro (2013)',
      'Sarjana Hukum (S1) - Universitas Airlangga (2008)'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI)',
      'Masyarakat Hukum Udara & Properti Indonesia',
      'Himpunan Konsultan Hukum Pasar Modal (HKHPM)'
    ],
    experienceYears: 14,
    email: 'arya.wicaksono@buslaw.id',
    phone: '+62 21 5550 103',
    bio: 'Arya Wicaksono adalah pakar utama Buslaw dalam regulasi pertanahan, pembebasan lahan industri, serta perizinan investasi mega-proyek. Pendekatannya memadukan ketelitian hukum agraria dengan pemahaman mendalam atas dinamika industri properti tanah air.',
    quote: 'Kepastian hukum atas aset fisik merupakan pilar terpenting dalam keamanan investasi jangka panjang.',
    image: '/images/team/arya-wicaksono.jpg',
    achievements: [
      'Legal Due Diligence pembebasan kawasan industri 1.200 hektar di Jawa Barat',
      'Penasihat Hukum Konsorsium Pengembang Kawasan Mixed-Use',
      'Penyelesaian damai sengketa tumpang tindih sertifikat HGB'
    ],
    casesHandled: 190
  },
  {
    id: 'dian-anggraini',
    name: 'Dian Anggraini, S.H., LL.M.',
    title: 'Senior Associate',
    roleLevel: 'associate',
    specialties: ['Hukum Ketenagakerjaan & PHK', 'Kepatuhan Perusahaan (Corporate Compliance)', 'Tata Kelola ESG'],
    education: [
      'Master of Laws (LL.M.) in Asian Legal Studies - National University of Singapore (NUS) (2018)',
      'Sarjana Hukum (S1) - Universitas Gadjah Mada (2014)'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI)',
      'Asosiasi Praktisi Kepatuhan Hukum Indonesia'
    ],
    experienceYears: 9,
    email: 'dian.anggraini@buslaw.id',
    phone: '+62 21 5550 104',
    bio: 'Dian Anggraini memimpin divisi hukum ketenagakerjaan dan audit kepatuhan korporasi di Buslaw. Berpengalaman menangani perundingan bipartit/tripartit, penyusunan Perjanjian Kerja Bersama (PKB), serta audit regulasi ketenagakerjaan pasca pemberlakuan omnibus law.',
    quote: 'Relasi industrial yang sehat dibangun di atas kepatuhan regulasi dan komunikasi bipartit yang berkeadilan.',
    image: '/images/team/dian-anggraini.jpg',
    achievements: [
      'Harmonisasi PKB untuk 3.500 karyawan manufaktur multinasional',
      'Pendampingan penyelesaian perselisihan PHK kolektif efisien dan damai',
      'Penyusun Modul Kepatuhan ESG untuk Perusahaan Terbuka (Tbk)'
    ],
    casesHandled: 130
  },
  {
    id: 'farhan-pratama',
    name: 'Farhan Pratama, S.H.',
    title: 'Associate',
    roleLevel: 'associate',
    specialties: ['Hukum Pidana & White-Collar Crime', 'Kejahatan Siber & Perlindungan Data (PDP)', 'Litigasi Pidana'],
    education: [
      'Sarjana Hukum (S1) - Universitas Padjadjaran (2019)'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI)',
      'Komunitas Studi Hukum Siber Indonesia'
    ],
    experienceYears: 6,
    email: 'farhan.pratama@buslaw.id',
    phone: '+62 21 5550 105',
    bio: 'Farhan Pratama merupakan advokat muda dinamis dengan spesialisasi penanganan tindak pidana korporasi, fraud perbankan, serta kasus perlindungan data pribadi dan kejahatan teknologi informasi. Terlatih dalam investigasi digital dan pembuktian forensik elektronik.',
    quote: 'Dalam era digital, batas antara kesalahan administratif dan delik pidana menuntut pembelaan yang proaktif.',
    image: '/images/team/farhan-pratama.jpg',
    achievements: [
      'Pendampingan perkara tindak pidana pemalsuan data elektronik perbankan',
      'Advokasi pemulihan reputasi digital klien dari delik pencemaran nama baik',
      'Speaker pada Seminar Nasional Kesiapan Regulasi UU Perlindungan Data Pribadi'
    ],
    casesHandled: 85
  },
  {
    id: 'clarissa-nadine',
    name: 'Clarissa Nadine, S.H.',
    title: 'Junior Associate',
    roleLevel: 'associate',
    specialties: ['Hukum Keluarga & Perceraian', 'Hukum Waris & Perencanaan Harta', 'Perjanjian Perkawinan (Prenuptial)'],
    education: [
      'Sarjana Hukum (S1) - Universitas Indonesia (2022) - Lulusan Terbaik / Cum Laude'
    ],
    memberships: [
      'Perhimpunan Advokat Indonesia (PERADI - Calon Anggota Registrasi)'
    ],
    experienceYears: 3,
    email: 'clarissa.nadine@buslaw.id',
    phone: '+62 21 5550 106',
    bio: 'Clarissa Nadine mendedikasikan keahlian hukumnya untuk mendampingi klien individu dalam urusan privat keluarga, wasiat harta, hak asuh anak, dan penyusunan perjanjian pra-nikah. Pendekatannya yang empatik dan menjunjung kerahasiaan tinggi memberikan rasa aman bagi setiap klien.',
    quote: 'Masalah keluarga memerlukan sentuhan empati manusiawi di samping ketegasan aturan perundang-undangan.',
    image: '/images/team/clarissa-nadine.jpg',
    achievements: [
      'Fasilitasi mediasi damai pembagian warisan keluarga antar yurisdiksi',
      'Penyusunan 40+ Pre-nuptial Agreement dengan klausul perlindungan aset',
      'Juara 1 National Moot Court Competition Piala Mahkamah Agung'
    ],
    casesHandled: 50
  }
];

