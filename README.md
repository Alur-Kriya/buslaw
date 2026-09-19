# Buslaw & Partners — Website Profil Firma Hukum

Website profil profesional dan modern untuk firma hukum **Buslaw & Partners (Advocates & Legal Counsel)**, dibangun dengan teknologi **Astro 5**, **Tailwind CSS 4**, dan **React 19 Islands**.

---

## 🌟 Fitur Utama

- **Islands Architecture**: Rendering statis super cepat (SSG) dengan interaktivitas selektif via React (Mobile Nav, Form Kontak, Testimonial Slider).
- **Dewan Advokat**: Menampilkan 6 pengacara dengan halaman profil mendalam (`/tim/[id]`) mencakup riwayat pendidikan, keanggotaan PERADI/BANI, lisensi, dan rekam jejak kasus.
- **6 Bidang Praktik**: Halaman bidang praktik spesialisasi (`/layanan/[slug]`) dengan detail penanganan, alur kerja, FAQ, dan Lead Counsel terkait:
  1. Hukum Korporasi & Bisnis
  2. Hukum Perdata & Sengketa Komersial
  3. Hukum Properti & Agraria
  4. Hukum Ketenagakerjaan & Hubungan Industrial
  5. Hukum Pidana & Investigasi Kejahatan Bisnis
  6. Hukum Keluarga & Waris
- **Artikel / Blog Hukum**: Publikasi edukasi hukum (`/artikel/[slug]`) dengan layout artikel profesional.
- **Form Konsultasi Interaktif**: Validasi form kontak dengan pilihan bidang hukum spesifik.
- **Floating WhatsApp**: Tombol respon cepat terintegrasi langsung ke kontak resmi firma.
- **SEO & Aksesibilitas**:
  - Meta tags, Open Graph, dan Canonical URLs di setiap halaman.
  - Generasi otomatis XML Sitemap (`@astrojs/sitemap`).
  - File `robots.txt` terkonfigurasi.
  - Zero TypeScript/Astro diagnostics errors or warnings.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Interaktivitas UI**: [React 19](https://react.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Sitemap**: `@astrojs/sitemap`
- **Type Checking**: `@astrojs/check` + `TypeScript 5`

---

## 📁 Struktur Direktori

```text
buslaw/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/         # Header, Footer, MobileNav, Button, SectionTitle, WhatsAppFloat
│   │   ├── home/           # Hero, Stats, Services, AboutPreview, TeamHighlight, Testimonials, CTASection
│   │   └── contact/        # ContactForm
│   ├── data/               # Data statis (team, services, articles, stats, testimonials, navigation)
│   ├── layouts/            # BaseLayout, PageLayout
│   ├── pages/              # Routing Astro (index, tentang-kami, tim, layanan, artikel, kontak, 404)
│   └── styles/             # global.css (Tailwind CSS 4 theme)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Panduan Menjalankan

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Akses di browser melalui: `http://localhost:4321`

### 3. Pemeriksaan Tipe & Diagnostik (Typecheck)
```bash
npm run check
# atau: npx astro check
```

### 4. Membangun untuk Produksi (Build)
```bash
npm run build
```
File siap saji akan dibuat di dalam direktori `dist/`.

### 5. Menjalankan Preview Hasil Build
```bash
npm run preview
```

---

## ⚖️ Lisensi & Hak Cipta
Hak Cipta © 2026 Buslaw & Partners. Seluruh hak cipta dilindungi undang-undang.
