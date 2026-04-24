import Link from "next/link";

const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultantSection() {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-12 bg-[#F0EBF4]" aria-label="Training The Consultant">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-[#3D0A30] text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Training The Consultant
          </h2>
          <p className="text-[#5C1048] font-bold text-base md:text-lg mb-4">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            With the help of our Training Consultants program, take a revolutionary step toward
            becoming a distinguished certified training consultant. Learn from professionals in the
            field, immerse yourself in a thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you to gain expertise in
            diverse courses while also developing the abilities to mentor and encourage others in
            their career advancement.
          </p>
        </div>

        {/* Features grid */}
        <div className="bg-[#5C1048] rounded-2xl p-8 lg:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-[#5C1048] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#3D0A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5C1048] focus:ring-offset-2"
        >
          Learn More
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
