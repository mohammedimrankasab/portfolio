import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitFork,
  Star,
  Calendar,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { PORTFOLIO_DATA } from "../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { useGithubRepos } from "../hooks/useGithubRepos";

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
  const repoStats = useGithubRepos();

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading subtitle="Open-source libraries and enterprise-grade backend systems focused on scalability, performance and cloud-native engineering.">
          Featured Projects
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-3">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const Icon = project.icon;
            const stats = project.repo
              ? repoStats[project.repo]
              : undefined;

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
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
              >
                {/* Header */}

                <div
                  className={`flex h-28 items-start justify-between bg-gradient-to-br ${project.color} p-6`}
                >
                  <Icon
                    size={34}
                    className="text-white opacity-90 transition-transform duration-300 group-hover:scale-110"
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

                {/* Body */}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-5 min-h-[88px] leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-700 bg-zinc-800/70 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}

                  <div className="mt-auto border-t border-zinc-800 pt-5">
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Star
                          size={15}
                          className="text-yellow-400"
                        />

                        {stats ? (
                          stats.stargazers_count
                        ) : (
                          <span className="text-zinc-600">
                            ...
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        <GitFork
                          size={15}
                          className="text-sky-400"
                        />

                        {stats ? (
                          stats.forks_count
                        ) : (
                          <span className="text-zinc-600">
                            ...
                          </span>
                        )}
                      </div>

                      {stats?.language && (
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                          {stats.language}
                        </span>
                      )}
                    </div>

                    {stats && (
                      <div className="mb-5 flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar size={13} />

                        Updated{" "}
                        {new Date(
                          stats.pushed_at
                        ).toLocaleDateString()}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div />

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
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}