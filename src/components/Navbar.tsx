import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-brand-orange/10"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-orange/20">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">Tasty Trek</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-brand-orange transition-colors uppercase tracking-widest text-[10px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 hover:bg-brand-cream rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-brand-orange text-white text-[10px] rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button className="hidden sm:block bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-brand-orange transition-all duration-300">
            BOOK TABLE
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 bg-brand-cream rounded-full hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center"
          >
            {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-brand-dark hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="w-full bg-brand-orange text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-orange/20">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

