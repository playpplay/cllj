export default function Introduction() {
  return (
    <section id="introduction" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-8 text-center">
          <span className="text-amber-600">Введение</span>
        </h2>
        
        <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-6">
          <p className="text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-3">
            <strong>Антропогенез</strong> — процесс исторического формирования человека разумного (<em>Homo sapiens</em>), 
            его становление как биологического вида и как носителя культуры. Этот термин объединяет 
            вопросы происхождения человека, этапы его эволюции, формирование трудовой деятельности, 
            речи и общественного сознания.
          </p>

          <p>
            Изучение антропогенеза находится на стыке нескольких дисциплин: 
            <a href="https://ru.wikipedia.org/wiki/Палеоантропология" target="_blank" rel="noopener noreferrer" 
               className="text-amber-700 hover:text-amber-500 underline decoration-dotted mx-1">палеоантропологии</a>,
            <a href="https://ru.wikipedia.org/wiki/Археология" target="_blank" rel="noopener noreferrer" 
               className="text-amber-700 hover:text-amber-500 underline decoration-dotted mx-1">археологии</a>,
            <a href="https://ru.wikipedia.org/wiki/Генетика_популяций" target="_blank" rel="noopener noreferrer" 
               className="text-amber-700 hover:text-amber-500 underline decoration-dotted mx-1">генетики популяций</a>,
            <a href="https://ru.wikipedia.org/wiki/Приматология" target="_blank" rel="noopener noreferrer" 
               className="text-amber-700 hover:text-amber-500 underline decoration-dotted mx-1">приматологии</a> и 
            <a href="https://ru.wikipedia.org/wiki/Этология" target="_blank" rel="noopener noreferrer" 
               className="text-amber-700 hover:text-amber-500 underline decoration-dotted mx-1">этологии</a>.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-800 text-lg mb-2">📌 Ключевые факторы эволюции человека</h3>
            <ul className="space-y-2 text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">●</span>
                <span><strong>Трудовая деятельность</strong> — по Ф. Энгельсу, труд создал человека</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">●</span>
                <span><strong>Развитие мозга</strong> — увеличение объёма от ~400 до ~1400 см³</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">●</span>
                <span><strong>Прямохождение</strong> — освобождение рук для использования орудий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">●</span>
                <span><strong>Развитие речи</strong> — появление членораздельной речи и языка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">●</span>
                <span><strong>Социальная организация</strong> — формирование коллективов и культуры</span>
              </li>
            </ul>
          </div>

          <p>
            Современная наука рассматривает эволюцию человека не как линейный процесс, 
            а как разветвлённое «дерево» с множеством тупиковых ветвей. На протяжении 
            миллионов лет существовало одновременно несколько видов гоминид, 
            конкурировавших друг с другом за ресурсы.
          </p>
        </div>
      </div>
    </section>
  );
}
