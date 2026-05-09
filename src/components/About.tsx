import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-brand-cream overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" 
                alt="Chef Cooking" 
                className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl mt-12"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" 
                alt="Healthy Bowl" 
                className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white p-8 rounded-full border-[12px] border-brand-cream shadow-2xl text-center">
              <p className="text-4xl font-bold leading-none">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Years Exp</p>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm">We Are More Than Multiple Service</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Bringing The Best <br /> Flavors To Guwahati
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed">
              Tasty Trek is more than just a restaurant; it's a destination for food lovers who crave quality and authenticity. From our signature Taipo Momos to our legendary Chilli Chicken, every dish is prepared with the freshest ingredients and traditional recipes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <MapPin className="w-5 h-5 text-brand-orange" />, title: "Prime Location", desc: "Gandhi Basti, Guwahati" },
                { icon: <Clock className="w-5 h-5 text-brand-orange" />, title: "Open All Days", desc: "8:00 AM - 11:00 PM" },
                { icon: <CheckCircle2 className="w-5 h-5 text-brand-orange" />, title: "Clean Kitchen", desc: "Top Food Safety Standards" },
                { icon: <Phone className="w-5 h-5 text-brand-orange" />, title: "Fast Delivery", desc: "Hot meals at your door" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5">
                  <div className="mt-1 bg-brand-orange/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{item.title}</h5>
                    <p className="text-xs text-brand-dark/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl shadow-brand-dark/10">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
