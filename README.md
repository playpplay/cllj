# 🦴 Антропогенез — Происхождение человека

Информационный сайт о происхождении и эволюции человека. Включает интерактивную карту находок, хронологическую диаграмму, сравнительную таблицу видов и подробное описание предковых групп.

## 🚀 Деплой на GitHub Pages

Сайт настроен на автоматический деплой через **GitHub Actions**. 

### Как задеплоить:

1. **Создайте репозиторий** на GitHub (если ещё не создан)

2. **Запушьте код:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **Включите GitHub Pages:**
   - Перейдите в `Settings` → `Pages`
   - В разделе **Source** выберите **GitHub Actions**
   
4. **Готово!** После каждого пуша в `main` сайт будет автоматически пересобираться и деплоиться.

5. **URL сайта** будет: `https://<ваш-логин>.github.io/<имя-репозитория>/`

### Ручной запуск деплоя:
- Перейдите в `Actions` → `Deploy to GitHub Pages` → `Run workflow`

## 📂 Структура

```
├── .github/workflows/deploy.yml  — GitHub Actions workflow
├── src/
│   ├── App.tsx                   — Главный компонент
│   ├── components/
│   │   ├── Navigation.tsx        — Навигация
│   │   ├── Hero.tsx              — Главный экран
│   │   ├── Introduction.tsx      — Введение
│   │   ├── AncestralGroups.tsx   — Предковые группы
│   │   ├── ComparisonTable.tsx   — Сравнительная таблица
│   │   ├── TimelineDiagram.tsx   — Хронологическая диаграмма
│   │   ├── MigrationMap.tsx      — Карта миграций (SVG)
│   │   ├── References.tsx        — Источники
│   │   └── Footer.tsx            — Подвал
│   ├── index.css                 — Стили
│   └── main.tsx                  — Точка входа
├── index.html
├── vite.config.ts
└── package.json
```

## 🛠 Технологии

- **React 19** — UI-библиотека
- **TypeScript** — типизация
- **Vite** — сборщик
- **Tailwind CSS** — стилизация
- **SVG** — интерактивная карта

## 📝 Лицензия

Образовательный проект. Свободное использование.
