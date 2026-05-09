import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Savannah Nguyen",
    role: "Regular Foodie",
    text: "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=savannah"
  },
  {
    name: "Esther Howard",
    role: "Local Guide",
    text: "The Taipo Momos are easily the best in Guwahati. Authentic flavor, huge portions, and the price is unbelievable for the quality you get. Highly recommended for any fast food lover!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=esther"
  },
  {
    name: "Marvin McKinney",
    role: "College Student",
    text: "Perfect spot for college students. The combos are super filling and cheap. I love the vibe here, it's always energetic and the food service is incredibly fast.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=marvin"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm text-[10px]">What Our Customer Says</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Our Guest Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-cream p-10 rounded-[3rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-brand-orange/10"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                ))}
              </div>

              <p className="text-brand-dark/70 italic leading-relaxed mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-bold text-brand-dark">{t.name}</h5>
                  <p className="text-xs font-bold text-brand-orange/60 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
