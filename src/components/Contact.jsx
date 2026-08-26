import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "dimasnurilham24@gmail.com",
    link: "mailto:dimasnurilham24@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+62 812-8123-2581",
    link: "https://wa.me/6281281232581",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/dimasnurilham",
    link: "https://linkedin.com/in/dimasnurilham",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/DimasNurIlham",
    link: "https://github.com/DimasNurIlham",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Let's <span className="text-green-400 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Connect</span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400 sm:mb-16 sm:text-base">
          Saya terbuka untuk kesempatan Internship, Full-Time maupun
          Freelance. Jangan ragu untuk menghubungi saya.
        </p>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* LEFT: Contact Info Cards */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-green-400/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_25px_rgba(57,255,20,.25)] sm:gap-5 sm:p-5"
                >
                  <div className="shrink-0 rounded-xl bg-green-400/10 p-3.5 text-green-400 transition-colors duration-300 group-hover:bg-green-400/20 sm:p-4">
                    <Icon className="text-xl sm:text-2xl" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="truncate text-xs text-slate-400 sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* RIGHT: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-green-400/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-300 sm:text-sm">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-green-400/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-green-400 focus:shadow-[0_0_15px_rgba(57,255,20,0.3)] sm:px-5 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-300 sm:text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-green-400/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-green-400 focus:shadow-[0_0_15px_rgba(57,255,20,0.3)] sm:px-5 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-300 sm:text-sm">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-green-400/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-green-400 focus:shadow-[0_0_15px_rgba(57,255,20,0.3)] sm:px-5 sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-400 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.01] hover:bg-green-300 hover:shadow-[0_0_30px_rgba(57,255,20,.5)] sm:py-3.5 sm:text-base"
              >
                Send Message
              </button>
            </div>
          </motion.form>

        </div>
      </motion.div>
    </section>
  );
}