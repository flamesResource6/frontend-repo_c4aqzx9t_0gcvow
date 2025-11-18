import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(50%_40%_at_100%_10%,rgba(8,145,178,0.16),transparent)]" />
      </div>

      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
