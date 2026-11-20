export default function TimelineDiagram() {
  const events = [
    { year: 7, label: 'Сахелантроп', color: '#991b1b', size: 30, desc: 'Первый гоминид' },
    { year: 4.4, label: 'Ардинепитек', color: '#c2410c', size: 35, desc: 'Ardipithecus ramidus' },
    { year: 4, label: 'Австралопитек', color: '#ea580c', size: 50, desc: 'A. afarensis, A. africanus' },
    { year: 2.5, label: 'Homo habilis', color: '#ca8a04', size: 60, desc: 'Первые орудия' },
    { year: 1.9, label: 'Homo erectus', color: '#16a34a', size: 80, desc: 'Выход из Африки, огонь' },
    { year: 0.7, label: 'H. heidelbergensis', color: '#0d9488', size: 90, desc: 'Общий предок' },
    { year: 0.4, label: 'Неандерталец', color: '#2563eb', size: 100, desc: 'H. neanderthalensis' },
    { year: 0.3, label: 'Homo sapiens', color: '#7c3aed', size: 120, desc: 'Современный человек' },
    { year: 0.04, label: 'Неолитическая революция', color: '#a855f7', size: 70, desc: 'Земледелие' },
    { year: 0, label: 'Современность', color: '#6366f1', size: 140, desc: 'Цивилизация' },
  ];

  const maxYear = 7;

  return (
    <section id="timeline" className="py-20 px-4 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          <span className="text-amber-400">Хронологическая диаграмма</span>
        </h2>
        <p className="text-center text-stone-400 mb-12 max-w-2xl mx-auto">
          Временная шкала эволюции человека — от древнейших гоминид до современности. 
          Размер круга отражает относительный объём мозга.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-green-500 to-purple-600 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-green-500 to-purple-600 md:hidden"></div>

          <div className="space-y-8">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              const position = ((maxYear - event.year) / maxYear) * 100;
              
              return (
                <div key={i} className="relative flex items-center">
                  {/* Desktop layout */}
                  <div className="hidden md:flex w-full items-center">
                    {/* Left content */}
                    <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pr-12 text-right opacity-0'}`}>
                      {isLeft && (
                        <div className="inline-block bg-stone-800 rounded-xl p-4 border border-stone-700 hover:border-amber-600/50 transition-colors">
                          <div className="text-amber-400 font-bold text-lg">{event.label}</div>
                          <div className="text-stone-400 text-sm">{event.desc}</div>
                          <div className="text-stone-500 text-xs mt-1">{event.year === 0 ? 'Наши дни' : `${event.year} млн лет назад`}</div>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div
                        className="rounded-full border-4 border-stone-900 shadow-lg"
                        style={{
                          width: `${Math.max(20, event.size * 0.4)}px`,
                          height: `${Math.max(20, event.size * 0.4)}px`,
                          backgroundColor: event.color,
                        }}
                      ></div>
                    </div>

                    {/* Right content */}
                    <div className={`w-1/2 ${!isLeft ? 'pl-12 text-left' : 'pl-12 opacity-0'}`}>
                      {!isLeft && (
                        <div className="inline-block bg-stone-800 rounded-xl p-4 border border-stone-700 hover:border-amber-600/50 transition-colors">
                          <div className="text-amber-400 font-bold text-lg">{event.label}</div>
                          <div className="text-stone-400 text-sm">{event.desc}</div>
                          <div className="text-stone-500 text-xs mt-1">{event.year === 0 ? 'Наши дни' : `${event.year} млн лет назад`}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-center gap-4 w-full">
                    <div className="flex-shrink-0">
                      <div
                        className="rounded-full border-4 border-stone-900 shadow-lg"
                        style={{
                          width: `${Math.max(16, event.size * 0.3)}px`,
                          height: `${Math.max(16, event.size * 0.3)}px`,
                          backgroundColor: event.color,
                        }}
                      ></div>
                    </div>
                    <div className="bg-stone-800 rounded-xl p-4 border border-stone-700 flex-1">
                      <div className="text-amber-400 font-bold">{event.label}</div>
                      <div className="text-stone-400 text-sm">{event.desc}</div>
                      <div className="text-stone-500 text-xs mt-1">{event.year === 0 ? 'Наши дни' : `${event.year} млн лет назад`}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brain volume chart */}
        <div className="mt-16 bg-stone-800 rounded-2xl p-6 sm:p-8 border border-stone-700">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            📊 Увеличение объёма мозга в ходе эволюции
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Сахелантроп', volume: 350, color: '#991b1b' },
              { name: 'Австралопитек', volume: 450, color: '#ea580c' },
              { name: 'H. habilis', volume: 650, color: '#ca8a04' },
              { name: 'H. erectus', volume: 950, color: '#16a34a' },
              { name: 'H. heidelbergensis', volume: 1250, color: '#0d9488' },
              { name: 'Неандерталец', volume: 1475, color: '#2563eb' },
              { name: 'H. sapiens', volume: 1400, color: '#7c3aed' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-32 sm:w-40 text-right text-sm text-stone-300 font-medium">
                  {item.name}
                </div>
                <div className="flex-1 bg-stone-700 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 text-xs text-white font-bold transition-all duration-1000"
                    style={{
                      width: `${(item.volume / 1750) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  >
                    {item.volume} см³
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 text-sm mt-4">
            Объём мозга в см³ (максимальная шкала — 1750 см³)
          </p>
        </div>
      </div>
    </section>
  );
}
