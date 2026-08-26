export default function Background() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-50 bg-[#0F172A]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-40 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(57,255,20,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow kiri */}
      <div className="fixed left-[-200px] top-[-100px] -z-30 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />

      {/* Glow kanan */}
      <div className="fixed right-[-200px] bottom-[-100px] -z-30 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[140px]" />
    </>
  );
}