export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  leadLawyerId: string;
  servicesList: string[];
  workflow: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'hukum-korporasi',
    slug: 'hukum-korporasi-dan-bisnis',
    title: 'Hukum Korporasi & Bisnis',
    titleEn: 'Corporate & Commercial Law',
    shortDesc: 'Pendampingan hukum komprehensif untuk pendirian usaha, merger & akuisisi, restrukturisasi, kontrak komersial, dan tata kelola perusahaan (GCG).',
    fullDesc: 'Layanan Hukum Korporasi Buslaw dirancang untuk memitigasi risiko bisnis dan mengakselerasi pertumbuhan transaksi komersial Anda. Kami bertindak sebagai penasihat strategis mulai dari tahap perizinan usaha, penyusunan kontrak kompleks, hingga transaksi M&A skala regional.',
    iconName: 'Building2',
    leadLawyerId: 'bambang-sudirman',
    servicesList: [
      'Pendirian PT, PMA, Kantor Perwakilan, dan Joint Venture',
      'Merger, Akuisisi, Konsolidasi, dan Spin-Off Korporasi',
      'Penyusunan & Peninjauan Kontrak Bisnis Multinasional',
      'Legal Due Diligence (Uji Tuntas Hukum) Transaksi Investasi',
      'Kepatuhan Tata Kelola Perusahaan (Good Corporate Governance)',
      'Arbitrase & Penyelesaian Sengketa Bisnis Melalui BANI'
    ],
    workflow: [
      { step: '01', title: 'Audit & Penilaian Kebutuhan', desc: 'Menganalisis dokumen legal eksisting dan memetakan struktur risiko transaksi yang direncanakan.' },
      { step: '02', title: 'Perumusan Strategi & Opini Hukum', desc: 'Menyusun Legal Opinion (LO) yang komprehensif dan merancang draf perjanjian yang melindungi kepentingan klien.' },
      { step: '03', title: 'Negosiasi & Finalisasi', desc: 'Mewakili kepentingan klien dalam perundingan meja perundingan dengan mitra bisnis atau regulator.' },
      { step: '04', title: 'Implementasi & Pengawasan Berkala', desc: 'Memastikan eksekusi kepatuhan pasca-transaksi berjalan sesuai ketentuan hukum yang berlaku.' }
    ],
    faqs: [
      {
        question: 'Berapa lama proses Legal Due Diligence (LDD) umumnya berlangsung?',
        answer: 'Tergantung kompleksitas dan skala entitas target, LDD komprehensif umumnya memakan waktu 2 hingga 4 minggu sejak kelengkapan dokumen data room diterima.'
      },
      {
        question: 'Apakah Buslaw dapat mewakili perusahaan asing yang ingin mendirikan PMA di Indonesia?',
        answer: 'Tentu. Kami mendampingi investor luar negeri mulai dari pengecekan Daftar Positif Investasi (DPI), perizinan OSS-RBA, hingga perancangan anggaran dasar PT PMA.'
      }
    ]
  },
  {
    id: 'litigasi-perdata',
    slug: 'hukum-perdata-dan-sengketa-komersial',
    title: 'Hukum Perdata & Sengketa Komersial',
    titleEn: 'Civil & Commercial Litigation',
    shortDesc: 'Pembelaan dan penyelesaian sengketa perdata, wanprestasi, perbuatan melawan hukum (PMH), eksekusi jaminan, serta PKPU dan kepailitan.',
    fullDesc: 'Divisi litigasi komersial kami memiliki rekam jejak terbukti dalam menghadapi persidangan berisiko tinggi. Kami memprioritaskan penyelesaian sengketa yang terukur, melindungi aset klien, dan mengoptimalkan pemulihan kerugian finansial.',
    iconName: 'Scale',
    leadLawyerId: 'sarah-prameswari',
    servicesList: [
      'Gugatan Wanprestasi & Perbuatan Melawan Hukum (PMH)',
      'Permohonan & Pembelaan PKPU serta Kepailitan di Pengadilan Niaga',
      'Eksekusi Hak Tanggungan, Fidusia, dan Jaminan Kebendaan',
      'Sengketa Perbankan, Derivatif, dan Pasar Modal',
      'Mediasi Litigasi & Konsiliasi Alternatif di Pengadilan Negeri',
      'Upaya Hukum Banding, Kasasi, dan Peninjauan Kembali (PK) di Mahkamah Agung'
    ],
    workflow: [
      { step: '01', title: 'Analisis Bukti & Pemetaan Kasus', desc: 'Evaluasi kekuatan alat bukti surat, saksi, dan yurisprudensi relevan sebelum melangkah ke pengadilan.' },
      { step: '02', title: 'Somasi & Upaya Pra-Litigasi', desc: 'Melayangkan teguran hukum resmi untuk membuka ruang penyelesaian damai yang menguntungkan.' },
      { step: '03', title: 'Penyusunan Berkas Perkara', desc: 'Menyusun gugatan, replik, kesimpulan, atau memori banding/kasasi secara sistematis dan lugas.' },
      { step: '04', title: 'Pendampingan Sidang & Eksekusi Putusan', desc: 'Menghadiri seluruh agenda sidang serta mengawal eksekusi putusan berkekuatan hukum tetap (inkracht).' }
    ],
    faqs: [
      {
        question: 'Apa perbedaan mendasar antara somasi perdata dengan gugatan langsung?',
        answer: 'Somasi adalah peringatan hukum resmi untuk memberikan kesempatan bagi pihak lawan memenuhi kewajibannya secara sukarela sebelum menempuh jalur pengadilan yang memakan biaya dan waktu.'
      },
      {
        question: 'Bagaimana Buslaw menangani proses PKPU?',
        answer: 'Kami mendampingi kreditur dalam mengajukan tagihan maupun mewakili debitur dalam menyusun rencana perdamaian (composition plan) yang kredibel.'
      }
    ]
  },
  {
    id: 'hukum-properti',
    slug: 'hukum-properti-dan-agraria',
    title: 'Hukum Properti & Agraria',
    titleEn: 'Real Estate & Agrarian Law',
    shortDesc: 'Penanganan perizinan lahan, pembebasan tanah, sengketa sertifikat tumpang tindih, kontrak konstruksi FIDIC, dan legalitas aset properti komersial.',
    fullDesc: 'Buslaw memberikan advokasi hukum mendalam bagi pengembang, investor real estate, dan pemilik tanah perorangan dalam menjamin kepastian alas hak dan kepatuhan tata ruang tata wilayah (RTRW).',
    iconName: 'Landmark',
    leadLawyerId: 'arya-wicaksono',
    servicesList: [
      'Uji Tuntas Riwayat Tanah (Land Title Due Diligence)',
      'Penyelesaian Sengketa Sertifikat Hak Milik & HGB di Pengadilan Tata Usaha Negara (PTUN)',
      'Penyusunan Kontrak Pengadaan Lahan & Pembebasan Tanah Skala Besar',
      'Kontrak Konstruksi, Kontraktor Utama, & Standar FIDIC',
      'Konversi & Peningkatan Hak Atas Tanah di Kantor Pertanahan (BPN)',
      'Perizinan Kawasan Industri, Perumahan, dan Bangunan Gedung (PBG/SLF)'
    ],
    workflow: [
      { step: '01', title: 'Verifikasi Fisik & Yuridis', desc: 'Pengecekan langsung warkah tanah di Kantor Pertanahan dan pemeriksaan riwayat penguasaan fisik tanah.' },
      { step: '02', title: 'Mitigasi Sengketa Kepemilikan', desc: 'Identifikasi potensi klaim pihak ketiga, tanah ulayat, atau tumpang tindih peta pendaftaran tanah.' },
      { step: '03', title: 'Penyusunan Instrumen Pengalihan', desc: 'Penyusunan Perjanjian Pengikatan Jual Beli (PPJB) dan Akta Jual Beli (AJB) dengan klausul perlindungan ketat.' },
      { step: '04', title: 'Pendaftaran & Balik Nama', desc: 'Pengawalan proses penerbitan sertifikat hingga tuntas atas nama klien secara sah.' }
    ],
    faqs: [
      {
        question: 'Apakah WNA dapat memiliki properti di Indonesia melalui regulasi terbaru?',
        answer: 'Melalui UU Cipta Kerja dan PP No. 18 Tahun 2021, WNA pemegang izin tinggal kini dapat memiliki rumah tempat tinggal/hunian dengan Hak Pakai di atas tanah tertentu sesuai batasan harga minimum.'
      }
    ]
  },
  {
    id: 'hukum-ketenagakerjaan',
    slug: 'hukum-ketenagakerjaan-dan-hubungan-industrial',
    title: 'Hukum Ketenagakerjaan & Hubungan Industrial',
    titleEn: 'Employment & Industrial Relations',
    shortDesc: 'Penyusunan Peraturan Perusahaan (PP), Perjanjian Kerja Bersama (PKB), penyelesaian perselisihan PHK di PHI, dan audit kepatuhan ketenagakerjaan.',
    fullDesc: 'Kami membantu korporasi dan tenaga kerja profesional menciptakan ekosistem kerja yang harmonis, patuh regulasi ketenagakerjaan, serta menyelesaikan friksi industrial dengan pendekatan konstruktif.',
    iconName: 'Briefcase',
    leadLawyerId: 'dian-anggraini',
    servicesList: [
      'Penyusunan Peraturan Perusahaan (PP) & Perjanjian Kerja Bersama (PKB)',
      'Perancangan Kontrak Kerja PKWT, PKWTT, Non-Disclosure Agreement (NDA), & Non-Compete',
      'Penyelesaian Perselisihan Pemutusan Hubungan Kerja (PHK) di Pengadilan Hubungan Industrial (PHI)',
      'Perundingan Bipartit dan Mediasi Tripartit di Dinas Tenaga Kerja',
      'Audit Kepatuhan Ketenagakerjaan Terhadap UU Cipta Kerja',
      'Konsultasi Visa Kerja & RPTKA untuk Tenaga Kerja Asing (TKA)'
    ],
    workflow: [
      { step: '01', title: 'Audit Kebijakan Karyawan', desc: 'Meninjau buku pedoman karyawan, slip gaji, kepatuhan BPJS, dan jam kerja sesuai regulasi terbaru.' },
      { step: '02', title: 'Perundingan Bipartit Konstruktif', desc: 'Memandu dialog bipartit antara manajemen dan serikat pekerja secara transparan dan solutif.' },
      { step: '03', title: 'Eskalasi Tripartit / Mediasi Disnaker', desc: 'Menyiapkan dalil dan bukti jika perselisihan memerlukan pendampingan di hadapan mediator ketenagakerjaan.' },
      { step: '04', title: 'Litigasi Pengadilan Hubungan Industrial', desc: 'Mewakili kepentingan di PHI jika mediasi tidak menghasilkan kesepakatan damai.' }
    ],
    faqs: [
      {
        question: 'Berapa besaran uang kompensasi PKWT pasca UU Cipta Kerja?',
        answer: 'Pengusaha wajib memberikan uang kompensasi bagi pekerja PKWT yang telah memiliki masa kerja minimal 1 bulan secara terus menerus, dihitung proporsional terhadap masa kerja.'
      }
    ]
  },
  {
    id: 'hukum-pidana',
    slug: 'hukum-pidana-dan-investigasi-kejahatan-bisnis',
    title: 'Hukum Pidana & Investigasi Bisnis',
    titleEn: 'Criminal Defense & White Collar Crime',
    shortDesc: 'Pendampingan proses penyelidikan di kepolisian/kejaksaan, tindak pidana korupsi & perbankan, kejahatan siber, serta audit fraud internal.',
    fullDesc: 'Kami menyediakan perlindungan hukum yang tegas dan profesional bagi klien yang berhadapan dengan proses peradilan pidana, dengan penekanan pada perlindungan hak asasi, praduga tak bersalah, dan pemulihan nama baik.',
    iconName: 'ShieldAlert',
    leadLawyerId: 'farhan-pratama',
    servicesList: [
      'Pendampingan Saksi dan Tersangka di Kepolisian, Kejaksaan, dan KPK',
      'Pembelaan Perkara Tindak Pidana Korupsi (Tipikor) & Pencucian Uang (TPPU)',
      'Penanganan Tindak Pidana Siber, Pencemaran Nama Baik, & UU ITE',
      'Investigasi Internal Indikasi Fraud & Penggelapan Jabatan',
      'Upaya Hukum Praperadilan Atas Keabsahan Penangkapan/Penahanan',
      'Pembelaan Litigasi di Sidang Pengadilan Negeri'
    ],
    workflow: [
      { step: '01', title: 'Konsultasi Darurat & Asesmen Delik', desc: 'Menganalisis surat panggilan dan konstruksi pasal pidana yang disangkakan dalam waktu 1x24 jam.' },
      { step: '02', title: 'Pendampingan BAP di Kepolisian', desc: 'Memastikan hak tersangka/saksi terlindungi dan jawaban tercatat secara akurat tanpa intimidasi.' },
      { step: '03', title: 'Pengajuan Saksi Meringankan (A de Charge)', desc: 'Menghadirkan bukti kontra dan saksi ahli independen untuk membantah tuduhan jaksa penuntut.' },
      { step: '04', title: 'Pledoi & Pembelaan Pengadilan', desc: 'Menyusun nota pembelaan (pledoi) yang komprehensif untuk meyakinkan majelis hakim.' }
    ],
    faqs: [
      {
        question: 'Apakah saya berhak didampingi pengacara saat pertama kali diperiksa polisi?',
        answer: 'Ya, sesuai Pasal 54 KUHAP, tersangka berhak mendapat bantuan hukum dari seorang atau lebih penasihat hukum sejak saat penangkapan atau penahanan pada setiap tingkat pemeriksaan.'
      }
    ]
  },
  {
    id: 'hukum-keluarga',
    slug: 'hukum-keluarga-dan-waris',
    title: 'Hukum Keluarga & Perencanaan Waris',
    titleEn: 'Family & Estate Planning Law',
    shortDesc: 'Penyelesaian perceraian dengan kerahasiaan tinggi, hak asuh anak, pembagian harta gono-gini, wasiat, dan perjanjian pra-nikah.',
    fullDesc: 'Kami memahami bahwa urusan keluarga memiliki sensitivitas emosional dan reputasi yang tinggi. Tim kami mengedepankan pendekatan mediasi yang bijak, menjaga kerahasiaan privasi, serta memastikan hak masa depan anak terlindungi.',
    iconName: 'HeartHandshake',
    leadLawyerId: 'clarissa-nadine',
    servicesList: [
      'Perjanjian Pra-Nikah (Prenuptial) & Pasca-Nikah (Postnuptial)',
      'Gugatan / Permohonan Perceraian di Pengadilan Agama dan Pengadilan Negeri',
      'Perebutan Hak Asuh Anak & Tuntutan Nafkah Pemeliharaan',
      'Gugatan Pembagian Harta Bersama (Gono-Gini)',
      'Perencanaan Wasiat, Surat Keterangan Waris (SKW), dan Penetapan Ahli Waris',
      'Adopsi Anak & Pengesahan Asal-Usul Anak'
    ],
    workflow: [
      { step: '01', title: 'Konsultasi Privat & Kerahasiaan Penuh', desc: 'Diskusi tatap muka di ruang tertutup dengan jaminan Non-Disclosure Agreement (NDA).' },
      { step: '02', title: 'Upaya Rekonsiliasi & Mediasi Damai', desc: 'Mengutamakan kesepakatan damai atas pembagian hak asuh anak dan harta gono-gini.' },
      { step: '03', title: 'Pendaftaran Berkas ke Pengadilan', desc: 'Penyusunan surat gugatan/permohonan secara rapi dan menjaga kehormatan kedua belah pihak.' },
      { step: '04', title: 'Penerbitan Akta & Penetapan Resmi', desc: 'Mengawal penerbitan akta cerai atau penetapan waris hingga salinan resmi diterima.' }
    ],
    faqs: [
      {
        question: 'Apakah perjanjian pra-nikah masih bisa dibuat jika sudah terlanjur menikah?',
        answer: 'Bisa. Berdasarkan Putusan Mahkamah Konstitusi No. 69/PUU-XIII/2015, pasangan dapat membuat Perjanjian Perkawinan selama ikatan perkawinan masih berlangsung (Postnuptial Agreement) dengan pengesahan notaris dan pencatatan resmi.'
      }
    ]
  }
];

