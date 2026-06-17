import { motion } from 'motion/react';

const stats = [
  { value: "15M+", label: "просмотров Reels для клиентов" },
  { value: "55+", label: "проектов реализовано" },
  { value: "400+", label: "лидов в месяц из контента" },
  { value: "24.5%", label: "макс. конверсия лида в продажу" },
  { value: "15+", label: "бизнес-ниш в портфолио" },
  { value: "24ч", label: "на бесплатный аудит" },
  { value: "100%", label: "бесплатная консультация" },
  { value: "Сайт", label: "в подарок при выборе агентства" },
];

export function Stats() {
  return (
    <section className="py-20 border-y border-onyx-glass-border bg-onyx-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-onyx-300 to-onyx-500 mb-4 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
