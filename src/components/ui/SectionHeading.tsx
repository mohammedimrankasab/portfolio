import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeUpVar } from "../utils/animations";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      variants={fadeUpVar}
      className="mb-10 md:mb-24"
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {children}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-lg text-zinc-400">
          {subtitle}
        </p>
      )}

      <div className="mt-3 h-px w-full max-w-xs bg-gradient-to-r from-blue-500/50 to-transparent" />
    </motion.div>
  );
}