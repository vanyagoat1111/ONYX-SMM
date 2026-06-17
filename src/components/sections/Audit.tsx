import { motion } from 'motion/react';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';

export function Audit() {
  return (
    <section id="audit" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-onyx-300/5 rotate-3 scale-150 transform-gpu" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 border-2 border-onyx-300/20 shadow-[0_0_50px_rgba(204,255,0,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-onyx-300/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-onyx-300/10 text-onyx-300 font-medium mb-8">
                <Search className="w-5 h-5" />
                Бесплатный аудит ваших соцсетей
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Не знаете, почему соцсети <span className="text-onyx-300">не приводят</span> клиентов?
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Проведём бесплатный аудит и покажем точки роста вашего проекта. Это бесплатно и не обязывает к дальнейшему сотрудничеству.
              </p>

              <div className="mb-10 space-y-4">
                <h4 className="font-bold text-white mb-4">Что входит в аудит:</h4>
                {[
                  "Анализ профилей в социальных сетях",
                  "Проверка оформления и упаковки аккаунтов",
                  "Анализ контент-стратегии и Reels",
                  "Оценка вовлечённости аудитории",
                  "Анализ конкурентов в вашей нише",
                  "Поиск ошибок, которые мешают получать заявки",
                  "Рекомендации по увеличению охватов и продаж"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-onyx-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#contact" className="inline-flex items-center gap-2 bg-onyx-300 hover:bg-onyx-200 text-onyx-dark-900 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                Оставить заявку на аудит
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-onyx-glass-border bg-onyx-dark-900/50 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white">После аудита вы получите:</h3>
              <ul className="space-y-6">
                {[
                  { title: "Список ошибок", desc: "Основные ошибки и зоны роста вашего текущего SMM." },
                  { title: "Рекомендации", desc: "Понятные рекомендации по контенту и продвижению." },
                  { title: "План действий", desc: "Пошаговый план для привлечения клиентов через соцсети." },
                  { title: "Инструменты", desc: "Понимание, какие инструменты дадут результат именно вам." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-onyx-300/10 flex items-center justify-center shrink-0 font-bold text-onyx-300">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{item.title}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-onyx-glass-border">
                <p className="text-sm text-gray-400 text-center">Мы свяжемся с вами в течение рабочего дня.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
