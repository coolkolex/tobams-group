import Link from "next/link";

interface CTABannerProps {
  desktopText?: string;
  mobileText?: string;
}

export default function CTABanner({
  desktopText = "Want to accelerate professional growth and development at your organisation? See how we can help.",
  mobileText = "Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.",
}: CTABannerProps) {
  return (
    <section className="bg-[#5C1048] py-14 lg:py-16 px-6 lg:px-12" aria-label="Call to action">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8">
        {/* Desktop text */}
        <p className="hidden md:block text-white text-lg lg:text-xl font-medium leading-relaxed max-w-3xl">
          {desktopText}
        </p>
        {/* Mobile text */}
        <p className="md:hidden text-white text-lg font-medium leading-relaxed">
          {mobileText}
        </p>

        <Link
          href="#"
          className="inline-block bg-white text-[#5C1048] px-10 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5C1048]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
