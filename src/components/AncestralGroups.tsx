import { useState } from 'react';

interface GroupData {
  id: string;
  name: string;
  latin: string;
  period: string;
  emoji: string;
  color: string;
  description: string;
  features: string[];
  discoveries: string[];
}

const groups: GroupData[] = [
  {
    id: 'sahelanthropus',
    name: 'Сахелантроп',
    latin: 'Sahelanthropus tchadensis',
    period: '7–6 млн лет назад',
    emoji: '🐒',
    color: 'from-red-800 to-red-600',
    description: 'Один из древнейших известных гоминид. Обнаружен в Чаде (Центральная Африка). Череп «Тумай» показывает признаки, характерные для прямохождения, что делает его одним из кандидатов на роль «последнего общего предка» человека и шимпанзе.',
    features: ['Объём мозга ~350 см³', 'Признаки прямохождения', 'Маленькие клыки', 'Плоское лицо'],
    discoveries: ['Торос-Менала (Чад, 2001)', 'Череп TM 266-01-060-1']
  },
  {
    id: 'australopithecus',
    name: 'Австралопитеки',
    latin: 'Australopithecus',
    period: '4–2 млн лет назад',
    emoji: '🦧',
    color: 'from-orange-800 to-orange-600',
    description: 'Род двуногих гоминид, обитавших в Африке. Наиболее известный представитель — «Люси» (Australopithecus afarensis). Австралопитеки сочетали признаки приматов и людей: маленький мозг, но прямохождение.',
    features: ['Объём мозга 400–500 см³', 'Полное прямохождение', 'Прогнатное лицо', 'Выраженный половой диморфизм'],
    discoveries: ['«Люси» (Эфиопия, 1974)', '«Маленькая стопа» (Эфиопия, 1994)', 'Стеркфонтейн (ЮАР)']
  },
  {
    id: 'homo-habilis',
    name: 'Человек умелый',
    latin: 'Homo habilis',
    period: '2,4–1,4 млн лет назад',
    emoji: '🪨',
    color: 'from-yellow-800 to-yellow-600',
    description: 'Первый представитель рода Homo. Название получил благодаря созданию первых каменных орудий (олдувайская культура). Мозг значительно крупнее, чем у австралопитеков.',
    features: ['Объём мозга 600–700 см³', 'Прямое хождение', 'Первые каменные орудия', 'Уменьшение зубов'],
    discoveries: ['Олдувайское ущелье (Танзания, 1960)', 'КОО-1 (Кения)', 'Стеркфонтейн (ЮАР)']
  },
  {
    id: 'homo-erectus',
    name: 'Человек прямоходящий',
    latin: 'Homo erectus',
    period: '1,9 млн – 110 тыс. лет назад',
    emoji: '🔥',
    color: 'from-green-800 to-green-600',
    description: 'Первый гоминид, покинувший Африку и расселившийся по Евразии. Освоил огонь, создал более сложные орудия (ашёльская культура). Имел пропорции тела, близкие к современным людям.',
    features: ['Объём мозга 800–1100 см³', 'Контроль огня', 'Сложные орудия', 'Первый выход из Африки'],
    discoveries: ['Ява (Индонезия, 1891)', 'Пекинский человек (Китай)', 'Турканский мальчик (Кения, 1984)']
  },
  {
    id: 'homo-heidelbergensis',
    name: 'Человек Гейдельбергский',
    latin: 'Homo heidelbergensis',
    period: '700–200 тыс. лет назад',
    emoji: '🏔️',
    color: 'from-teal-800 to-teal-600',
    description: 'Мощный вид, вероятно, являющийся общим предком неандертальцев и современных людей. Обитал в Африке, Европе и, возможно, Азии. Строил укрытия, охотился на крупную дичь.',
    features: ['Объём мозга 1100–1400 см³', 'Мощное телосложение', 'Деревянное копьё (Шёнинген)', 'Коллективная охота'],
    discoveries: ['Гейдельберг (Германия, 1907)', 'Симы-де-лос-Уэсос (Испания)', 'Боксгроув (Англия)']
  },
  {
    id: 'homo-neanderthalensis',
    name: 'Неандерталец',
    latin: 'Homo neanderthalensis',
    period: '400–40 тыс. лет назад',
    emoji: '🧊',
    color: 'from-blue-800 to-blue-600',
    description: 'Ближайший родственник Homo sapiens. Адаптирован к холодному климату ледниковой Европы. Имел культуру, хоронил умерших, изготавливал украшения. Скрещивался с Homo sapiens — до 2% ДНК неафриканцев неандертальские.',
    features: ['Объём мозга 1200–1750 см³', 'Мощное телосложение', 'Захоронения умерших', 'Скрещивание с Homo sapiens'],
    discoveries: ['Долина Неандерталь (Германия, 1856)', 'Шанидар (Ирак)', 'Денисова пещера (Алтай)']
  },
  {
    id: 'homo-sapiens',
    name: 'Человек разумный',
    latin: 'Homo sapiens',
    period: '300 тыс. лет назад — настоящее время',
    emoji: '🧠',
    color: 'from-purple-800 to-purple-600',
    description: 'Единственный выживший вид рода Homo. Появился в Африке, затем расселился по всей планете. Отличается развитым абстрактным мышлением, сложным языком, созданием искусства и технологий.',
    features: ['Объём мозга ~1400 см³', 'Высокий лоб', 'Выраженный подбородок', 'Символическое мышление'],
    discoveries: ['Джебель-Ирхуд (Марокко, 300 тыс. лет)', 'Кроманьон (Франция)', 'Сунгирь (Россия)']
  }
];

export default function AncestralGroups() {
  const [activeGroup, setActiveGroup] = useState<string>('australopithecus');
  const currentGroup = groups.find(g => g.id === activeGroup)!;

  return (
    <section id="ancestral-groups" className="py-20 px-4 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4 text-center">
          <span className="text-amber-600">Основные предковые группы</span>
        </h2>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Нажмите на карточку вида, чтобы узнать подробности о каждом этапе эволюции человека
        </p>

        {/* Group selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {groups.map(group => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeGroup === group.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-stone-600 hover:bg-amber-100 border border-stone-200'
              }`}
            >
              <span className="mr-1">{group.emoji}</span>
              {group.name}
            </button>
          ))}
        </div>

        {/* Active group detail */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`bg-gradient-to-r ${currentGroup.color} p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{currentGroup.emoji}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">{currentGroup.name}</h3>
                <p className="text-white/80 italic">{currentGroup.latin}</p>
              </div>
            </div>
            <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm">
              ⏱️ {currentGroup.period}
            </div>
          </div>

          <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg text-stone-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">📝</span>
                Описание
              </h4>
              <p className="text-stone-600 leading-relaxed">{currentGroup.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-stone-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">✨</span>
                  Характерные черты
                </h4>
                <ul className="space-y-2">
                  {currentGroup.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-stone-800 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">🔍</span>
                  Ключевые находки
                </h4>
                <ul className="space-y-2">
                  {currentGroup.discoveries.map((disc, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {disc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
