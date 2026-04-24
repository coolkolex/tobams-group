import Image from "next/image";
import Link from "next/link";
import { skills } from "./Helper";

function LightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#5C1048] flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

export default function CEOSection() {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-12 max-w-[1440px] mx-auto" aria-label="Transformation Hub with Jite Newton">
      <div className="bg-[#FFE8EC] rounded-3xl p-8 lg:p-12">
        {/* Header text */}
        <div className="mb-8">
          <p className="font-[family-name:var(--font-playfair)] text-[#5C1048] text-base md:text-lg italic font-semibold mb-2">
            Learning With Our CEO:
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[#3D0A30] text-2xl md:text-3xl lg:text-4xl font-bold italic mb-5">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your career or enhance your
            leadership skills, the Transformation Hub provides a transformative learning experience
            to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        {/* Bottom: image + skills grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=800&q=80"
                alt="Professional woman in front of digital data display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Skills + CTA */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
            {/* Skills grid */}
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              role="list"
              aria-label="Topics covered in Transformation Hub"
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-4 shadow-sm"
                >
                  <LightningIcon />
                  <span className="text-gray-800 font-medium text-sm md:text-base">{skill}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#5C1048] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#3D0A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5C1048] focus:ring-offset-2"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
