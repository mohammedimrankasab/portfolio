import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="A brief overview of my professional journey and technical focus.">
          About Me
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            variants={fadeUpVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 text-zinc-300 mb-8">
              {PORTFOLIO_DATA.personal.about}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-zinc-800 pt-6">
              {PORTFOLIO_DATA.stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-3"
            variants={fadeUpVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PORTFOLIO_DATA.highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-blue-500/40 transition-all"
                >
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400 h-fit">
                    {Icon && <Icon size={22} />}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400 leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}