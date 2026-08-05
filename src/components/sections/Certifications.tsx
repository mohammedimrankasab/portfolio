import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Professional certifications and continuous learning.">
          Certifications
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <motion.div
              key={`${cert.title}-${cert.year}`}
              variants={fadeUpVar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex flex-col hover:border-blue-500/40 transition-all"
            >
              <Shield
                className="text-teal-400 mb-4"
                size={18}
              />

              <h3 className="text-white font-medium leading-6">
                {cert.title}
              </h3>

              <div className="mt-auto pt-5 flex justify-between items-center text-sm text-zinc-500">
                <span>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}