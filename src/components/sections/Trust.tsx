import { motion } from 'motion/react';
import { Target, Layers, Map, MonitorPlay, Gift, PieChart, ShieldCheck, Zap } from 'lucide-react';

const reasons = [
  { icon: Target, title: "Работаем на результат", desc: "Наша задача — не просто вести соцсети, а помогать бизнесу получать заявки и продажи через контент." },
  { icon: Layers, title: "Комплексно под ключ", desc: "Вам не нужно искать отдельно SMM, дизайнера, рилсмейкера и разработчика. Закрываем все задачи." },
  { icon: Map, title: "Стратегия перед запуском", desc: "Перед началом работы проводим аудит, анализируем конкурентов и создаём пошаговый план." },
  { icon: MonitorPlay, title: "Делаем контент, который смотрят", desc: "Создаём Reels, посты и сторис, которые привлекают внимание аудитории и помогают продавать." },
  { icon: Gift, title: "Сайт в подарок", desc: "Наши клиенты получают не только продвижение, но и современный продающий сайт." },
  { icon: PieChart, title: "Прозрачная отчётность", desc: "Вы всегда понимаете, за что платите. Регулярно предоставляем отчёты по эффективности." },
  { icon: ShieldCheck, title: "Персональный подход", desc: "Не работаем по шаблону. Разрабатываем стратегию индивидуально под каждую нишу." },
  { icon: Zap, title: "Экономия времени и бюджета", desc: "Вместо найма нескольких сотрудников вы получаете готовую команду по фиксированной цене." }
];

export function Trust() {
  return (
    <section className="py-32 bg-onyx-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Почему предприниматели <span className="text-onyx-300">доверяют нам</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
             <div key={i} className="glass-panel p-6 rounded-2xl hover:bg-onyx-dark-700/50 transition-colors">
                <reason.icon className="w-8 h-8 text-onyx-300 mb-4" />
                <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400">{reason.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
