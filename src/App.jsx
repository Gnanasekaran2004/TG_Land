import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Features   from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack  from './components/TechStack'
import Download   from './components/Download'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-tg-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Download />
      <Footer />
    </div>
  )
}
