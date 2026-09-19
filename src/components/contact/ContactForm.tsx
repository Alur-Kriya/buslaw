import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { practiceAreas } from '../../data/services';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: 'hukum-korporasi',
    message: '',
    consent: true,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert('Mohon lengkapi kolom yang wajib diisi.');
      return;
    }

    setStatus('submitting');
    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col bg-white border border-emerald-200 shadow-sm rounded-xl p-6 sm:p-10 text-center space-y-4 animate-fade-in">
        <div className="size-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F1E36] font-serif">
          Permintaan Konsultasi Diterima
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Terima kasih, <strong>{formData.fullName}</strong>. Tim sekretariat hukum Buslaw & Partners akan segera menghubungi Anda melalui kontak yang tertera dalam waktu maksimal 1x24 jam kerja.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                practiceArea: 'hukum-korporasi',
                message: '',
                consent: true,
              });
            }}
            className="text-xs font-semibold text-[#B19047] hover:underline cursor-pointer"
          >
            ← Kirim Permintaan Lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white border border-slate-200 shadow-xs rounded-xl p-6 sm:p-8 md:p-10 space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-[#0F1E36] font-serif mb-1.5">
          Formulir Permohonan Konsultasi
        </h3>
        <p className="text-xs text-slate-500">
          Semua rincian yang Anda sampaikan dilindungi oleh prinsip kerahasiaan hubungan advokat-klien.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nama Lengkap */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Nama Lengkap <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="mis. Hendra Gunawan, S.E."
            className="py-3 px-4 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Email Resmi <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="hendra@perusahaan.com"
            className="py-3 px-4 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors"
          />
        </div>

        {/* Nomor Telepon / WhatsApp */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Nomor WhatsApp / Telepon <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+62 812 3456 7890"
            className="py-3 px-4 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors"
          />
        </div>

        {/* Perusahaan / Instansi */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Nama Perusahaan / Instansi (Opsional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="mis. PT Citra Dinamika Mandiri"
            className="py-3 px-4 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Pilihan Bidang Praktik */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Kategori Layanan Hukum Terkait <span className="text-rose-500">*</span>
        </label>
        <select
          value={formData.practiceArea}
          onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
          className="py-3 px-4 pe-9 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors cursor-pointer"
        >
          {practiceAreas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.title} ({area.titleEn})
            </option>
          ))}
          <option value="lainnya">Lainnya / Perkara Khusus</option>
        </select>
      </div>

      {/* Pesan / Ringkasan Kasus */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Ringkasan Duduk Perkara atau Kebutuhan <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Ceritakan secara garis besar latar belakang masalah hukum yang dihadapi, dokumen yang dimiliki, atau tujuan hukum yang diinginkan..."
          className="py-3 px-4 block w-full border border-slate-200 rounded-lg text-sm focus:border-[#C8A961] focus:ring-1 focus:ring-[#C8A961] bg-[#FAF8F5] focus:bg-white transition-colors resize-none"
        ></textarea>
      </div>

      {/* Checkbox Kerahasiaan */}
      <div className="flex items-start gap-x-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="size-4 shrink-0 mt-0.5 border-slate-300 rounded text-[#C8A961] focus:ring-[#C8A961] cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
          Saya menyetujui pengiriman data ini untuk dipelajari oleh tim advokat Buslaw & Partners dengan jaminan kerahasiaan penuh.
        </label>
      </div>

      {/* Preline Styled Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold uppercase tracking-wider rounded-lg border border-transparent bg-[#0F1E36] text-white hover:bg-[#1E3760] focus:outline-hidden shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
      >
        {status === 'submitting' ? (
          <span>Mengirim Data Rahasia...</span>
        ) : (
          <>
            <Send className="size-4 text-[#C8A961]" />
            <span>Kirim Permohonan Konsultasi</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-x-2 text-[11px] text-slate-400">
        <ShieldCheck className="size-4 text-emerald-600" />
        <span>Data dienkripsi dan diproteksi oleh Kode Etik Advokat Indonesia</span>
      </div>
    </form>
  );
}
