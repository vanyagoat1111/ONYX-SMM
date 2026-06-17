import { motion } from 'motion/react';
import { Target, TrendingUp, Presentation, Megaphone, Users, Lightbulb, Workflow } from 'lucide-react';

const tasks = [
  { icon: Megaphone, title: "Увеличиваем узнаваемость бренда", desc: "Создаём сильное присутствие компании в соцсетях через контент, визуал и регулярную коммуникацию с аудиторией." },
  { icon: Target, title: "Привлекаем новых клиентов", desc: "Настраиваем рекламу и контентные воронки, которые приводят заинтересованных клиентов в ваш бизнес." },
  { icon: TrendingUp, title: "Повышаем продажи и вовлечённость", desc: "Превращаем подписчиков в покупателей с помощью Reels, контента, прогревов и работы с аудиторией." },
  { icon: Lightbulb, title: "Запускаем новые продукты и акции", desc: "Помогаем быстро вывести на рынок новые услуги, товары и спецпредложения без длительной подготовки." },
  { icon: Users, title: "Формируем репутацию бренда", desc: "Укрепляем доверие к компании и выстраиваем положительный образ в социальных сетях." },
  { icon: Workflow, title: "Помогаем масштабироваться", desc: "Находим новые аудитории, тестируем каналы продвижения и создаём систему стабильного привлечения клиентов." }
];

export function Solutions() {
  return (
    <section className="py-32 bg-onyx-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Какие задачи бизнеса мы <span className="text-onyx-300">решаем</span></h2>
          <p className="text-gray-400 text-lg max-w-3xl">Перед началом работы мы проводим аудит проекта, анализируем конкурентов и разрабатываем стратегию с понятными целями, метриками и прогнозируемым результатом.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-onyx-glass-border hover:border-onyx-300/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-onyx-300/10 flex items-center justify-center mb-6 text-onyx-300 group-hover:bg-onyx-300 group-hover:text-onyx-dark-900 transition-colors">
                <task.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{task.title}</h3>
              <p className="text-gray-400 leading-relaxed">{task.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
