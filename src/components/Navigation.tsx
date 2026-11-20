import { useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const links = [
    { href: '#introduction', label: 'Введение' },
    { href: '#ancestral-groups', label: 'Предковые группы' },
    { href: '#comparison', label: 'Сравнительная таблица' },
    { href: '#timeline', label: 'Хронология' },
    { href: '#map', label: 'Карта миграций' },
    { href: '#references', label: 'Источники' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-amber-400 font-bold text-lg">
            <span className="text-2xl">🦴</span>
            <span className="hidden sm:inline">Антропогенез</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm text-stone-200 hover:text-amber-400 hover:bg-stone-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-stone-200 hover:text-amber-400 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-700">
          <div className="px-4 py-3 space-y-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-stone-200 hover:text-amber-400 hover:bg-stone-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
