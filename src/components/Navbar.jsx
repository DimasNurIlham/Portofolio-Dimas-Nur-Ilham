import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#timeline" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ======================================
  // Scroll Detection
  // ======================================
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ======================================
  // Scroll Spy V2
  // ======================================
  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const id = link.href.replace("#", "");
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ======================================
  // Auto Close Mobile Menu
  // ======================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* ========================= */}
      {/* TOP PROGRESS BAR (Posisi presisi di paling atas window) */}
      {/* ========================= */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-green-400 shadow-[0_0_12px_rgba(57,255,20,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
      >
        <motion.div
          animate={{ width: isScrolled ? "90%" : "94%" }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className={`relative max-w-7xl overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 lg:rounded-full ${
            isScrolled
              ? "border-green-400/20 bg-[#050816]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-green-400/10"
              : "border-white/10 bg-[#050816]/60"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "px-4 py-3" : "px-4 py-3.5"
            } sm:px-6 sm:py-4 lg:px-8 ${isScrolled ? "lg:py-3" : "lg:py-4"}`}
          >
            {/* ========================= */}
            {/* LOGO & NAMA (Mencegah teks terpotong / turun baris) */}
            {/* ========================= */}
            <a href="#hero" className="group flex items-center gap-3 shrink-0">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.08 }}
                transition={{ duration: 0.8 }}
                className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-green-400 bg-green-400/10 text-lg font-bold text-green-400 shadow-[0_0_20px_rgba(57,255,20,0.35)]"
              >
                I
              </motion.div>

              <div className="hidden sm:block whitespace-nowrap">
                <h2 className="text-base sm:text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-green-400 leading-snug">
                  Dimas Nur Ilham
                </h2>

                <p className="text-xs text-gray-400 leading-none">Full Stack Developer</p>
              </div>
            </a>

            {/* ========================= */}
            {/* DESKTOP MENU */}
            {/* ========================= */}
            <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className={`group relative rounded-full px-4 xl:px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-green-400"
                        : "text-gray-300 hover:text-green-400"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-full border border-green-400/30 bg-green-400/10 shadow-[0_0_18px_rgba(57,255,20,0.18)]"
                      />
                    )}

                    <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                      {item.name}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            {/* ========================= */}
            {/* RIGHT ACTION */}
            {/* ========================= */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group hidden items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-5 xl:px-6 py-2 text-sm font-medium text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.45)] lg:flex"
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 400 }}
                  className="group-hover:translate-x-1"
                >
                  <Download size={16} />
                </motion.div>

                <span>Resume</span>
              </motion.a>

              {/* ========================= */}
              {/* MOBILE BUTTON */}
              {/* ========================= */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                aria-label={
                  open ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={open}
                aria-controls="mobile-navigation"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-green-400 lg:hidden"
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* ========================= */}
          {/* MOBILE MENU */}
          {/* ========================= */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden border-t border-white/10 bg-[#050816]/40 lg:hidden"
              >
                <div className="space-y-1 p-4 sm:p-5">
                  {navLinks.map((item, index) => {
                    const isActive =
                      activeSection === item.href.replace("#", "");

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        whileHover={{ y: -2, scale: 1.04 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05, duration: 0.25 }}
                        className={`relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "border border-green-400/20 bg-green-400/10 text-green-400"
                            : "text-gray-300 hover:bg-green-400/10 hover:text-green-400"
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}

                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.35 }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-green-400/40 bg-green-400/10 py-3 font-medium text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.45)]"
                  >
                    <Download size={18} />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  );
}