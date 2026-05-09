import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Heart, UtensilsCrossed } from "lucide-react";

export default function ChefSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const crownY = useTransform(scrollYProgress, [0, 1], [-20, -100]);
  const crownRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="flex-1 relative">
            <div className="relative group">
              {/* Crown Doodle Overlay */}
              <motion.div 
                style={{ y: crownY, rotate: crownRotate }}
                className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-[30] pointer-events-none"
              >
                <svg width="100" height="100" md:width="120" md:height="120" viewBox="0 0 200 200" className="text-brand-orange fill-transparent stroke-current stroke-[8]">
                  <path d="M40,100 L40,40 L80,70 L100,20 L120,70 L160,40 L160,100 L40,100 Z" className="animate-pulse" />
                  <circle cx="40" cy="40" r="10" fill="currentColor" />
                  <circle cx="100" cy="20" r="10" fill="currentColor" />
                  <circle cx="160" cy="40" r="10" fill="currentColor" />
                </svg>
              </motion.div>

              {/* Chef Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-brand-cream">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop" 
                  alt="Our Master Chef" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent flex flex-col justify-end p-12">
                   <h3 className="text-3xl font-serif font-bold text-white mb-1">Chef Priyash</h3>
                   <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">Founder & Head Chef</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange rounded-full flex items-center justify-center p-8 border-[12px] border-white shadow-2xl -rotate-12 group-hover:rotate-0 transition-transform">
                <p className="text-white font-bold text-center leading-tight">Master of Himalayan Flavors</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px]">The King of Kitchen</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark leading-tight">
                Meet The Master <br /> Behind The Magic
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                With over a decade of culinary expertise, Chef Priyash brings the soul of the Himalayas to your plate. Every dumpling is hand-crafted, every sauce is house-made, and every flavor is a tribute to tradition.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Award className="w-6 h-6" />, title: "Best Fast Food Guwahati", desc: "Awarded for exceptional authenticity and quality." },
                { icon: <UtensilsCrossed className="w-6 h-6" />, title: "Original Recipes", desc: "Our secret spice blends have been passed down for generations." },
                { icon: <Heart className="w-6 h-6" />, title: "Passionate Cooking", desc: "We don't just serve food; we serve experiences." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start p-6 rounded-3xl hover:bg-brand-orange/5 transition-all"
                >
                  <div className="bg-brand-orange text-white p-3 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
