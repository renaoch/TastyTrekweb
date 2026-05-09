import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop",
    alt: "Signature Hyderabadi Biryani",
    tag: "Chef's Choice",
    icon: "🍲"
  },
  {
    url: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000&auto=format&fit=crop",
    alt: "Authentic Himalayan Momos",
    tag: "Best Seller",
    icon: "🥟"
  },
  {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    alt: "Healthy Gourmet Platter",
    tag: "Trending",
    icon: "🥗"
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[95vh] flex items-center bg-brand-cream/50" id="hero">
      {/* Sun Doodle */}
      <motion.div 
        style={{ y: sunY, rotate: sunRotate }}
        className="absolute top-10 left-10 md:top-20 md:left-20 z-0 pointer-events-none opacity-20"
      >
        <svg width="120" height="120" viewBox="0 0 200 200" className="text-brand-orange fill-transparent stroke-current stroke-[6]">
          <circle cx="100" cy="100" r="40" />
          {[...Array(8)].map((_, i) => (
            <line 
              key={i}
              x1="100" y1="40" x2="100" y2="10"
              transform={`rotate(${i * 45} 100 100)`}
              strokeLinecap="round"
            />
          ))}
          <path d="M85,90 Q90,85 95,90" strokeLinecap="round" />
          <path d="M105,90 Q110,85 115,90" strokeLinecap="round" />
          <path d="M85,115 Q100,130 115,115" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Dynamic Parallax Background elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-orange/5 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-400/5 rounded-full blur-[100px] -z-10" 
      />
      
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 space-y-6 md:space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-xl shadow-brand-orange/20"
            >
              <Star className="w-4 h-4 fill-white" />
              <span className="uppercase tracking-widest">Guwahati's #1 Fast Food</span>
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.95] text-brand-dark"
              >
                Truly <br />
                <span className="text-brand-orange italic underline decoration-brand-orange/20">Delicious</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-brand-dark/60 max-w-lg mx-auto lg:mx-0 text-base md:text-xl leading-relaxed font-medium md:pt-4"
              >
                Savor the authentic Himalayan Momos, legendary Biryani, and Indian-Chinese fusion. Every bite is a journey through spices and tradition.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-8"
            >
              <button className="w-full sm:w-auto bg-brand-dark text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-orange transition-all duration-500 shadow-2xl shadow-brand-dark/20 group">
                Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-brand-dark/5 text-brand-dark px-12 py-5 rounded-full font-bold hover:border-brand-orange hover:text-brand-orange transition-all duration-500 flex items-center justify-center gap-2">
                Explore Menu
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-brand-dark/5"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-brand-dark">12k+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reviews</span>
              </div>
              <div className="w-[1px] h-10 bg-brand-dark/10" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-brand-dark">15min</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery</span>
              </div>
              <div className="w-[1px] h-10 bg-brand-dark/10" />
              <div className="flex flex-col items-center lg:items-start text-brand-orange font-bold">
                 <div className="flex gap-0.5 mb-0.5">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                 </div>
                 <span className="text-[10px] uppercase tracking-widest leading-none">Top Rated</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ scale }}
            className="flex-1 order-1 lg:order-2 relative"
          >
            <motion.div 
              style={{ y: y2 }}
              className="relative w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto"
            >
              <motion.div 
                style={{ rotate }}
                className="absolute inset-[-10%] border-2 border-brand-orange/20 rounded-full border-dashed -z-10" 
              />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIdx}
                  initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="absolute inset-0 bg-white rounded-[4rem_12rem_6rem_10rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border-[10px] sm:border-[20px] border-white relative z-10 group"
                >
                  <img 
                    src={heroImages[currentIdx].url} 
                    alt={heroImages[currentIdx].alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroImages.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-white w-6' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Floating Parallax Elements */}
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
                className="absolute -bottom-4 -left-4 md:bottom-20 md:-left-20 bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-white"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl md:text-3xl animate-spin-slow">
                  {heroImages[currentIdx].icon}
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                    {heroImages[currentIdx].tag}
                  </p>
                  <p className="font-bold text-sm md:text-xl">
                    {heroImages[currentIdx].alt.split(' ').slice(-1)}
                  </p>
                </div>
              </motion.div>

              {/* Carousel Controls */}
              <div className="absolute top-1/2 -left-12 -right-12 -translate-y-1/2 flex justify-between z-30 hidden md:flex">
                <button 
                  onClick={() => setCurrentIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setCurrentIdx((prev) => (prev + 1) % heroImages.length)}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

