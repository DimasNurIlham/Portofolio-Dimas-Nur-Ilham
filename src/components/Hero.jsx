import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-green-400/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Container Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        
        {/* Profile Image Column (Pindah ke atas di mobile, kanan di desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:order-2"
        >
          <div className="rounded-full border border-green-400/40 bg-[#0F172A]/60 p-2 shadow-[0_0_35px_rgba(57,255,20,0.35)]">
            <img
              src={profile}
              alt="Profile"
              className="h-36 w-36 rounded-full object-cover sm:h-48 sm:w-48 lg:h-64 lg:w-64"
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center md:items-start md:text-left md:order-1"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, Saya
            <br />
            <span className="text-green-400 drop-shadow-[0_0_15px_#39FF14]">
              Dimas Nur Ilham
            </span>
          </h1>

          <div className="min-h-[40px]">
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Laravel Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-xl font-semibold text-green-400 sm:text-2xl"
            />
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Lulusan Universitas Nusa Putra program studi Sistem Informasi yang telah
            menyelesaikan skripsi dan memiliki antusias tinggi dalam membangun
            aplikasi web modern menggunakan Laravel, React.js, PostgreSQL, dan Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="rounded-full bg-green-400 px-8 py-4 font-semibold text-black shadow-[0_0_25px_rgba(57,255,20,0.45)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(57,255,20,0.7)]"
            >
              Lihat Proyek Saya
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="rounded-full border border-green-400/60 px-8 py-4 font-semibold text-green-400 transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.45)]"
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-5">
            <motion.a
              href="https://github.com/DimasNurIlham"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="text-slate-400 transition-colors duration-300 hover:text-green-400 hover:drop-shadow-[0_0_10px_#39FF14]"
            >
              <FaGithub size={28} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dimasnurilham/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="text-slate-400 transition-colors duration-300 hover:text-green-400 hover:drop-shadow-[0_0_10px_#39FF14]"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}