import { motion } from 'motion/react';
import { BarChart3, Target, Activity } from 'lucide-react';

export function Romi() {
  return (
    <section className="py-32 bg-onyx-dark-900 border-t border-onyx-glass-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-onyx-300/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-onyx-300/50 bg-onyx-300/10 text-onyx-300 font-bold mb-6 text-sm">
             <BarChart3 className="w-4 h-4" />
             Аналитика продаж
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-onyx-300">ROMI</span> — маркетинг в цифрах
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Мы оцениваем маркетинг не по охватам, а по прибыли. ROMI (Return on Marketing Investment) показывает, насколько окупаются вложения в продвижение.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-panel p-8 rounded-3xl border border-onyx-glass-border flex flex-col items-start"
           >
              <div className="w-12 h-12 rounded-xl bg-onyx-300/20 flex items-center justify-center mb-6">
                 <Target className="w-6 h-6 text-onyx-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Что это значит для бизнеса</h3>
              <p className="text-gray-400 leading-relaxed">
                 Вы точно понимаете: сколько денег приносит каждый вложенный рубль в маркетинг.
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="glass-panel p-8 rounded-3xl border-2 border-onyx-300/30 bg-onyx-dark-800/80 flex flex-col items-start transform md:-translate-y-4 shadow-[0_10px_40px_rgba(204,255,0,0.1)]"
           >
              <div className="w-12 h-12 rounded-xl bg-onyx-300 text-onyx-dark-900 flex items-center justify-center mb-6">
                 <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Наш подход</h3>
              <ul className="space-y-3 text-sm text-gray-300 w-full">
                 <li className="flex gap-2 items-start"><span className="text-onyx-300 mt-0.5">•</span> прозрачная аналитика по всем каналам</li>
                 <li className="flex gap-2 items-start"><span className="text-onyx-300 mt-0.5">•</span> контроль заявок, лидов и продаж</li>
                 <li className="flex gap-2 items-start"><span className="text-onyx-300 mt-0.5">•</span> оптимизация рекламы под прибыль, а не охваты</li>
              </ul>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="glass-panel p-8 rounded-3xl border border-onyx-glass-border flex flex-col items-start"
           >
              <div className="w-12 h-12 rounded-xl bg-onyx-300/20 flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-onyx-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Результат</h3>
              <p className="text-gray-400 leading-relaxed">
                 Маркетинг, который не расходует бюджет — а возвращает его с прибылью.
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
