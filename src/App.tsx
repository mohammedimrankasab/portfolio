import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PORTFOLIO_DATA } from "./components/data/portfolio";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

import AnimatedCursor from "./components/ui/AnimatedCursor";
import MouseGlow from "./components/ui/MouseGlow";
import ScrollProgress from "./components/ui/ScrollProgress";
import LoadingScreen from "./components/ui/LoadingScreen";
import { initAnalytics, pageView } from "./utils/analytics";

export default function PortfolioApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  useEffect(() => {
    initAnalytics();
    pageView();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 font-sans antialiased selection:bg-blue-500/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Decorative effects only on larger screens */}
          <div className="hidden xl:block">
            <AnimatedCursor />
            <MouseGlow />
          </div>

          <ScrollProgress />

          <Navbar />

          <main className="overflow-hidden">
            <Hero personal={PORTFOLIO_DATA.personal} />

            <About />

            <Experience />

            <Projects />

            <Skills />

            <Certifications />
          </main>

          <Contact />
        </motion.div>
      )}
    </div>
  );
}
