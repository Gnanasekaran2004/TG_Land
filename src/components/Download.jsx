export default function Download() {
  return (
    <section id="download" className="py-24 px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-tg-blue/15 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-tg-green/10 border border-tg-green/30 text-tg-green text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-tg-green animate-pulse" />
          Available Now
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          Start Planning Your<br />
          <span className="grad-warm">Dream Trip Today</span>
        </h2>

        <p className="text-tg-text2 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Download the Trip-GUY APK for Android. No account needed to explore — sign in when you're ready to save your itineraries.
        </p>

        {/* Download card */}
        <div className="bg-tg-surface border border-tg-blue/20 rounded-3xl p-8 mb-8 glow-blue">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/tripguy_logo.jpg" alt="Trip-GUY Logo" className="w-16 h-16 rounded-2xl object-cover" />
            <div className="text-left">
              <div className="font-black text-xl">Trip-GUY</div>
              <div className="text-tg-text2 text-sm">AI Travel Itinerary App</div>
              <div className="text-tg-green text-xs font-bold mt-0.5">● Android APK</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            {[
              { label: 'Platform', val: 'Android' },
              { label: 'Format', val: 'APK' },
              { label: 'Price', val: 'Free' },
            ].map(i => (
              <div key={i.label} className="bg-tg-card rounded-xl p-3">
                <div className="text-tg-text2 text-xs mb-1">{i.label}</div>
                <div className="font-bold text-sm">{i.val}</div>
              </div>
            ))}
          </div>

          {/* Download button — replace href with actual APK path */}
          <a href="./TripGUY.apk" download="TripGUY.apk"
             className="flex items-center justify-center gap-3 bg-gradient-to-r from-tg-blue to-tg-blue-d text-white font-black text-lg px-8 py-4 rounded-2xl w-full glow-blue hover:-translate-y-1 hover:shadow-2xl hover:shadow-tg-blue/50 transition-all duration-300 group">
            <span className="text-2xl group-hover:animate-bounce">⬇</span>
            Download APK
          </a>

          <p className="text-tg-text2 text-xs mt-4">
            Enable "Install from Unknown Sources" in Android settings before installing.
          </p>
        </div>

        {/* GitHub link */}
        <a href="https://github.com/Gnanasekaran2004/TG" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-tg-text2 hover:text-tg-cyan text-sm font-medium transition-colors">
          🐙 View source code on GitHub →
        </a>
      </div>
    </section>
  )
}
