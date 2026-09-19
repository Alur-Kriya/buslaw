export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorId: string;
  publishDate: string;
  readTime: string;
  image: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: 'art-1',
    slug: 'panduan-legal-due-diligence-merger-akuisisi-indonesia',
    title: 'Panduan Praktis Legal Due Diligence dalam Transaksi Akuisisi Perusahaan di Indonesia',
    excerpt: 'Langkah-langkah krusial bagi investor dan manajemen dalam membedah risiko tersembunyi sebelum menandatangani perjanjian pengikatan jual beli saham (CSPA).',
    category: 'Korporasi & Investasi',
    authorId: 'bambang-sudirman',
    publishDate: '12 Agustus 2025',
    readTime: '6 menit baca',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    content: [
      'Legal Due Diligence (LDD) atau uji tuntas dari segi hukum merupakan pilar paling fundamental dalam setiap aksi merger dan akuisisi (M&A). Tanpa pemeriksaan dokumen yang seksama, pembeli berisiko menanggung kewajiban utang tersembunyi atau sengketa perizinan yang dapat membekukan operasional target.',
      'Secara garis besar, ruang lingkup LDD mencakup verifikasi legalitas pendirian badan hukum, struktur permodalan dan riwayat pengalihan saham, perizinan berusaha berbasis risiko (OSS-RBA), kepatuhan ketenagakerjaan, serta riwayat sengketa atau perkara yang berpotensi timbul di masa depan.',
      'Salah satu temuan yang paling sering muncul adalah ketidaksesuaian antara data administrasi di Kemenkumham dengan kenyataan pemegang saham di lapangan, serta klausul perubahan kendali (change of control) pada kontrak pembiayaan bank eksisting yang belum mendapat persetujuan tertulis.',
      'Oleh karenanya, menyusun laporan LDD yang tajam dan mengintegrasikan hasil temuannya ke dalam klausul ganti rugi (indemnity clause) pada Perjanjian Pembelian Saham adalah kunci sukses melindungi investasi Anda.'
    ]
  },
  {
    id: 'art-2',
    slug: 'mitigasi-risiko-pkpu-dan-kepailitan-bagi-kreditur-komersial',
    title: 'Strategi Kreditur Menghadapi Permohonan Penundaan Kewajiban Pembayaran Utang (PKPU)',
    excerpt: 'Memahami hak kreditur konkuren dan separatis serta taktik negosiasi dalam pemungutan suara (voting) rencana perdamaian di Pengadilan Niaga.',
    category: 'Litigasi & Kepailitan',
    authorId: 'sarah-prameswari',
    publishDate: '28 Juli 2025',
    readTime: '5 menit baca',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    content: [
      'Proses PKPU sering kali menjadi pedang bermata dua: di satu sisi memberi ruang bagi debitur untuk bernapas dan merestrukturisasi utang, namun di sisi lain dapat menahan arus kas kreditur untuk waktu yang cukup lama jika tidak dikawal dengan cermat.',
      'Kreditur wajib segera mendaftarkan tagihannya beserta bukti pendukung asli sebelum batas waktu verifikasi yang ditetapkan oleh Pengurus PKPU. Keterlambatan dapat mengakibatkan hilangnya hak suara dalam rapat kreditur.',
      'Dalam tahap voting rencana perdamaian, kreditur perlu menguji apakah skema cicilan yang diajukan realistis dengan proyeksi arus kas debitur, atau sekadar manuver untuk mengulur waktu eksekusi jaminan.',
      'Kombinasi antara negosiasi di luar sidang dan ketegasan dalam rapat verifikasi pengurus menjadi kunci mengamankan pembayaran piutang maksimal bagi kreditur.'
    ]
  },
  {
    id: 'art-3',
    slug: 'urgensi-perjanjian-kawin-prenup-dalam-perlindungan-aset-bisnis',
    title: 'Urgensi Perjanjian Perkawinan (Prenup) Bagi Pengusaha dan Profesional Muda',
    excerpt: 'Bagaimana memisahkan harta pribadi dari risiko tuntutan utang usaha pasangan dan menjamin kepemilikan aset keluarga tetap aman.',
    category: 'Hukum Keluarga & Privat',
    authorId: 'clarissa-nadine',
    publishDate: '15 Juni 2025',
    readTime: '4 menit baca',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    content: [
      'Stigma di masyarakat sering menganggap perjanjian pra-nikah (prenuptial agreement) sebagai tanda keraguan atas kelanggengan rumah tangga. Padahal dalam perspektif hukum bisnis modern, perjanjian perkawinan adalah instrumen manajemen risiko keluarga yang sangat bijaksana.',
      'Bila seorang pengusaha mengalami gagal bayar dan dinyatakan pailit tanpa adanya perjanjian pemisahan harta, maka seluruh harta bersama (termasuk rumah tempat tinggal atau tabungan atas nama pasangan) dapat disita oleh kurator untuk melunasi utang bisnis.',
      'Dengan adanya akta notariil perjanjian perkawinan yang dicatatkan di KUA atau Kantor Catatan Sipil, batas kepemilikan aset masing-masing pihak menjadi jelas dan terlindungi dari tuntutan pihak ketiga.',
      'Pembuatan perjanjian ini kini bahkan dapat dilakukan setelah perkawinan dilangsungkan (postnuptial agreement) berdasarkan putusan MK No. 69/PUU-XIII/2015.'
    ]
  }
];

