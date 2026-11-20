export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            {/* DNA helix pattern */}
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 35}
                  cy={300 + Math.sin(i * 0.5) * 80}
                  r="3"
                  fill="#d97706"
                  opacity="0.6"
                />
                <circle
                  cx={100 + i * 35}
                  cy={300 - Math.sin(i * 0.5) * 80}
                  r="3"
                  fill="#d97706"
                  opacity="0.6"
                />
                <line
                  x1={100 + i * 35}
                  y1={300 + Math.sin(i * 0.5) * 80}
                  x2={100 + i * 35}
                  y2={300 - Math.sin(i * 0.5) * 80}
                  stroke="#d97706"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 text-6xl sm:text-8xl animate-pulse">🧬</div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Антропогенез
        </h1>
        <p className="text-xl sm:text-2xl text-amber-200/80 mb-4 font-light">
          Происхождение и эволюция человека
        </p>
        <p className="text-lg text-stone-300/70 mb-10 max-w-2xl mx-auto">
          Путь от древних приматов до современного <em>Homo sapiens</em> — 
          один из самых захватывающих сюжетов в истории науки
        </p>
        <a
          href="#introduction"
          className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-amber-900/30"
        >
          Начать изучение
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
