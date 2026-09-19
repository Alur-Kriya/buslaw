import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-x-1.5 py-1 px-3.5 rounded-full text-xs font-medium bg-[#C8A961]/15 text-[#B19047] border border-[#C8A961]/30">
            <span className="size-1.5 inline-block rounded-full bg-[#C8A961]"></span>
            <span>Testimonial Klien</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1E36] font-serif">
            Kepercayaan dari Pemimpin Bisnis & Klien Terkemuka
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Testimoni otentik mengenai dedikasi advokasi dan penyelesaian perkara bernilai strategis oleh tim Buslaw.
          </p>
        </div>

        {/* Preline Styled Testimonial Card */}
        <div className="relative bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10 md:p-12">
          <div className="absolute -top-5 left-10 size-11 rounded-xl bg-[#0F1E36] text-[#C8A961] flex items-center justify-center shadow-md">
            <Quote className="size-5 fill-current" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
            <div className="space-y-6 flex-grow">
              {/* Star Rating */}
              <div className="flex items-center gap-x-1 text-[#C8A961]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="size-4.5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-[#0F1E36] italic font-serif leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-base font-bold text-[#0F1E36] font-sans">
                  {current.clientName}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {current.clientTitle} — <span className="text-[#B19047]">{current.company}</span>
                </p>
                <span className="inline-flex items-center gap-x-1 mt-2.5 py-0.5 px-2.5 rounded-md bg-slate-100 text-[11px] text-slate-600 font-medium border border-slate-200">
                  Kasus: {current.practiceArea}
                </span>
              </div>
            </div>

            {/* Preline Navigation Controls */}
            <div className="flex items-center gap-x-2 shrink-0 self-end md:self-center">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="size-10 inline-flex justify-center items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-[#0F1E36] hover:text-[#C8A961] hover:border-[#0F1E36] focus:outline-hidden transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="size-10 inline-flex justify-center items-center rounded-lg border border-[#0F1E36] bg-[#0F1E36] text-[#C8A961] shadow-xs hover:bg-[#C8A961] hover:text-[#0F1E36] hover:border-[#C8A961] focus:outline-hidden transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Preline Dots Indicator */}
          <div className="flex items-center justify-center gap-x-2 mt-8 pt-4 border-t border-slate-100">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-7 bg-[#C8A961]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
