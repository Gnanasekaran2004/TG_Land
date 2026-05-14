const steps = [
  {
    num: '01', icon: '📍', color: 'from-tg-blue to-tg-cyan',
    title: 'Enter Your Destination',
    desc: 'Type your destination, travel dates, interests, and budget. Trip-GUY understands natural language — no forms to fill.'
  },
  {
    num: '02', icon: '🤖', color: 'from-tg-cyan to-tg-green',
    title: 'AI Generates Your Itinerary',
    desc: 'Google Gemini API processes your input via Firebase Cloud Functions and returns a rich, personalised day-by-day plan in seconds.'
  },
  {
    num: '03', icon: '💾', color: 'from-tg-orange to-tg-gold',
    title: 'Save & Go Offline',
    desc: 'Your itinerary is cached locally. Browse places, timings, and tips even on a flight with zero connectivity.'
  },
  {
    num: '04', icon: '🌍', color: 'from-tg-gold to-tg-orange',
    title: 'Travel with Confidence',
    desc: 'Follow your AI-curated plan, discover local gems, and enjoy your trip knowing every detail is at your fingertips.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-5 bg-tg-surface/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-tg-cyan text-xs font-bold uppercase tracking-widest">Simple as 1-2-3-4</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-4">
            How <span className="grad-warm">Trip-GUY Works</span>
          </h2>
          <p className="text-tg-text2 max-w-lg mx-auto leading-relaxed">
            From destination to detailed itinerary in under 10 seconds.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-tg-blue via-tg-cyan to-tg-orange opacity-30" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.num}
                   className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 ${i%2===1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center gap-4 lg:w-1/2 lg:justify-end" style={i%2===1?{justifyContent:'flex-start'}:{}}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {s.icon}
                  </div>
                  <div className="text-4xl font-black text-white/5 font-mono">{s.num}</div>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 bg-tg-card border border-white/5 rounded-2xl p-6 card-hover`}>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-tg-text2 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
