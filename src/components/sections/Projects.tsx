import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitFork,
  Star,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { formatRelativeDate } from "../utils/date";
import { PORTFOLIO_DATA } from "../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeUpVar } from "../utils/animations";
import { useGithubRepos } from "../hooks/useGithubRepos";

const statusStyles: Record<string, string> = {
  Production: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",

  "Open Source": "bg-blue-500/20 text-blue-300 border-blue-500/30",

  "In Progress": "bg-amber-500/20 text-amber-300 border-amber-500/30",

  Experimental: "bg-purple-500/20 text-purple-300 border-purple-500/30",

  Learning: "bg-zinc-700/40 text-zinc-300 border-zinc-600",
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
            const stats = project.repo ? repoStats[project.repo] : undefined;

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
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-yellow-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mb-5 leading-7 text-zinc-400">
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

                  {project.highlights && (
                    <div className="mb-6 space-y-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />

                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer */}

                  <div className="mt-auto border-t border-zinc-800 pt-5">
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800/70 px-3 py-1 text-zinc-300">
                        <Star size={13} className="text-yellow-400" />
                        <span>{stats ? stats.stargazers_count : "..."}</span>
                      </div>

                      <div className="flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800/70 px-3 py-1 text-zinc-300">
                        <GitFork size={13} className="text-sky-400" />
                        <span>{stats ? stats.forks_count : "..."}</span>
                      </div>

                      {stats?.language && (
                        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-300">
                          {stats.language}
                        </div>
                      )}
                    </div>

                    {stats && (
                      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar size={13} />
                        Updated {formatRelativeDate(stats.pushed_at)}
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
                            className="flex items-center gap-2 font-medium text-zinc-300 transition-colors hover:text-white"
                          >
                            <FaGithub size={18} />
                            View Code
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
                          >
                            Live Demo
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
