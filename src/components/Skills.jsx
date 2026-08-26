import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Tech{" "}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Stack
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400 sm:mb-16 sm:text-base">
          Teknologi yang saya gunakan dalam membangun aplikasi web modern,
          mulai dari frontend, backend, database, hingga tools pengembangan.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                }}
                className="group flex flex-col items-center justify-between rounded-2xl border border-green-400/10 bg-white/5 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] sm:rounded-3xl sm:p-6"
              >
                {/* Icon Wrapper */}
                <div className="flex items-center justify-center pt-2">
                  <Icon
                    className="text-4xl text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_#39FF14] sm:text-5xl"
                  />
                </div>

                {/* Skill Name & Badge Container */}
                <div className="mt-4 flex flex-col items-center">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {skill.name}
                  </h3>

                  {/* Badge */}
                  <span className="mt-2 inline-block rounded-full border border-green-400/30 bg-green-400/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-300 sm:px-3 sm:py-1 sm:text-xs">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}