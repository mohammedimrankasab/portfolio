import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Professional experience building scalable backend systems and cloud-native platforms.">
          Experience
        </SectionHeading>

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 md:left-1/2" />

          <div className="space-y-10">
            {PORTFOLIO_DATA.experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUpVar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 -translate-x-1/2 md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-zinc-950" />
                </div>

                {/* Content */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-blue-500/40 transition-all">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>

                      <p className="text-blue-400 font-medium">
                        {item.company}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.period}
                      </p>
                    </div>

                    <p className="text-zinc-300 leading-7 mb-5">
                      {item.description}
                    </p>

                    <ul className="space-y-3">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm text-zinc-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}