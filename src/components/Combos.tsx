import { motion } from "motion/react";
import { Coffee, Flame, Heart, ShoppingCart, Star } from "lucide-react";

const combos = [
  {
    title: "Indian Feast Combo",
    desc: "Chicken Butter Masala (2pc) with Jeera Rice or Laccha Paratha",
    price: "₹200.00",
    tag: "Most Popular",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Chinese Classic Combo",
    desc: "Veg/Chicken Manchurian with choice of Rice or Noodles",
    price: "₹130.00",
    tag: "Best Value",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Combos() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="space-y-4 max-w-xl">
             <h4 className="text-brand-orange font-bold uppercase tracking-widest text-[10px]">Pocket Friendly Deals</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Special Weekly Combos</h2>
             <p className="text-gray-500">Don't miss out on our curated combos that give you the perfect meal deal at an unbeatable price.</p>
          </div>
          <button className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl shadow-brand-dark/10">
            View All Packs
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {combos.map((combo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 relative h-64 sm:h-auto">
                <img src={combo.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={combo.title} referrerPolicy="no-referrer" />
                <div className={`absolute top-6 left-6 ${combo.color} text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                    {combo.tag}
                </div>
              </div>
              <div className="sm:w-1/2 p-10 flex flex-col justify-center gap-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-brand-dark leading-tight">{combo.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{combo.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-brand-orange">{combo.price}</span>
                    <button className="bg-brand-dark p-4 rounded-2xl text-white hover:bg-brand-orange transition-all transform active:scale-90">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promo Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
                { icon: <Flame className="w-6 h-6" />, label: "Spicy Treats" },
                { icon: <Heart className="w-6 h-6" />, label: "Organic Food" },
                { icon: <Coffee className="w-6 h-6" />, label: "Refreshing Drinks" },
                { icon: <Star className="w-6 h-6" />, label: "Top Rated" },
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] flex flex-col items-center gap-4 hover:bg-brand-orange hover:text-white transition-all cursor-pointer group">
                    <div className="bg-brand-orange/10 p-4 rounded-2xl flex items-center justify-center group-hover:bg-white/20">
                        {item.icon}
                    </div>
                    <span className="font-bold text-sm">{item.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
