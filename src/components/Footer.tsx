export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span>🦴</span> Антропогенез
            </h3>
            <p className="text-sm leading-relaxed">
              Информационный сайт о происхождении и эволюции человека. 
              Основан на современных научных данных палеоантропологии, 
              генетики и археологии.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#introduction" className="hover:text-amber-400 transition-colors">Введение</a></li>
              <li><a href="#ancestral-groups" className="hover:text-amber-400 transition-colors">Предковые группы</a></li>
              <li><a href="#comparison" className="hover:text-amber-400 transition-colors">Сравнительная таблица</a></li>
              <li><a href="#timeline" className="hover:text-amber-400 transition-colors">Хронология</a></li>
              <li><a href="#map" className="hover:text-amber-400 transition-colors">Карта миграций</a></li>
              <li><a href="#references" className="hover:text-amber-400 transition-colors">Источники</a></li>
            </ul>
          </div>

          {/* External resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Полезные ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://humanorigins.si.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Smithsonian Human Origins
                </a>
              </li>
              <li>
                <a href="https://antropogenez.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Антропогенез.ру
                </a>
              </li>
              <li>
                <a href="https://ru.wikipedia.org/wiki/Антропогенез" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Википедия: Антропогенез
                </a>
              </li>
              <li>
                <a href="https://elementy.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Элементы — наука
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © 2024 Информационный сайт «Антропогенез». Образовательный проект.
          </p>
          <div className="flex items-center gap-4 text-sm text-stone-500">
            <span>Сделано с 🧬 и ❤️</span>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              Наверх ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
