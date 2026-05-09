import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight">Tasty Trek</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Serving authentic Himalayan and Chinese flavors in the heart of Guwahati. From our kitchen to your heart.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-white/50 hover:text-brand-orange cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-white/50 hover:text-brand-orange cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/50 hover:text-brand-orange cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#hero" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Book Order</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>opp. heaven gold, Gandhi Basti, Tiniali, Guwahati, Assam 781003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>070024 64651</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>hello@tastytrek.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-white/60 text-sm">Subscribe to get latest updates and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-brand-orange/50"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-orange text-white px-6 rounded-full text-xs font-bold hover:bg-white hover:text-brand-orange transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 text-center text-white/40 text-xs">
          <p>© 2026 Tasty Trek Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
