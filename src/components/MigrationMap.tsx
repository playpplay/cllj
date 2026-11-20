import { useState } from 'react';

interface Site {
  id: string;
  name: string;
  x: number;
  y: number;
  species: string;
  year: string;
  description: string;
}

const sites: Site[] = [
  { id: 'sahelanthropus', name: 'Торос-Менала', x: 52, y: 52, species: 'Sahelanthropus tchadensis', year: '7 млн лет', description: 'Чад, Центральная Африка. Череп «Тумай» — один из древнейших гоминид.' },
  { id: 'lucy', name: 'Афар', x: 56, y: 53, species: 'Australopithecus afarensis', year: '3,2 млн лет', description: 'Эфиопия. Знаменитый скелет «Люси» — 40% скелета.' },
  { id: 'sterkfontein', name: 'Стеркфонтейн', x: 53.5, y: 68, species: 'Australopithecus', year: '3,5 млн лет', description: 'ЮАР. Пещерная система с множеством находок.' },
  { id: 'olduvai', name: 'Олдувай', x: 56, y: 57, species: 'Homo habilis', year: '1,9 млн лет', description: 'Танзания. «Колыбель человечества» — первые орудия.' },
  { id: 'turkana', name: 'Туркана', x: 56, y: 55, species: 'Homo erectus', year: '1,6 млн лет', description: 'Кения. «Турканский мальчик» — почти полный скелет.' },
  { id: 'java', name: 'Ява', x: 74, y: 58, species: 'Homo erectus', year: '1,5 млн лет', description: 'Индонезия. «Яванский человек» — первый выход из Африки.' },
  { id: 'zhoukoudian', name: 'Чжоукоудянь', x: 72, y: 42, species: 'Homo erectus', year: '700 тыс. лет', description: 'Китай. «Пекинский человек» — следы использования огня.' },
  { id: 'dmanisi', name: 'Дманиси', x: 57, y: 39, species: 'Homo erectus/georgicus', year: '1,8 млн лет', description: 'Грузия. Древнейшие гоминиды за пределами Африки.' },
  { id: 'heidelberg', name: 'Гейдельберг', x: 49, y: 36, species: 'Homo heidelbergensis', year: '600 тыс. лет', description: 'Германия. Нижняя челюсть — типовой экземпляр.' },
  { id: 'atauerca', name: 'Атапуэрка', x: 47, y: 38, species: 'H. heidelbergensis', year: '800 тыс. лет', description: 'Испания. Симы-де-лос-Уэсос — множество останков.' },
  { id: 'neanderthal', name: 'Неандерталь', x: 49, y: 35, species: 'Homo neanderthalensis', year: '40 тыс. лет', description: 'Германия. Долина Неандерталь — первая находка неандертальца.' },
  { id: 'shanidar', name: 'Шанидар', x: 58, y: 41, species: 'Homo neanderthalensis', year: '60 тыс. лет', description: 'Ирак. Захоронения с цветами — свидетельство ритуалов.' },
  { id: 'denisova', name: 'Денисова пещера', x: 68, y: 35, species: 'Homo denisova', year: '50 тыс. лет', description: 'Россия, Алтай. Денисовский человек — открыт по ДНК.' },
  { id: 'irhoud', name: 'Джебель-Ирхуд', x: 46, y: 43, species: 'Homo sapiens', year: '300 тыс. лет', description: 'Марокко. Древнейшие Homo sapiens.' },
  { id: 'omo', name: 'Омо', x: 56, y: 55, species: 'Homo sapiens', year: '195 тыс. лет', description: 'Эфиопия. Древнейшие анатомически современные люди.' },
  { id: 'cro-magnon', name: 'Кроманьон', x: 48, y: 37, species: 'Homo sapiens', year: '35 тыс. лет', description: 'Франция. Первые европейские Homo sapiens.' },
  { id: 'sungir', name: 'Сунгирь', x: 54, y: 32, species: 'Homo sapiens', year: '30 тыс. лет', description: 'Россия. Богатые погребения верхнего палеолита.' },
];

const migrations = [
  { from: { x: 54, y: 55 }, to: { x: 57, y: 39 }, label: 'H. erectus → Дманиси', color: '#16a34a' },
  { from: { x: 54, y: 55 }, to: { x: 74, y: 58 }, label: 'H. erectus → Ява', color: '#16a34a' },
  { from: { x: 54, y: 55 }, to: { x: 72, y: 42 }, label: 'H. erectus → Китай', color: '#16a34a' },
  { from: { x: 54, y: 55 }, to: { x: 49, y: 36 }, label: 'H. heidelbergensis → Европа', color: '#0d9488' },
  { from: { x: 49, y: 36 }, to: { x: 49, y: 35 }, label: 'Неандертальцы', color: '#2563eb' },
  { from: { x: 54, y: 53 }, to: { x: 46, y: 43 }, label: 'H. sapiens → Марокко', color: '#7c3aed' },
  { from: { x: 54, y: 53 }, to: { x: 48, y: 37 }, label: 'H. sapiens → Европа', color: '#7c3aed' },
  { from: { x: 54, y: 53 }, to: { x: 68, y: 35 }, label: 'H. sapiens → Сибирь', color: '#7c3aed' },
];

export default function MigrationMap() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [showMigrations, setShowMigrations] = useState(true);

  return (
    <section id="map" className="py-20 px-4 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4 text-center">
          <span className="text-amber-600">Карта находок и миграций</span>
        </h2>
        <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">
          Места ключевых палеоантропологических находок и пути расселения гоминид. 
          Нажмите на маркер для получения подробностей.
        </p>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowMigrations(!showMigrations)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              showMigrations
                ? 'bg-amber-600 text-white'
                : 'bg-white text-stone-600 border border-stone-200'
            }`}
          >
            {showMigrations ? '🗺️ Скрыть миграции' : '🗺️ Показать миграции'}
          </button>
        </div>

        {/* Map container */}
        <div className="relative bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
          <svg
            viewBox="0 0 100 70"
            className="w-full h-auto"
            style={{ minHeight: '400px' }}
          >
            {/* World map simplified outline */}
            <defs>
              <radialGradient id="landGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#44403c" />
                <stop offset="100%" stopColor="#292524" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Ocean background */}
            <rect x="0" y="0" width="100" height="70" fill="#1c1917" />

            {/* Simplified continents */}
            {/* Africa */}
            <path
              d="M45,35 L48,33 L52,34 L56,36 L58,40 L59,45 L58,50 L57,55 L56,60 L55,65 L53,68 L52,66 L50,62 L49,58 L48,55 L47,52 L46,48 L45,44 L44,40 Z"
              fill="url(#landGrad)"
              stroke="#57534e"
              strokeWidth="0.3"
            />
            {/* Europe */}
            <path
              d="M44,28 L46,27 L48,28 L50,29 L52,30 L54,31 L56,32 L57,34 L55,35 L53,34 L51,33 L49,32 L47,31 L45,30 L44,29 Z"
              fill="url(#landGrad)"
              stroke="#57534e"
              strokeWidth="0.3"
            />
            {/* Asia */}
            <path
              d="M56,28 L60,27 L65,28 L70,30 L75,32 L78,35 L76,38 L73,40 L70,42 L67,40 L64,38 L62,36 L60,34 L58,32 L56,30 Z"
              fill="url(#landGrad)"
              stroke="#57534e"
              strokeWidth="0.3"
            />
            {/* Southeast Asia / Indonesia */}
            <path
              d="M70,45 L73,47 L76,50 L78,53 L76,55 L73,54 L71,52 L69,49 L68,47 Z"
              fill="url(#landGrad)"
              stroke="#57534e"
              strokeWidth="0.3"
            />
            {/* Middle East connection */}
            <path
              d="M55,35 L57,36 L59,38 L58,40 L56,38 L55,36 Z"
              fill="url(#landGrad)"
              stroke="#57534e"
              strokeWidth="0.2"
            />

            {/* Migration arrows */}
            {showMigrations && migrations.map((mig, i) => (
              <g key={i}>
                <line
                  x1={mig.from.x}
                  y1={mig.from.y}
                  x2={mig.to.x}
                  y2={mig.to.y}
                  stroke={mig.color}
                  strokeWidth="0.3"
                  strokeDasharray="1,0.5"
                  opacity="0.7"
                />
                {/* Arrow head */}
                <circle
                  cx={mig.to.x}
                  cy={mig.to.y}
                  r="0.5"
                  fill={mig.color}
                  opacity="0.5"
                />
              </g>
            ))}

            {/* Site markers */}
            {sites.map((site) => {
              const isSelected = selectedSite?.id === site.id;
              let markerColor = '#f59e0b';
              if (site.species.includes('sapiens')) markerColor = '#a855f7';
              else if (site.species.includes('neanderthal')) markerColor = '#3b82f6';
              else if (site.species.includes('erectus')) markerColor = '#22c55e';
              else if (site.species.includes('habilis')) markerColor = '#eab308';
              else if (site.species.includes('australopithecus') || site.species.includes('Australopithecus')) markerColor = '#f97316';
              else if (site.species.includes('denisova')) markerColor = '#06b6d4';

              return (
                <g
                  key={site.id}
                  onClick={() => setSelectedSite(isSelected ? null : site)}
                  className="cursor-pointer"
                >
                  {/* Pulse animation */}
                  {isSelected && (
                    <circle
                      cx={site.x}
                      cy={site.y}
                      r="2"
                      fill="none"
                      stroke={markerColor}
                      strokeWidth="0.2"
                      opacity="0.5"
                    >
                      <animate attributeName="r" from="1" to="3" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.7" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={site.x}
                    cy={site.y}
                    r={isSelected ? 1.2 : 0.8}
                    fill={markerColor}
                    stroke="white"
                    strokeWidth="0.2"
                    filter="url(#glow)"
                    className="transition-all"
                  />
                  {/* Label */}
                  {isSelected && (
                    <text
                      x={site.x}
                      y={site.y - 2}
                      textAnchor="middle"
                      fill="white"
                      fontSize="1.5"
                      fontWeight="bold"
                    >
                      {site.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Legend */}
            <g transform="translate(2, 58)">
              <rect x="0" y="0" width="20" height="11" fill="#1c1917" rx="0.5" opacity="0.9" stroke="#57534e" strokeWidth="0.2" />
              <text x="1" y="2.5" fill="#d6d3d1" fontSize="1.3" fontWeight="bold">Легенда:</text>
              <circle cx="2" cy="4.5" r="0.6" fill="#f97316" />
              <text x="3.5" y="5" fill="#d6d3d1" fontSize="1">Австралопитеки</text>
              <circle cx="2" cy="6.5" r="0.6" fill="#22c55e" />
              <text x="3.5" y="7" fill="#d6d3d1" fontSize="1">H. erectus</text>
              <circle cx="11" cy="4.5" r="0.6" fill="#3b82f6" />
              <text x="12.5" y="5" fill="#d6d3d1" fontSize="1">Неандертальцы</text>
              <circle cx="11" cy="6.5" r="0.6" fill="#a855f7" />
              <text x="12.5" y="7" fill="#d6d3d1" fontSize="1">H. sapiens</text>
              <circle cx="2" cy="8.5" r="0.6" fill="#eab308" />
              <text x="3.5" y="9" fill="#d6d3d1" fontSize="1">H. habilis</text>
              <circle cx="11" cy="8.5" r="0.6" fill="#06b6d4" />
              <text x="12.5" y="9" fill="#d6d3d1" fontSize="1">Денисовский чел.</text>
              <line x1="1" y1="10.2" x2="4" y2="10.2" stroke="#f59e0b" strokeWidth="0.2" strokeDasharray="0.5,0.3" />
              <text x="5" y="10.5" fill="#d6d3d1" fontSize="1">Пути миграции</text>
            </g>
          </svg>
        </div>

        {/* Site info panel */}
        {selectedSite && (
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border border-stone-200 animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-800">{selectedSite.name}</h3>
                <p className="text-amber-600 italic">{selectedSite.species}</p>
              </div>
              <button
                onClick={() => setSelectedSite(null)}
                className="text-stone-400 hover:text-stone-600 p-1"
              >
                ✕
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-stone-500">
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                {selectedSite.year}
              </span>
            </div>
            <p className="mt-3 text-stone-600">{selectedSite.description}</p>
          </div>
        )}

        {/* Migration legend */}
        {showMigrations && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {migrations.map((mig, i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-stone-100 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: mig.color }}></div>
                <span className="text-xs text-stone-600">{mig.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
