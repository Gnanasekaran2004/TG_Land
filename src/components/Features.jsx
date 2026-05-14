const features = [
  {
    icon: '🤖', color: 'bg-tg-blue/15 text-tg-blue',
    title: 'Gemini AI Itineraries',
    desc: 'Google Gemini API generates personalised day-by-day travel itineraries based on your destination, budget, and interests.'
  },
  {
    icon: '📡', color: 'bg-tg-cyan/10 text-tg-cyan',
    title: '100% Offline-First',
    desc: 'Browse saved itineraries anytime, anywhere — even without internet. Data syncs seamlessly when you reconnect.'
  },
  {
    icon: '⚡', color: 'bg-tg-orange/10 text-tg-orange',
    title: 'Blazing Fast',
    desc: 'BLoC state management with reactive streams ensures a smooth, lag-free experience across all device types.'
  },
  {
    icon: '🔥', color: 'bg-tg-gold/10 text-tg-gold',
    title: 'Firebase Backend',
    desc: 'Serverless Firebase architecture separates high-frequency transient data from persistent structured data for ultimate scalability.'
  },
  {
    icon: '🏗️', color: 'bg-tg-green/10 text-tg-green',
    title: 'Clean Architecture',
    desc: 'Strict separation of Data → Domain → Presentation layers. Every feature is independently testable and maintainable.'
  },
  {
    icon: '🔒', color: 'bg-pink-500/10 text-pink-400',
    title: 'Secure & Private',
    desc: 'Firebase Authentication ensures your travel data is private and securely tied to your account — never shared.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-tg-cyan text-xs font-bold uppercase tracking-widest">What Makes It Special</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-4">
            Packed with <span className="grad-blue">Powerful Features</span>
          </h2>
          <p className="text-tg-text2 max-w-xl mx-auto leading-relaxed">
            Every feature is built around one goal — making travel planning effortless, intelligent, and always available.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title}
                 className="bg-tg-surface border border-white/5 rounded-2xl p-7 card-hover cursor-default group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-tg-cyan transition-colors">{f.title}</h3>
              <p className="text-tg-text2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
