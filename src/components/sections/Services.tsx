import { motion } from 'motion/react';
import { Smartphone, Video, PenTool, Camera, Palette, BarChart, Rocket, LineChart, Layout } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Ведение социальных сетей",
    desc: "Полностью берём на себя управление вашими социальными сетями. Создаём контент, публикуем материалы, общаемся с аудиторией.",
    list: ["оформление и упаковка", "публикация контента", "работа с комментариями", "Instagram, VK, Telegram", "развитие сообщества"]
  },
  {
    icon: Video,
    title: "Reels",
    desc: "Создаём видеоконтент, который помогает получать охваты, привлекать подписчиков и увеличивать продажи.",
    list: ["трендвотчинг", "написание сценариев", "съёмка видео", "монтаж и оформление", "адаптация под площадки"]
  },
  {
    icon: PenTool,
    title: "Контент-планы и тексты",
    desc: "Разрабатываем контент, который работает на узнаваемость бренда, вовлечение аудитории и продажи.",
    list: ["контент-план на месяц", "продающие посты", "экспертные публикации", "тексты для Reels и сторис"]
  },
  {
    icon: Camera,
    title: "Съёмка контента",
    desc: "Создаём профессиональный контент для социальных сетей, рекламы и сайта.",
    list: ["съёмка Reels", "фото для соцсетей", "предметная съёмка", "съёмка команды и процессов"]
  },
  {
    icon: Palette,
    title: "Дизайн постов и сторис",
    desc: "Разрабатываем визуальное оформление, которое помогает выделяться среди конкурентов и усиливает доверие.",
    list: ["оформление ленты", "дизайн постов и сторис", "шаблоны для публикаций", "фирменный визуальный стиль"]
  },
  {
    icon: BarChart,
    title: "SMM-стратегия",
    desc: "Разрабатываем подробную стратегию продвижения с учётом вашей ниши, конкурентов и целей бизнеса.",
    list: ["аудит текущих соцсетей", "анализ конкурентов и ЦА", "позиционирование бренда", "контентная стратегия"]
  },
  {
    icon: Rocket,
    title: "Продвижение и реклама",
    desc: "Привлекаем новых клиентов через рекламные инструменты и контент-маркетинг.",
    list: ["настройка таргета", "рекламные креативы", "продвижение Reels", "лидогенерация"]
  },
  {
    icon: LineChart,
    title: "Аналитика и отчётность",
    desc: "Регулярно отслеживаем показатели и улучшаем результаты на основе данных.",
    list: ["анализ охватов", "анализ вовлечённости", "анализ лидов", "отчёты по продвижению"]
  },
  {
    icon: Layout,
    title: "Сайт в подарок (Разработка)",
    desc: "Создаём современные сайты, которые помогают привлекать клиентов и увеличивать продажи.",
    list: ["лендинги и корпоративные сайты", "подключение CRM", "формы заявок", "SEO-подготовка", "адаптив"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-onyx-dark-900 border-t border-onyx-glass-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Наши <span className="text-onyx-300">услуги</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Закрываем все задачи в одном месте. От стратегии и съёмки до разработки сайта и настройки аналитики.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl flex flex-col group hover:border-onyx-300/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-onyx-300 text-onyx-dark-900 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(204,255,0,0.2)] group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
              
              <ul className="space-y-2 mt-auto pt-6 border-t border-onyx-glass-border">
                {service.list.map((item, idx) => (
                  <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-onyx-300 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
