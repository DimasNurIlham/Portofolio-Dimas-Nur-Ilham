import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-green-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Work{" "}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Experience
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-slate-400 sm:mb-16 sm:text-base">
          Beberapa pengalaman dalam mengembangkan aplikasi web menggunakan
          Laravel, React.js, Tailwind CSS, serta membangun REST API dan sistem
          yang responsif.
        </p>

        {/* Experience List */}
        <div className="space-y-6 sm:space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-green-400/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(57,255,20,.25)] sm:p-8 lg:p-10"
            >
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
                
                {/* LEFT: Info & Tech Stack */}
                <div className="flex flex-col justify-between lg:col-span-2">
                  <div>
                    {/* Header: Icon, Company, Role, Period */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="shrink-0 rounded-2xl bg-green-400/10 p-3 text-green-400 sm:p-3.5">
                        <FaBriefcase className="text-xl sm:text-2xl" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                          {exp.company}
                        </h3>

                        <p className="font-semibold text-green-400 sm:text-lg">
                          {exp.role}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8">
                      {exp.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs text-green-300 sm:px-4 sm:py-1.5 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT: Responsibilities */}
                <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <h4 className="mb-4 text-base font-semibold text-green-400 sm:text-lg">
                    Responsibilities
                  </h4>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.responsibilities.map((task, tIndex) => (
                      <li
                        key={tIndex}
                        className="flex items-start gap-3 text-sm text-slate-300 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_8px_#39FF14]" />
                        <span className="leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}