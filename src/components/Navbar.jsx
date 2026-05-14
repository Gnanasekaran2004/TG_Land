import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Features', 'How It Works', 'Tech Stack', 'Download']

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-tg-bg/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/tripguy_logo.jpg" alt="Trip-GUY Logo" className="w-9 h-9 rounded-xl object-cover" />
          <span className="font-black text-lg tracking-tight">Trip<span className="text-tg-cyan">GUY</span></span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s/g,'-')}`}
                 className="text-tg-text2 hover:text-tg-cyan text-sm font-medium transition-colors duration-200">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#download"
           className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-tg-blue to-tg-blue-d text-white text-sm font-bold px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tg-blue/40 transition-all duration-200">
          ⬇ Download APK
        </a>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-tg-text2 text-2xl">{open ? '✕' : '☰'}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-tg-surface border-t border-white/5 px-5 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g,'-')}`}
               onClick={() => setOpen(false)}
               className="text-tg-text2 hover:text-tg-cyan font-medium transition-colors">
              {l}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
             className="bg-tg-blue text-white text-center font-bold px-5 py-3 rounded-full">
            ⬇ Download APK
          </a>
        </div>
      )}
    </nav>
  )
}
