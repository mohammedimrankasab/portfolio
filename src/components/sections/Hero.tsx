import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { fadeUpVar, staggerContainer } from "../utils/animations";
import { trackEvent } from "../../utils/analytics";

const particles = Array.from({ length: 8 }).map((_, index) => ({
  id: index,
  size: Math.random() * 8 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
}));

interface HeroProps {
  personal: {
    name: string;
    headline: string;
    subtitle: string;
    links: {
      github: string;
      linkedin: string;
      resume: string;
    };
  };
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Availability */}
          <motion.div
            variants={fadeUpVar}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpVar}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 leading-[1.05]"
          >
            Building
            <br className="hidden md:block" />
            scalable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">
              {" "}
              backend platforms.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVar}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed"
          >
            I'm{" "}
            <span className="font-semibold text-white">{personal.name}</span>, a{" "}
            {personal.headline}.
            <br className="hidden md:block" />
            {personal.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVar}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={personal.links.resume}
              className="group inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-zinc-200 transition"
              download
              onClick={() => trackEvent("Resume", "Download", "Hero Section")}
            >
              Download Resume
              <Download
                size={18}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#111111] border border-white/10 px-6 py-3 rounded-full text-white hover:bg-white/5 transition"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition"
                onClick={() => trackEvent("Social", "GitHub", "Hero")}
              >
                <FaGithub size={22} />
              </a>

              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition"
                onClick={() => trackEvent("Social", "LinkedIn", "Hero")}
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
