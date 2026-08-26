import { motion } from "framer-motion";

const stats = [
  {
    value: "2+",
    title: "Projects",
  },
  {
    value: "5+",
    title: "Tech Stack",
  },
  {
    value: "Open",
    title: "To Work",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Title */}
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:mb-14 sm:text-4xl lg:text-5xl">
          Tentang{" "}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Saya
          </span>
        </h2>

        {/* Main Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          
          {/* LEFT CARD */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <div>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-justify">
                Lulusan Universitas Nusa Putra program studi Sistem Informasi 
                yang telah menyelesaikan skripsi. Saya memiliki ketertarikan yang 
                besar dalam pengembangan aplikasi web modern, khususnya menggunakan 
                Laravel, React.js, PostgreSQL, dan Tailwind CSS.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-justify">
                Saat ini saya berfokus untuk menjadi seorang Fullstack Developer
                yang mampu membangun aplikasi yang cepat, aman, scalable, serta
                memiliki pengalaman pengguna yang baik.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-green-400/30 bg-black/40 p-3 text-center transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] sm:p-5"
                >
                  <h3 className="text-xl font-bold text-green-400 sm:text-2xl lg:text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex h-full items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl border border-green-400/30 bg-white/5 p-8 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(57,255,20,0.15)] transition-all duration-300 hover:border-green-400/50 hover:shadow-[0_0_35px_rgba(57,255,20,0.25)] sm:p-10">
              <div className="mb-4 text-6xl sm:text-7xl">
                👨‍💻
              </div>

              <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
                Fullstack Developer
              </h3>

              <p className="mt-4 max-w-sm text-sm text-slate-300 sm:text-base">
                Passionate dalam membangun aplikasi web modern, clean architecture, REST API, UI/UX, dan optimasi performa aplikasi.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}