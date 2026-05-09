import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[60vh] relative overflow-hidden bg-brand-dark flex items-center justify-center">
      {/* Background with Parallax Effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-dark/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop" 
          alt="Food Atmosphere" 
          className="w-full h-[120%] object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Crafted with Love</span>
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
          Where Every Bite Tells <br /> A <span className="text-brand-orange italic">Delicious Story</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
                <p className="text-white text-2xl md:text-3xl font-bold">50k+</p>
                <p className="text-white/60 text-[10px] font-bold uppercase mt-1">Happy Clients</p>
            </div>
            <div className="hidden md:block w-[1px] bg-white/20" />
            <div className="text-center">
                <p className="text-white text-2xl md:text-3xl font-bold">100%</p>
                <p className="text-white/60 text-[10px] font-bold uppercase mt-1">Fresh Ingredients</p>
            </div>
            <div className="hidden md:block w-[1px] bg-white/20" />
            <div className="text-center">
                <p className="text-white text-2xl md:text-3xl font-bold">25+</p>
                <p className="text-white/60 text-[10px] font-bold uppercase mt-1">Daily Specials</p>
            </div>
        </div>
      </motion.div>

      {/* Floating Elements for extra Parallax Feel */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="w-24 h-24 bg-brand-orange/20 backdrop-blur-md rounded-full flex items-center justify-center text-3xl animate-bounce">
          🥟
        </div>
      </motion.div>
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-20 hidden lg:block"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
          🥢
        </div>
      </motion.div>
    </section>
  );
}
