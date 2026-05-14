const stack = [
  { name: 'Flutter', icon: '🎯', color: 'border-sky-500/30 text-sky-400', desc: 'Cross-platform UI framework for beautiful, native mobile experiences on Android & iOS.' },
  { name: 'Dart', icon: '🏹', color: 'border-sky-400/30 text-sky-300', desc: 'Strongly-typed, performant language powering the entire Flutter frontend.' },
  { name: 'Firebase', icon: '🔥', color: 'border-amber-500/30 text-amber-400', desc: 'Serverless backend — Firestore, Cloud Functions, Authentication & Realtime Database.' },
  { name: 'Google Gemini', icon: '✨', color: 'border-violet-500/30 text-violet-400', desc: 'State-of-the-art generative AI model for dynamic itinerary generation via Cloud Functions.' },
  { name: 'BLoC Pattern', icon: '🔄', color: 'border-tg-cyan/30 text-tg-cyan', desc: 'Business Logic Component pattern for reactive, testable, and scalable state management.' },
  { name: 'Clean Architecture', icon: '🏗️', color: 'border-tg-green/30 text-tg-green', desc: 'Strict separation of Data, Domain, and Presentation layers for maximum maintainability.' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-tg-cyan text-xs font-bold uppercase tracking-widest">Under the Hood</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-4">
            Built with <span className="grad-blue">Modern Tech</span>
          </h2>
          <p className="text-tg-text2 max-w-lg mx-auto leading-relaxed">
            Every technology choice was deliberate — optimised for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map(t => (
            <div key={t.name}
                 className={`bg-tg-surface border rounded-2xl p-6 card-hover ${t.color.split(' ')[0]}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{t.icon}</span>
                <span className={`font-bold text-base ${t.color.split(' ')[1]}`}>{t.name}</span>
              </div>
              <p className="text-tg-text2 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="mt-12 bg-tg-surface border border-white/5 rounded-2xl p-8">
          <h3 className="text-center font-bold text-lg mb-6 text-tg-cyan">Architecture Overview</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-medium flex-wrap">
            {[
              { label: 'Flutter UI', color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
              { label: '→', color: 'text-tg-text2' },
              { label: 'BLoC Layer', color: 'bg-tg-cyan/10 text-tg-cyan border-tg-cyan/30' },
              { label: '→', color: 'text-tg-text2' },
              { label: 'Firebase Firestore', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
              { label: '→', color: 'text-tg-text2' },
              { label: 'Gemini API', color: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
            ].map((item, i) => (
              item.label === '→'
                ? <span key={i} className="text-tg-text2 text-lg hidden sm:block">→</span>
                : <span key={i} className={`border rounded-xl px-4 py-2 ${item.color}`}>{item.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
