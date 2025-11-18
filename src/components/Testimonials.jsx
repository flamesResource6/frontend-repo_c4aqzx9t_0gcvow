const testimonials = [
  {
    quote:
      "They delivered beyond expectations — crisp design, tight execution, and a smooth collaboration from start to finish.",
    name: "Avery Thompson",
    role: "Product Lead, Lumen",
  },
  {
    quote:
      "A rare mix of aesthetic taste and engineering depth. Our launch went flawlessly and conversions improved immediately.",
    name: "Jordan Lee",
    role: "Founder, Northbound",
  },
  {
    quote:
      "Process was clear and fast. The final result feels polished and genuinely helpful to our users.",
    name: "Samira Patel",
    role: "Head of Growth, Vanta",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What clients say</h2>
          <p className="mt-3 text-slate-300">Real feedback from teams I’ve partnered with.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-blue-500/40 transition">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4">
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
