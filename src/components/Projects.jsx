import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.find((project) => project.featured) || projects[0];
  const others = projects.filter((project) => project.id !== featured?.id);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Featured{" "}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Projects
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400 sm:mb-16 sm:text-base">
          Beberapa proyek yang telah saya kerjakan menggunakan teknologi modern
          untuk membangun aplikasi web yang responsif dan scalable.
        </p>

        {/* Featured Card */}
        {featured && (
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl border border-green-400/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_35px_rgba(57,255,20,.3)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Gambar Featured dengan aspect-ratio agar proporsional */}
              <div className="relative aspect-video w-full overflow-hidden lg:h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Konten Featured */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
                    {featured.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-justify">
                    {featured.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-green-400/30 bg-green-400/5 px-3 py-1 text-xs text-green-300 sm:px-4 sm:py-1.5 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol Aksi (Full width di HP) */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-green-400 px-5 py-3 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}

                  {featured.demo && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-green-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h3 className="mb-6 text-xl font-semibold text-white sm:mb-8 sm:text-2xl">
              Other Projects
            </h3>

            {/* Grid Kartu Proyek Lainnya (Equal Height) */}
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {others.map((project, index) => (
                <motion.div
                  key={project.id || project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-green-400/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(57,255,20,.25)]"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-green-400/20 bg-green-400/5 px-2.5 py-1 text-xs text-green-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Link Repo di Bagian Bawah Kartu */}
                  <div className="px-6 pb-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-green-400 transition-colors duration-200 hover:text-green-300 hover:underline"
                      >
                        <FaGithub size={18} />
                        View Repository
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}