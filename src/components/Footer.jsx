import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/DimasNurIlham",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/dimasnurilham",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:dimasnurilham24@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-green-400/10 bg-[#0B1120]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo Avatar */}
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-green-400 bg-green-400/10 text-3xl font-bold text-green-400 shadow-[0_0_25px_rgba(57,255,20,.35)] sm:mb-6 sm:h-20 sm:w-20 sm:text-4xl">
            I
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ilham
          </h2>

          {/* Role */}
          <p className="mt-1 text-sm font-medium text-green-400 sm:text-base">
            Full Stack Web Developer
          </p>

          {/* Short Bio */}
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm sm:leading-7">
            Building modern web applications with clean code, responsive
            interfaces, and scalable backend solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4 sm:gap-5">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.12,
                    y: -3,
                  }}
                  className="rounded-full border border-green-400/20 bg-white/5 p-3.5 text-green-400 backdrop-blur-md transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(57,255,20,.35)] sm:p-4"
                  aria-label={item.label}
                >
                  <Icon className="text-lg sm:text-xl" />
                </motion.a>
              );
            })}
          </div>

          {/* Gradient Divider Line */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent sm:my-10" />

          {/* Bottom Info */}
          <div className="flex w-full flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:text-sm md:flex-row">
            <p>
              © {new Date().getFullYear()} Dimas Nur Ilham. All Rights Reserved.
            </p>

            <p className="text-slate-400">
              Built with <span className="text-green-400 font-medium">React.js</span> •{" "}
              <span className="text-green-400 font-medium">Tailwind CSS</span> •{" "}
              <span className="text-green-400 font-medium">Framer Motion</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-green-400 bg-green-400 p-3 text-slate-950 shadow-[0_0_20px_rgba(57,255,20,.45)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,.7)] sm:bottom-6 sm:right-6 sm:p-3.5"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-base sm:text-lg" />
      </motion.button>
    </footer>
  );
}