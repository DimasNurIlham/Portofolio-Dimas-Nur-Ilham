import { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { certificates } from "../data/certificates";

// Kategori disesuaikan dengan data sertifikat Anda
const categories = ["All", "Technical", "Web Dev", "Database", "Soft Skills"];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCertificates =
    activeTab === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeTab);

  return (
    <section id="certificates" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Certifications & <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Licenses</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400 sm:text-base">
          Bukti validasi keahlian teknis, pemrosesan database, hingga pengembangan web yang telah saya selesaikan.
        </p>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                activeTab === cat
                  ? "bg-green-400 text-slate-950 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                  : "border border-green-400/20 bg-white/5 text-slate-300 hover:border-green-400/50 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col justify-between rounded-3xl border border-green-400/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(57,255,20,.2)] sm:p-8"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-2xl bg-green-400/10 p-3.5 text-green-400 transition-colors duration-300 group-hover:bg-green-400/20">
                    <FaAward className="text-2xl" />
                  </div>
                  <span className="rounded-full border border-green-400/20 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-400">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-green-400">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{cert.issuer}</p>

                {/* Skills Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 rounded-lg bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 border border-green-400/20"
                    >
                      <FaCheckCircle className="text-[10px] text-green-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Link */}
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-green-400 transition-all hover:underline"
                >
                  View PDF Certificate <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : (
                <div className="mt-6 text-xs text-slate-500 italic">Verified Certificate</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}