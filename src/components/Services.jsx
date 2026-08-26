import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          What <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">I Do</span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-slate-400 sm:mb-16 sm:text-base">
          Saya berfokus pada pengembangan aplikasi web modern mulai dari
          frontend, backend, database, hingga implementasi antarmuka yang
          responsif.
        </p>

        {/* Responsive Grid dengan Equal Height */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group flex flex-col justify-between rounded-3xl border border-green-400/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(57,255,20,.3)] sm:p-8"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="mb-6 inline-flex shrink-0 items-center justify-center rounded-2xl bg-green-400/10 p-3.5 text-green-400 transition-all duration-300 group-hover:bg-green-400/20 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] sm:p-4">
                    <Icon className="text-3xl transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}