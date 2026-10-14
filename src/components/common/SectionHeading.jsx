import Reveal from "../ui/Reveal";

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  tagVariant = "default",
  className = "",
}) {
  const isCenter = align === "center";
  const isFloral = tagVariant === "floral";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {tag && (
        <Reveal y={12}>
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
              isFloral
                ? "bg-[#FDF2F0] text-[#B85D4F] border border-[#F3C8BE]"
                : "bg-[#F6F6F4] text-[#686868] border border-[#E7E7E7]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isFloral ? "bg-[#BE5A4D]" : "bg-[#171717]"
              }`}
            />
            {tag}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.08} y={16}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15]">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.15} y={16}>
          <p className="mt-4 text-base sm:text-lg text-[#686868] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeading;
