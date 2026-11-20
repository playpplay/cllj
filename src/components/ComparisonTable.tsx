export default function ComparisonTable() {
  const data = [
    {
      species: 'Sahelanthropus tchadensis',
      commonName: 'Сахелантроп',
      period: '7–6 млн лет',
      brainVolume: '~350 см³',
      height: '~120 см (оценка)',
      location: 'Центральная Африка (Чад)',
      tools: 'Нет данных',
      fire: '—'
    },
    {
      species: 'Australopithecus afarensis',
      commonName: 'Австралопитек афарский',
      period: '3,9–2,9 млн лет',
      brainVolume: '400–500 см³',
      height: '100–150 см',
      location: 'Восточная Африка',
      tools: 'Возможно простейшие',
      fire: '—'
    },
    {
      species: 'Homo habilis',
      commonName: 'Человек умелый',
      period: '2,4–1,4 млн лет',
      brainVolume: '600–700 см³',
      height: '100–135 см',
      location: 'Восточная и Южная Африка',
      tools: 'Олдувайская культура',
      fire: 'Возможно'
    },
    {
      species: 'Homo erectus',
      commonName: 'Человек прямоходящий',
      period: '1,9 млн – 110 тыс. лет',
      brainVolume: '800–1100 см³',
      height: '145–185 см',
      location: 'Африка, Азия, Европа',
      tools: 'Ашёльская культура',
      fire: 'Да ✓'
    },
    {
      species: 'Homo heidelbergensis',
      commonName: 'Человек гейдельбергский',
      period: '700–200 тыс. лет',
      brainVolume: '1100–1400 см³',
      height: '155–180 см',
      location: 'Африка, Европа',
      tools: 'Мустьерская культура',
      fire: 'Да ✓'
    },
    {
      species: 'Homo neanderthalensis',
      commonName: 'Неандерталец',
      period: '400–40 тыс. лет',
      brainVolume: '1200–1750 см³',
      height: '150–170 см',
      location: 'Европа, Зап. Азия',
      tools: 'Мустьерская культура',
      fire: 'Да ✓'
    },
    {
      species: 'Homo sapiens',
      commonName: 'Человек разумный',
      period: '300 тыс. лет — н.в.',
      brainVolume: '1250–1450 см³',
      height: '150–190 см',
      location: 'Весь мир',
      tools: 'Все культуры',
      fire: 'Да ✓'
    }
  ];

  return (
    <section id="comparison" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4 text-center">
          <span className="text-amber-600">Сравнительная таблица</span>
        </h2>
        <p className="text-center text-stone-600 mb-10 max-w-2xl mx-auto">
          Сравнение основных характеристик предковых видов человека
        </p>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-stone-200">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-stone-800 to-stone-700 text-white">
                <th className="px-4 py-4 text-left font-semibold">Вид</th>
                <th className="px-4 py-4 text-left font-semibold">Период</th>
                <th className="px-4 py-4 text-left font-semibold">Объём мозга</th>
                <th className="px-4 py-4 text-left font-semibold">Рост</th>
                <th className="px-4 py-4 text-left font-semibold">Ареал</th>
                <th className="px-4 py-4 text-left font-semibold">Орудия</th>
                <th className="px-4 py-4 text-center font-semibold">Огонь</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-stone-100 ${
                    i % 2 === 0 ? 'bg-stone-50' : 'bg-white'
                  } hover:bg-amber-50 transition-colors`}
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-stone-800">{row.commonName}</div>
                    <div className="text-xs text-stone-500 italic">{row.species}</div>
                  </td>
                  <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{row.period}</td>
                  <td className="px-4 py-3 text-stone-600 font-medium">{row.brainVolume}</td>
                  <td className="px-4 py-3 text-stone-600">{row.height}</td>
                  <td className="px-4 py-3 text-stone-600">{row.location}</td>
                  <td className="px-4 py-3 text-stone-600">{row.tools}</td>
                  <td className="px-4 py-3 text-center">
                    {row.fire === 'Да ✓' ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full text-xs font-bold">✓</span>
                    ) : row.fire === '—' ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 text-red-500 rounded-full text-xs">—</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full text-xs">?</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
            <span>Подтверждено</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xs">?</span>
            <span>Предположительно</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-xs">—</span>
            <span>Нет данных</span>
          </div>
        </div>
      </div>
    </section>
  );
}
