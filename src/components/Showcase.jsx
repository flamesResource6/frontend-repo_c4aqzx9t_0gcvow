import { ExternalLink } from "lucide-react";

const work = [
  {
    title: "SaaS Dashboard",
    desc: "A data-rich analytics dashboard with custom charts and dark mode.",
    href: "#",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Charts"],
  },
  {
    title: "E‑commerce Store",
    desc: "High-conversion storefront with clean product browsing and checkout.",
    href: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "UI/UX"],
  },
  {
    title: "Marketing Site",
    desc: "Minimal, performance-first landing page with A/B testing.",
    href: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Vite", "SEO", "Content"],
  },
];

function Showcase() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-300">A snapshot of projects focused on clarity, performance, and results.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {work.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-blue-500/40 transition block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-white text-slate-900 flex items-center justify-center group-hover:-translate-y-0.5 group-hover:shadow-md transition">
                    <ExternalLink size={16} />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
