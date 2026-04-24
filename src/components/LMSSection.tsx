import Image from "next/image";
import Link from "next/link";
import { courses } from "./Helper";

export default function LMSSection() {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-12 bg-[#F0EBF4]" aria-label="Learning Management System">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Circular image */}
          <div className="w-full lg:w-1/2 flex justify-center flex-shrink-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Two business professionals smiling in a bright office environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-[family-name:var(--font-playfair)] text-[#3D0A30] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Learning Management System
            </h2>

            {/* Description box */}
            <div className="bg-[#DDD3E6] rounded-2xl p-6 mb-6">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                TG Academy is a hub of knowledge and skill-building resources designed to empower
                tech talents on their learning journey. From technical courses covering the latest
                programming languages and development frameworks to soft skills training in
                leadership, effective communication and project management, TG Academy offers a wide
                range of courses to cater to diverse learning needs. With accessible and interactive
                learning materials, individuals can enhance their skills and stay ahead in
                today&apos;s competitive tech landscape.
              </p>

              <p className="text-[#3D0A30] font-bold text-sm md:text-base mb-4">
                Some of our courses include:
              </p>

              {/* Courses grid */}
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2" role="list">
                {courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" aria-hidden="true" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>

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
    </section>
  );
}
