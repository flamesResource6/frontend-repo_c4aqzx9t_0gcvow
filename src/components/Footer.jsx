import { Mail, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-slate-300 max-w-md">I’m available for new projects and collaborations. Reach out and I’ll reply within 24 hours.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:shadow-md transition">
              <Mail size={16} /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
              <Github size={16} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
