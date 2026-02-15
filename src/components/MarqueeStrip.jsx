const MarqueeStrip = ({ reverse = false }) => {
  const text =
    "DESIGN — STRATEGY — SUSTAINABILITY — EDITORIAL — FASHION — IDENTITY — BRANDING — ";

  return (
    <div className="w-full py-3 md:py-4 bg-black overflow-hidden select-none">
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-[9px] md:text-[10px] text-gold/60 tracking-[4px] uppercase font-light shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
