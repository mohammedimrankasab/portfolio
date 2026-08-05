import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-[#09090b] pt-16 pb-10 overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            Let's build something
            <br />
            <span className="text-zinc-500">extraordinary.</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-xl text-zinc-400 mb-6 max-w-xl"
          >
            Open for new opportunities and interesting projects. Let's connect.
          </motion.p>

          <motion.a
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            href={PORTFOLIO_DATA.personal.links.email}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />

            {PORTFOLIO_DATA.personal.links.email.replace("mailto:", "")}
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-white/10">
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href={PORTFOLIO_DATA.personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-2"
            >
              <FaGithub size={24} />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-2"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-1"
            >
              Resume
              <Download size={14} />
            </a>
          </div>

          <div className="text-center md:text-right text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Kasab Mohammed Imran</p>

            <p className="mt-1 text-xs text-zinc-600">
              Designed & Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
