import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export function Checklist() {
  return (
    <section id="checklist" className="py-32 bg-onyx-dark-900 border-t border-onyx-glass-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-onyx-300 text-onyx-300 font-bold mb-6 text-sm">Бесплатный материал</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Чек-лист по выбору <span className="text-onyx-300">SMM-специалиста</span></h2>
          <p className="text-gray-400 text-lg">Который не сэкономит, а заработает для вашего бизнеса.</p>
        </div>

        <div className="space-y-12">
          {/* Main Error */}
          <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-red-500">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-white">
              <AlertTriangle className="text-red-500" />
              Главная ошибка предпринимателей
            </h3>
            <p className="text-gray-300 mb-4">Большинство ищут человека, который умеет делать "красивые посты и сторис". На самом деле хороший SMM должен решать бизнес-задачи:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-400">
               <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-onyx-300 shrink-0"/> привлекать клиентов</li>
               <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-onyx-300 shrink-0"/> увеличивать узнаваемость</li>
               <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-onyx-300 shrink-0"/> повышать доверие</li>
               <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-onyx-300 shrink-0"/> генерировать заявки</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-3xl">
             <h3 className="text-2xl font-bold mb-8">Что должен уметь профи:</h3>
             <div className="space-y-6">
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">1. Анализировать бизнес</h4>
                   <p className="text-sm text-gray-400">Задавать вопросы о продукте, маржинальности, конкурентах. Если сразу говорит про тренды — плохой знак.</p>
                </div>
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">2. Составлять стратегию</h4>
                   <p className="text-sm text-gray-400">Понимать, как контент ведёт к покупке, а не постить "котиков и мемы".</p>
                </div>
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">3. Понимать продажи и аналитику</h4>
                   <p className="text-sm text-gray-400">Знать воронки, цену клика, конверсии. Уметь работать с цифрами, а не работать наугад.</p>
                </div>
             </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
             <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-onyx-300">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CheckCircle className="text-onyx-300"/> Признаки сильного</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                   <li>✓ Задаёт много вопросов о бизнесе</li>
                   <li>✓ Говорят языком цифр</li>
                   <li>✓ Показывают реальные кейсы</li>
                   <li>✓ Честно говорят о рисках</li>
                   <li>✓ Предлагают систему отчётности</li>
                </ul>
             </div>
             <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-red-500">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><XCircle className="text-red-500"/> Признаки слабого</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                   <li>✗ Говорит только про лайки</li>
                   <li>✗ Обещает 1000 подписчиков за 2 дня</li>
                   <li>✗ Работает только по шаблонам</li>
                   <li>✗ Уходит от конкретных цифр</li>
                   <li>✗ Ведёт 20-30 проектов одновременно</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
