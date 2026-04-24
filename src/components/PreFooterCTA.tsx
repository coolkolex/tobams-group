import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="bg-[#2A0620] py-10 px-6 lg:px-12" aria-label="Work with us">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white/70 text-sm md:text-base mb-2">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-white text-xl md:text-2xl lg:text-3xl font-bold">
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="#"
          className="flex-shrink-0 bg-[#5C1048] text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#7A1A5E] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2A0620]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
