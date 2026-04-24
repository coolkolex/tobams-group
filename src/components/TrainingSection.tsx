import Image from "next/image";

interface TrainingItem {
  icon: string;
  label: string;
}

interface TrainingSectionProps {
  title: string;
  description: string;
  items: TrainingItem[];
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
}

function LightningIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#5C1048] flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

export default function TrainingSection({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  imageRight = false,
}: TrainingSectionProps) {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div
        className={`flex flex-col ${
          imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 lg:gap-16 items-start lg:items-center`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1A1A2E] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3" role="list">
            {items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <LightningIcon />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
