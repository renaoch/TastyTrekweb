import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import ParallaxBanner from "./components/ParallaxBanner";
import Combos from "./components/Combos";
import Testimonials from "./components/Testimonials";
import BackToTop from "./components/BackToTop";
import ChefSection from "./components/ChefSection";
import ScrollingMarquee from "./components/ScrollingMarquee";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-brand-cream text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <ScrollingMarquee />
        <Menu />
        <ParallaxBanner />
        <ChefSection />
        <Combos />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
