import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2022 - 2026",
    school: "Universitas Nusa Putra",
    degree: "S1 Sistem Informasi",
    description:
      "Mempelajari pengembangan perangkat lunak, analisis sistem, basis data, UI/UX, serta pengembangan aplikasi web. Membangun sistem operasional restoran terintegrasi berbasis web sebagai tugas akhir.",
  },
  {
    year: "2019 - 2022",
    school: "SMKN 2 Sukabumi",
    degree: "Rekayasa Perangkat Lunak",
    description:
      "Mempelajari dasar-dasar pemrograman, basis data, jaringan komputer, dan pengembangan aplikasi berbasis web sebagai fondasi memasuki dunia software development.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Education <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">& Journey</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-slate-400 sm:mb-20 sm:text-base">
          Perjalanan pendidikan yang membentuk dasar pengetahuan dan
          keterampilan saya dalam bidang pengembangan perangkat lunak.
        </p>

        {/* Timeline Container */}
        <div className="relative ml-4 border-l border-green-400/30 pl-6 sm:ml-8 sm:pl-10">
          {education.map((item, index) => (
            <motion.div
              key={item.school || index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative mb-12 last:mb-0 sm:mb-16"
            >
              {/* Timeline Dot (Presisi Vertikal dengan Garis) */}
              <div className="absolute -left-[41px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-green-400 bg-[#0F172A] shadow-[0_0_15px_#39FF14] sm:-left-[57px] sm:h-10 sm:w-10">
                <GraduationCap className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-green-400/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(57,255,20,.25)] sm:p-8"
              >
                <span className="inline-block rounded-full border border-green-400/30 bg-green-400/5 px-3 py-1 text-xs font-semibold text-green-400 sm:text-sm">
                  {item.year}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  {item.school}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  {item.degree}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}