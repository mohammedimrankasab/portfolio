import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { PORTFOLIO_DATA } from "../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";

const statusStyles: Record<string, string> = {
  Production:
    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",

  "Open Source":
    "bg-blue-500/20 text-blue-300 border-blue-500/30",

  "In Progress":
    "bg-amber-500/20 text-amber-300 border-amber-500/30",

  Experimental:
    "bg-purple-500/20 text-purple-300 border-purple-500/30",

  Learning:
    "bg-zinc-700/40 text-zinc-300 border-zinc-600",
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Open-source libraries and enterprise-grade backend systems focused on scalability, performance, and cloud-native engineering.">
          Featured Projects
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={fadeUpVar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]"
              >
                {/* Header */}
                <div
                  className={`flex h-28 items-start justify-between bg-gradient-to-br ${project.color} p-6`}
                >
                  <Icon
                    size={34}
                    className="text-white opacity-90"
                  />

                  {project.status && (
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${
                        statusStyles[project.status] ??
                        "border-zinc-700 bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-5 min-h-[84px] leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-2 py-1 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-4 text-xs text-zinc-500">
                      {project.stars !== undefined && (
                        <span>⭐ {project.stars}</span>
                      )}

                      {project.forks !== undefined && (
                        <span>⑂ {project.forks}</span>
                      )}
                    </div>

                    <div className="flex gap-5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
                        >
                          <FaGithub size={18} />
                          Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
                        >
                          Live
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}