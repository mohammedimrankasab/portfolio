import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-[#0a0a0c]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Technologies, platforms and engineering practices I use to build scalable backend systems.">
          Technical Expertise
        </SectionHeading>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {Object.entries(PORTFOLIO_DATA.skills).map(
            ([category, data], index) => {
              const Icon = data.icon;

              return (
                <motion.div
                  key={category}
                  variants={fadeUpVar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/5 bg-[#111111] p-6 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-zinc-800 bg-[#09090b] px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Engineering Practices */}
        <motion.div
          variants={fadeUpVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 border-t border-zinc-800 pt-12"
        >
          <h3 className="mb-8 text-2xl font-semibold text-white">
            Engineering Practices
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.practices.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {group.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-blue-500/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}