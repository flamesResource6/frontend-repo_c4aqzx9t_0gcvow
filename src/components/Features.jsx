import { Code2, Palette, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Robust Engineering",
    desc: "Clean, scalable codebases with performance in mind.",
  },
  {
    icon: Palette,
    title: "Thoughtful Design",
    desc: "Minimal, accessible interfaces with crisp typography.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Iterative, transparent process to ship quickly.",
  },
  {
    icon: Shield,
    title: "Best Practices",
    desc: "Security, testing, and modern tooling baked in.",
  },
];

function Features() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300">End-to-end product design and development for modern web apps and sites.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-blue-500/40 hover:bg-white/10 transition shadow-sm hover:shadow-blue-500/10"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
