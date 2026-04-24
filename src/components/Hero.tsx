import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center overflow-hidden" aria-label="Training and Development hero">
      {/* Background image using a dark gradient overlay to match the design */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
        role="img"
        aria-label="Professional working at a computer with data visualizations"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D0D1A]/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
        {/* Pill badge */}
        <div className="inline-block mb-6">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase px-6 py-2.5 rounded-full border border-white/30">
            WHAT WE DO
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Training and Development
        </h1>

        {/* Subtext */}
        <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden
          knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-block bg-[#5C1048] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#3D0A30] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
