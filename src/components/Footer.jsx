import { motion } from 'framer-motion';

export default function Footer() {
  // Pastikan array sosial media / nav items ada di sini atau di-import dari data
  const socialLinks = [
    // contoh data: { label: 'GitHub', icon: IconComponent, url: 'https://...' }
  ];

  return (
    <footer className="w-full py-8">
      {/* 1. Perbaikan Mapping Icon & Tag JSX */}
      <div className="flex justify-center gap-4">
        {socialLinks.map((item, index) => (
          <motion.a
            key={item.label || index} // Penambahan key unique
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-green-400/20 bg-white/5 p-3.5 text-green-400 hover:bg-green-400/10 transition-colors"
            aria-label={item.label}
          >
            <item.icon className="text-lg sm:text-xl" />
          </motion.a>
        ))}
      </div>

      {/* 2. Gradient Divider Line (Pembersihan Karakter Spasi Unik) */}
      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent" />

      {/* 3. Main Info & Copyright */}
      <div className="flex w-full flex-col items-center justify-between gap-3 text-center text-xs text-slate-400">
        <p>
          © {new Date().getFullYear()} Dimas Nur Ilham. All Rights Reserved.
        </p>
        <p className="text-slate-400">
          Built with{' '}
          <span className="text-green-400 font-medium">React.js</span> •{' '}
          <span className="text-green-400 font-medium">Tailwind CSS</span> •{' '}
          <span className="text-green-400 font-medium">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}