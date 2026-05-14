export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16">

      {/* Animated orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-tg-blue/20 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-tg-cyan/15 blur-[100px] animate-pulse-slow pointer-events-none" style={{animationDelay:'1.5s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tg-blue/5 blur-[80px] pointer-events-none" />

      {/* Star dots */}
      {[...Array(20)].map((_,i) => (
        <div key={i} className="absolute rounded-full bg-white animate-pulse-slow"
             style={{
               width: Math.random()*3+1+'px', height: Math.random()*3+1+'px',
               top: Math.random()*100+'%', left: Math.random()*100+'%',
               opacity: Math.random()*0.5+0.1,
               animationDelay: Math.random()*3+'s',
               animationDuration: Math.random()*2+2+'s'
             }} />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-tg-blue/10 border border-tg-blue/30 text-tg-cyan text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-tg-cyan animate-pulse-slow" />
          AI-Powered Travel App
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
          Your Personal<br />
          <span className="grad-blue">AI Travel</span>{' '}
          <span className="grad-warm">Companion</span>
        </h1>

        <p className="text-tg-text2 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Trip-GUY generates personalised travel itineraries using <strong className="text-tg-text">Google Gemini AI</strong> —
          works fully <strong className="text-tg-text">offline</strong>, syncs when you're back online.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <a href="#download"
             className="inline-flex items-center gap-2 bg-gradient-to-r from-tg-blue to-tg-blue-d text-white font-bold text-base px-8 py-4 rounded-full glow-blue hover:-translate-y-1 hover:shadow-xl hover:shadow-tg-blue/50 transition-all duration-300">
            ⬇ Download APK
          </a>
          <a href="https://github.com/Gnanasekaran2004/TG" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 border border-tg-cyan/40 text-tg-cyan font-semibold text-base px-8 py-4 rounded-full hover:bg-tg-cyan/10 hover:-translate-y-1 transition-all duration-300">
            ⭐ View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 justify-center">
          {[
            { num: '100%', label: 'Offline-First' },
            { num: 'Gemini', label: 'AI Powered' },
            { num: 'BLoC', label: 'State Management' },
            { num: 'Free', label: 'Open Source' },
          ].map(s => (
            <div key={s.num} className="text-center">
              <div className="text-2xl font-black text-tg-cyan">{s.num}</div>
              <div className="text-tg-text2 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Floating phone mockup */}
        <div className="mt-16 animate-float">
          <div className="mx-auto w-48 h-80 rounded-[2.5rem] bg-gradient-to-b from-tg-surface to-tg-card border-2 border-tg-blue/30 shadow-2xl shadow-tg-blue/30 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-tg-blue/10 to-transparent" />
            <div className="relative z-10 text-center">
              <img src="/tripguy_logo.jpg" alt="Trip-GUY" className="w-16 h-16 rounded-2xl object-cover mx-auto mb-3" />
              <div className="text-xs font-bold text-tg-cyan mb-1">TRIP-GUY</div>
              <div className="text-[10px] text-tg-text2 leading-relaxed">AI Travel Itinerary Generator</div>
              <div className="mt-4 space-y-1.5">
                {['🏖 Beaches', '🏔 Mountains', '🗼 Cities'].map(t => (
                  <div key={t} className="bg-tg-blue/20 rounded-lg px-3 py-1 text-[10px] text-tg-text">{t}</div>
                ))}
              </div>
              <div className="mt-4 w-full bg-tg-blue rounded-lg py-1.5 text-[10px] font-bold text-white">Generate ✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
