import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { menuData } from "../data/menu";
import { Star, Plus, X, Search, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["All", "Momo", "Breakfast", "Rolls", "Snacks", "Main Course", "Noodles & Rice"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = activeCategory === "All" 
    ? menuData.slice(0, 3) 
    : menuData.filter(item => item.category === activeCategory).slice(0, 3);

  const modalFilteredMenu = menuData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Regular Menu Pack</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Fresh and Healthy Food</h2>
          </div>
          <div className="flex items-center gap-4">
             {/* Horizontal Scrollable Categories */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 max-w-[400px]">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                    activeCategory === cat 
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" 
                      : "bg-brand-cream text-brand-dark hover:bg-brand-orange/10"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-brand-orange font-bold hover:gap-3 transition-all"
            >
              View Full Menu <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMenu.map((item) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group bg-brand-cream rounded-[2.5rem] p-6 hover:bg-white hover:shadow-2xl hover:shadow-brand-dark/5 transition-all duration-500 border border-transparent hover:border-brand-orange/10"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] bg-white shadow-inner">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '')}/500/500`} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold">4.8</span>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-orange/60">{item.category}</p>
                  <h3 className="font-bold text-xl leading-tight group-hover:text-brand-orange transition-colors">{item.name}</h3>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-bold text-2xl text-brand-dark">₹{item.price.replace('/-', '')}</span>
                  <button className="w-12 h-12 bg-brand-dark text-white rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-all duration-300 transform active:scale-95 group-hover:rotate-6">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Menu Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-brand-dark/60 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-full"
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-brand-dark">Tasty Trek Signature Menu</h3>
                    <p className="text-gray-500">Explore our complete collection of flavors</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search flavor..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-11 pr-6 py-3 bg-brand-cream border-none rounded-full text-sm focus:ring-2 focus:ring-brand-orange/20 w-full sm:w-64"
                      />
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="p-3 bg-brand-cream hover:bg-brand-orange/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-8 bg-brand-cream">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modalFilteredMenu.length > 0 ? (
                      modalFilteredMenu.map((item) => (
                        <div key={item.name} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                          <img 
                            src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '')}/100/100`} 
                            className="w-20 h-20 rounded-xl object-cover" 
                            alt={item.name}
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1">
                            <p className="text-[9px] uppercase font-bold text-brand-orange">{item.category}</p>
                            <h4 className="font-bold text-brand-dark">{item.name}</h4>
                            <p className="font-bold text-lg">₹{item.price.replace('/-', '')}</p>
                          </div>
                          <button className="p-2 bg-brand-cream hover:bg-brand-orange hover:text-white rounded-xl transition-colors">
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-20 text-center text-gray-400 italic">No delicious items found matching your search...</div>
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-8 bg-white border-t border-gray-100 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">{modalFilteredMenu.length} Items listed</p>
                  <button className="bg-brand-orange text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-brand-orange/20 hover:scale-105 transition-transform">
                    Order Selection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
