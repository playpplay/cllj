export default function References() {
  const references = [
    {
      title: 'Палеоантропология',
      author: 'Бунак В.В., Нестурх М.Ф., Рогинский Я.Я.',
      year: '1965',
      url: 'https://ru.wikipedia.org/wiki/Палеоантропология',
      type: 'Учебник'
    },
    {
      title: 'Происхождение человека',
      author: 'Дерягина Г.В.',
      year: '2012',
      url: 'https://elementy.ru/',
      type: 'Научно-популярное'
    },
    {
      title: 'Smithsonian Human Origins Program',
      author: 'Smithsonian Institution',
      year: '2024',
      url: 'https://humanorigins.si.edu/',
      type: 'Научный ресурс'
    },
    {
      title: 'The Journey of Man: A Genetic Odyssey',
      author: 'Spencer Wells',
      year: '2002',
      url: 'https://www.princeton.edu/~genoprim/',
      type: 'Книга'
    },
    {
      title: 'Антропогенез.ру — научно-образовательный портал',
      author: 'Коллектив авторов',
      year: '2024',
      url: 'https://antropogenez.ru/',
      type: 'Онлайн-ресурс'
    },
    {
      title: 'Nature — Human Evolution',
      author: 'Nature Publishing Group',
      year: '2024',
      url: 'https://www.nature.com/subjects/human-evolution',
      type: 'Научный журнал'
    }
  ];

  return (
    <section id="references" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4 text-center">
          <span className="text-amber-600">Источники и ссылки</span>
        </h2>
        <p className="text-center text-stone-600 mb-10 max-w-2xl mx-auto">
          Рекомендуемые материалы для углублённого изучения темы антропогенеза
        </p>

        <div className="space-y-4">
          {references.map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-xl p-5 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-1">
                    {ref.author} • {ref.year}
                  </p>
                </div>
                <span className="bg-stone-200 group-hover:bg-amber-200 text-stone-600 group-hover:text-amber-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors">
                  {ref.type}
                </span>
              </div>
              <p className="text-stone-400 text-sm mt-2 truncate">
                🔗 {ref.url}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 bg-stone-50 border border-stone-200 rounded-xl p-6">
          <h3 className="font-bold text-stone-800 mb-3">📚 Дополнительная литература</h3>
          <ul className="space-y-2 text-stone-600">
            <li>• Стэнли С. «Этюды об эволюции человека» — М.: Мир, 1992</li>
            <li>• Марков А.В. «Эволюция человека» — М.: АСТ: Астрель, 2011</li>
            <li>• Соколов А.Б. «Сумма антропологии» — М.: Альпина нон-фикшн, 2021</li>
            <li>• Харари Ю.Н. «Sapiens. Краткая история человечества» — М.: Синдбад, 2018</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
