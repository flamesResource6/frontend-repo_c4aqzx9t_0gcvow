import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-24 md:pb-32 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/20">
            Available for freelance work
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Crafting clean, modern digital experiences
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
            I build fast, accessible, and delightful products for the web — from landing pages to complex applications. Let’s bring your ideas to life with thoughtful design and solid engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:shadow-slate-900/20 transition"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              View portfolio
            </a>
          </div>
        </div>

        {/* Spline container */}
        <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-blue-500/10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
