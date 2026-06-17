import { AlertTriangle, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

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

          {/* Should Know */}
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
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">4. Работать с аналитикой</h4>
                   <p className="text-sm text-gray-400">Должен уметь анализировать: охваты; удержание аудитории; вовлечённость; стоимость заявки; стоимость подписчика; конверсию в обращения. Если специалист не умеет работать с цифрами — он действует наугад.</p>
                </div>
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">5. Писать сильные тексты</h4>
                   <p className="text-sm text-gray-400">Он должен уметь: писать продающие посты; делать понятные офферы; создавать цепляющие заголовки; работать с болями аудитории.</p>
                </div>
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">6. Создавать визуал</h4>
                   <p className="text-sm text-gray-400">Не обязательно быть дизайнером уровня агентства. Но хороший SMM должен понимать: композицию; упаковку аккаунта; визуальную структуру контента; современные тренды оформления.</p>
                </div>
                <div>
                   <h4 className="font-bold text-onyx-300 mb-2">7. Работать с видео</h4>
                   <p className="text-sm text-gray-400">Сегодня без коротких видео практически невозможно развивать соцсети. Минимальные навыки: сценарии Reels; монтаж; понимание удержания внимания; работа с хуками.</p>
                </div>
             </div>
          </div>

          {/* Interview Questions */}
          <div className="glass-panel p-8 rounded-3xl border border-onyx-glass-border bg-onyx-dark-800/50">
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <HelpCircle className="text-onyx-300" />
                Как проверить специалиста на собеседовании
             </h3>
             <p className="text-gray-300 mb-4">Задайте эти вопросы:</p>
             <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 mb-6 font-medium">
               <li>Как вы будете изучать мой бизнес?</li>
               <li>Какие показатели считаете главными?</li>
               <li>Какие результаты получили на прошлых проектах?</li>
               <li>Какие ошибки чаще всего допускают компании в соцсетях?</li>
               <li>Что будете делать в первый месяц работы?</li>
               <li>Какие инструменты аналитики используете?</li>
               <li>Какие гипотезы будете тестировать?</li>
             </ul>
             <p className="text-onyx-300 font-bold border-l-2 border-onyx-300 pl-4">Профессионал отвечает конкретно. Новичок отвечает общими фразами.</p>
          </div>

          {/* Pitfalls */}
          <div className="glass-panel p-8 rounded-3xl">
             <h3 className="text-2xl font-bold mb-8">Подводные камни при поиске SMM</h3>
             <div className="space-y-6">
                <div>
                   <h4 className="font-bold text-white mb-2">№1 Красивое портфолио без результатов</h4>
                   <p className="text-sm text-gray-400">Часто показывают красивые сторис/ленты/эстетичные видео, но не показывают рост заявок, продажи, конверсии. Просите цифры.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">№2 Накрученные кейсы</h4>
                   <p className="text-sm text-gray-400">Попросите показать: скриншоты статистики; рекламные кабинеты; реальные аккаунты клиентов. Многие показывают чужие кейсы.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">№3 Обещания быстрых результатов</h4>
                   <p className="text-sm text-gray-400">Фразы: "Гарантирую 1000 подписчиков за месяц.", "Через 2 недели будут продажи.", "Сделаю вас популярными." Нормальный специалист не гарантирует то, что зависит от множества факторов.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">№4 Работа без стратегии</h4>
                   <p className="text-sm text-gray-400">Если предлагают сразу начать публиковать контент без анализа бизнеса — это непрофессионально.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">№5 Очень низкая цена</h4>
                   <p className="text-sm text-gray-400">Если стоимость значительно ниже рынка, часто это означает: отсутствие опыта, перегруженность клиентами, использование шаблонов, отсутствие аналитики.</p>
                </div>
                <div>
                   <h4 className="font-bold text-white mb-2">№6 Специалист ведёт 20–30 проектов одновременно</h4>
                   <p className="text-sm text-gray-400">Уточните: "Сколько клиентов вы ведёте сейчас?" Если проектов слишком много, качественного погружения в бизнес не будет.</p>
                </div>
             </div>
          </div>

          {/* Good vs Bad */}
          <div className="grid sm:grid-cols-2 gap-6">
             <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-onyx-300">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CheckCircle className="text-onyx-300"/> Признаки сильного</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                   <li>✓ Задаёт много вопросов</li>
                   <li>✓ Интересуется бизнесом</li>
                   <li>✓ Говорит языком цифр</li>
                   <li>✓ Предлагает гипотезы</li>
                   <li>✓ Показывает реальные кейсы</li>
                   <li>✓ Честно говорит о рисках</li>
                   <li>✓ Не обещает чудес</li>
                   <li>✓ Может объяснить каждый шаг работы</li>
                   <li>✓ Предлагает систему отчётности</li>
                   <li>✓ Читает тренды и учится</li>
                </ul>
             </div>
             <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-red-500">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><XCircle className="text-red-500"/> Признаки плохого</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                   <li>✗ Говорит только про лайки</li>
                   <li>✗ Не задаёт вопросов о бизнесе</li>
                   <li>✗ Не умеет объяснить стратегию</li>
                   <li>✗ Не показывает результаты прошлых проектов</li>
                   <li>✗ Обещает гарантированные продажи</li>
                   <li>✗ Не понимает аналитику</li>
                   <li>✗ Не знает свою целевую аудиторию</li>
                   <li>✗ Работает по шаблонам</li>
                   <li>✗ Не называет свои ошибки</li>
                   <li>✗ Уходит от конкретных цифр</li>
                </ul>
             </div>
          </div>

          {/* Ideal Candidate */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-center bg-onyx-300/10 border border-onyx-300/30">
            <h3 className="text-2xl font-bold mb-6 text-white">Идеальный кандидат</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ищите специалиста, который сочетает: <strong>маркетинг, продажи, контент, аналитику и понимание бизнеса.</strong>
            </p>
            <p className="text-lg font-bold text-onyx-300 uppercase tracking-wide">
              Лучший SMM — это не человек, который делает красивые посты. 
              Лучший SMM — это человек, который помогает компании зарабатывать больше денег через социальные сети.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
