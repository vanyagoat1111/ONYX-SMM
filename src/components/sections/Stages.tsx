import { motion } from 'motion/react';

const stages = [
  { title: "Бесплатная консультация", desc: "Проводим встречу, изучаем бизнес и цели. Определяем задачи для соцсетей." },
  { title: "Аудит и анализ", desc: "Анализируем соцсети, сайт, конкурентов и аудиторию. Выявляем точки роста." },
  { title: "Разработка стратегии", desc: "Формируем стратегию продвижения, контентные направления и план развития." },
  { title: "Подготовка проекта", desc: "Оформляем профили, разрабатываем визуальный стиль и контент-план." },
  { title: "Создание контента", desc: "Снимаем Reels, разрабатываем дизайн, пишем тексты и создаём сторис." },
  { title: "Запуск продвижения", desc: "Публикуем контент, запускаем рекламу и начинаем привлекать клиентов." },
  { title: "Аналитика и оптимизация", desc: "Ежемесячно анализируем результаты, корректируем стратегию." },
  { title: "Масштабирование", desc: "Расширяем рекламные кампании, тестируем новые каналы продвижения." }
];

export function Stages() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Как мы <span className="text-onyx-300">работаем</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl">Прозрачный процесс от первого звонка до масштабирования результатов.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-onyx-glass-border -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0 relative">
            {stages.map((stage, i) => (
               <div key={i} className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                     <div className={`glass-panel p-6 rounded-2xl w-full md:max-w-md ${i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <div className="flex items-center gap-4 mb-3">
                           <div className="text-3xl font-display font-bold text-onyx-300 opacity-50">0{i + 1}</div>
                           <h3 className="text-lg font-bold text-white">{stage.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{stage.desc}</p>
                     </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-onyx-dark-900 border-2 border-onyx-300 items-center justify-center z-10 box-content">
                     <div className="w-2 h-2 rounded-full bg-onyx-300" />
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
