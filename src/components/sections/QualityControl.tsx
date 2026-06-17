import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const qualityPoints = [
  "Ежедневный план и задачи под каждый проект",
  "Проверка контент-стратегии и соответствия целям бизнеса",
  "Редактура текстов и визуала перед публикацией",
  "Контроль соблюдения фирменного стиля",
  "Проверка Reels и рекламных креативов",
  "Анализ эффективности и корректировка контента",
  "Еженедельная внутренняя проверка всех проектов"
];

export function QualityControl() {
  return (
    <section className="py-24 bg-onyx-dark-800 border-t border-onyx-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Система контроля качества <span className="text-onyx-300">ONYX</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Каждое действие в проекте проходит проверку и направлено на рост заявок и продаж. 
              Мы следим не только за визуалом, но и за результатом, который он должен приносить бизнесу.
            </p>
            
            {/* Visual element representing a dashboard or phone mockups */}
            <div className="aspect-video rounded-3xl glass-panel border border-onyx-300/30 overflow-hidden relative flex items-center justify-center p-8 bg-gradient-to-br from-onyx-dark-800 to-onyx-dark-900 mx-auto">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-dark-900 via-transparent to-transparent"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full opacity-90 h-full max-h-full py-4">
                  <div className="bg-onyx-dark-800/80 backdrop-blur-md rounded-xl p-4 flex flex-col justify-end border border-onyx-glass-border shadow-lg">
                    <div className="w-full h-2 rounded bg-onyx-300/20 mb-2 overflow-hidden"><div className="h-full bg-onyx-300 w-3/4"></div></div>
                    <div className="w-1/2 h-2 rounded bg-gray-600 mb-4"></div>
                    <div className="h-10 w-full rounded bg-onyx-dark-900 border border-onyx-glass-border"></div>
                  </div>
                  <div className="bg-onyx-dark-800/80 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center border border-onyx-glass-border shadow-lg">
                    <div className="w-16 h-16 rounded-full border-4 border-onyx-300 flex items-center justify-center">
                       <span className="text-onyx-300 font-bold">100%</span>
                    </div>
                    <div className="mt-4 text-xs text-gray-400">Quality Score</div>
                  </div>
                </div>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {qualityPoints.map((point, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-2xl bg-onyx-dark-800/50 border border-onyx-glass-border/30 hover:border-onyx-300/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-onyx-dark-900 border border-onyx-300/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-onyx-300" />
                </div>
                <div className="flex items-center">
                  <p className="text-gray-300">{point}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
