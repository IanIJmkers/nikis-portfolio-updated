const MarqueeStrip = ({ reverse = false }) => {
  const text =
    "DESIGN — STRATEGY — SUSTAINABILITY — EDITORIAL — FASHION — IDENTITY — BRANDING — ";

  return (
    <div className="w-full py-2.5 md:py-3 bg-black overflow-hidden select-none">
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-[7px] md:text-[8px] text-gold/60 tracking-[3px] uppercase font-light shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
