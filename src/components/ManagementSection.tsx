import Image from "next/image";
import { features } from "./Helper";

function LightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-white flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

export default function ManagementSection() {
  return (
    <section
      className="py-6 px-4 md:px-6 lg:px-12 max-w-[1440px] mx-auto"
      aria-label="Management Development Program"
    >
      <div className="bg-[#3D0A30] rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Image - left on desktop, top on mobile */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] lg:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Three professionals collaborating and reviewing information on a tablet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content - right */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Management Development Program
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              Tobams Group offers a comprehensive Management Development Program designed to equip
              corporate organisations with the high-performing leaders they need to thrive.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
              Our program includes workshops, seminars, coaching sessions, online courses, and
              experiential learning opportunities designed to improve leadership, strategic thinking,
              communication, and other essential managerial competencies for corporate organisations.
            </p>

            {/* Feature pills */}
            <ul className="flex flex-col gap-3" role="list">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 bg-[#5C1048]/60 border border-[#7A2060]/40 px-5 py-3.5 rounded-xl"
                >
                  <LightningIcon />
                  <span className="text-white font-semibold text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
