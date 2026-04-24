"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "./Helper";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-14 lg:py-20 px-6 lg:px-12 bg-white" aria-label="Testimonials">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        {/* Desktop: show 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10" role="list">
          {testimonials.slice(0, 3).map((t) => (
            <article
              key={t.id}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 border-l-4 border-l-[#FF4D6D]"
              role="listitem"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#FF4D6D]/20">
                  <Image
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
            </article>
          ))}
        </div>

        {/* Mobile: single card slider */}
        <div className="md:hidden mb-8">
          <article
            className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 border-l-4 border-l-[#FF4D6D]"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#FF4D6D]/20">
                <Image
                  src={testimonials[current].avatar}
                  alt={`Photo of ${testimonials[current].name}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base">{testimonials[current].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">{testimonials[current].quote}</p>
          </article>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-[#FFE8EC] flex items-center justify-center text-[#FF4D6D] hover:bg-[#FF4D6D] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#FFE8EC] flex items-center justify-center text-[#FF4D6D] hover:bg-[#FF4D6D] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
