import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { navItems, firmContact } from '../../data/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
        className="relative z-50 p-2 text-slate-100 hover:text-[#C8A961] focus:outline-none transition-colors"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#0F1E36] border-l border-[#C8A961]/25 z-40 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="pt-4 pb-6 border-b border-slate-700/60">
            <div className="text-xl font-bold tracking-wider text-white font-serif">
              BUSLAW <span className="text-[#C8A961] font-sans text-sm">& PARTNERS</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Advocates & Legal Consultants
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-all text-base font-medium group"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#C8A961] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Emergency Contact */}
        <div className="pt-6 border-t border-slate-700/60 space-y-3">
          <a
            href={`https://wa.me/${firmContact.whatsapp}?text=Halo%20Buslaw,%20saya%20ingin%20berkonsultasi%20mengenai%20perkara%20hukum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#C8A961] hover:bg-[#D8BD7E] text-[#0F1E36] font-semibold py-3 px-4 rounded-lg shadow-md transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Konsultasi Cepat WA</span>
          </a>
          <p className="text-center text-xs text-slate-400">
            SCBD, Jakarta Selatan
          </p>
        </div>
      </div>
    </div>
  );
}

