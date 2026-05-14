export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/tripguy_logo.jpg" alt="Trip-GUY" className="w-7 h-7 rounded-xl object-cover" />
          <span className="font-black">Trip<span className="text-tg-cyan">GUY</span></span>
        </div>

        <p className="text-tg-text2 text-sm text-center">
          Built with ❤️ by{' '}
          <a href="https://protfolio-n1ye.onrender.com" target="_blank" rel="noopener noreferrer"
             className="text-tg-cyan hover:underline font-semibold">
            Gnanasekaran D
          </a>
          {' '}· Flutter + Firebase + Gemini AI
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Gnanasekaran2004/TG" target="_blank" rel="noopener noreferrer"
             className="text-tg-text2 hover:text-tg-cyan text-sm transition-colors">GitHub</a>
          <a href="https://protfolio-n1ye.onrender.com" target="_blank" rel="noopener noreferrer"
             className="text-tg-text2 hover:text-tg-cyan text-sm transition-colors">Portfolio</a>
          <a href="https://www.linkedin.com/in/gs-dev25/" target="_blank" rel="noopener noreferrer"
             className="text-tg-text2 hover:text-tg-cyan text-sm transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
