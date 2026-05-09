import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const items = [
  "AUTHENTIC MOMOS", "•", "GUWAHATI'S FAVORITE", "•", "TASTY TREK SPECIAL", "•", "CHINESE DELIGHTS", "•", "KING OF TAIPO", "•", "HAND-CRAFTED FLAVORS", "•"
];

export default function ScrollingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="py-10 bg-brand-orange overflow-hidden border-y-4 border-brand-dark flex flex-col gap-4">
      <motion.div 
        style={{ x: x1 }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            className="text-white text-5xl md:text-7xl font-serif font-black flex-shrink-0 opacity-80"
          >
            {item}
          </span>
        ))}
      </motion.div>
      
      <motion.div 
        style={{ x: x2 }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            className="text-brand-dark text-5xl md:text-7xl font-serif font-black flex-shrink-0 opacity-20 italic"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
