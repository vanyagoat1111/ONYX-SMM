import { motion } from 'motion/react';

const cases = [
  {
    num: "01",
    title: "Школа детского сна «BABYSLEEP»",
    stats: ["+400 лидов/мес", "24.5% конверсия"],
    description: "Работа над проектом более года. Выстроено более 30 воронок продаж на базе чек-листов, вебинаров, мини-курсов. Проведено 3 распродажи, 5 прогревов к курсам, запуск обучения на консультантов по сну.",
    bgType: "bg-onyx-dark-800",
    images: ["/case1-1.jpg", "/case1-2.jpg", "/case1-3.jpg"]
  },
  {
    num: "02",
    title: "Семейный психолог",
    stats: ["10K+ с Reels", "18.1% конверсия"],
    description: "Упаковка аккаунта, прогрев аудитории к запуску курса и привлечение новой аудитории. Выделено несколько контентных воронок, переработана подача в Reels на более триггерный формат.",
    bgType: "bg-onyx-dark-900",
    images: ["/case2-1.jpg", "/case2-2.jpg", "/case2-3.jpg"]
  },
  {
    num: "03",
    title: "Бизнес клуб «МДС»",
    stats: ["+1000 с Reels", "2 воронки"],
    description: "Упаковка, выделение смыслов бизнес-клуба, внедрение креативных идей и увеличение узнаваемости клуба. Усилили количество контента, проработали смыслы и TOV.",
    bgType: "bg-onyx-dark-800",
    images: ["/case3-1.jpg", "/case3-2.jpg", "/case3-3.jpg"]
  },
  {
    num: "04",
    title: "Онлайн-школа «Мой Логопед»",
    stats: ["25 Reels/мес", "16.3% конверсия"],
    description: "Узнаваемость бренда, построение воронок продаж на бесплатный урок и чек-листы. Усилили контент-стратегию и внедрили формат «Отзывы», принесший более 200 запросов.",
    bgType: "bg-onyx-dark-900",
    images: ["/case4-1.jpg", "/case4-2.jpg", "/case4-3.jpg"]
  },
  {
    num: "05",
    title: "Клиника в Берлине",
    stats: ["+46% запись", "4€ стоимость лида"],
    description: "Комплексная упаковка, запуск Instagram, TikTok, YouTube. Закрыли полугодовую запись на хирургические операции, создали брендбук и настроили email-маркетинг с конверсией 24.7%.",
    bgType: "bg-onyx-dark-800",
    images: ["/case5-1.jpg", "/case5-2.jpg", "/case5-3.jpg"]
  },
  {
    num: "06",
    title: "Холдинг «Лига Знаний»",
    stats: ["14 воронок", "32% конверсия"],
    description: "Запустили более 14 воронок на чек-листы, усилили стратегию до 25 Reels в месяц. Провели гранты, конкурсы и новогоднюю распродажу. Развили Telegram, ВКонтакте, Instagram.",
    bgType: "bg-onyx-dark-900",
    images: ["/case6-1.jpg", "/case6-2.jpg", "/case6-3.jpg", "/case6-4.jpg"]
  },
  {
    num: "07",
    title: "Бренд косметики «You Need It»",
    stats: ["Комплексный SMM", "Pinterest + YT"],
    description: "Таргет на чек-лист, упаковка, сценарии и монтаж Reels. Стратегия email-маркетинга, работа с амбассадорами, очистка от ботов и вебинарные воронки.",
    bgType: "bg-onyx-dark-800",
    images: ["/case7-1.jpg", "/case7-2.jpg", "/case7-3.jpg", "/case7-4.jpg"]
  }
];

export function Cases() {
  return (
    <section id="cases" className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-onyx-300/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Доказанные <span className="text-onyx-300">результаты</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl">Не показываем красивые картинки без цифр. Каждый кейс — это бизнес-задача, которую мы решили с помощью грамотного SMM.</p>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`glass-panel p-8 md:p-12 rounded-3xl ${c.bgType} flex flex-col md:flex-row gap-12 group`}
            >
              <div className="md:w-1/3 shrink-0">
                <div className="text-onyx-300 font-display font-bold text-6xl opacity-30 mb-8 ">{c.num}</div>
                <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">{c.title}</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {c.stats.map((stat, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full border border-onyx-300/30 text-onyx-300 font-medium text-sm">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-300 text-lg leading-relaxed mb-10">{c.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {c.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className={`relative aspect-[9/16] rounded-2xl overflow-hidden bg-onyx-dark-900 border border-onyx-glass-border group/img ${imgIdx > 1 ? 'hidden md:block' : ''}`}>
                      <img src={imgSrc} alt={`Кейс ${c.title} изображение ${imgIdx + 1}`} className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity duration-500 my-auto grayscale-0" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
