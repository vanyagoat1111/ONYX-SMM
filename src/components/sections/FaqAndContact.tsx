import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "Сколько стоит ваше ведение соцсетей?", a: "Стоимость зависит от задач, объёма контента и уровня продвижения. После бесплатного аудита мы формируем индивидуальное предложение под ваш бизнес." },
  { q: "Сколько времени нужно, чтобы увидеть результат?", a: "Первые результаты по охватам и вовлечённости заметны в течение 2–4 недель. Заявки и продажи обычно начинают расти в течение 1–2 месяцев системной работы." },
  { q: "Нужно ли мне что-то делать самому?", a: "Нет. Мы берём на себя полный цикл: стратегию, контент, дизайн, съёмку, публикации и продвижение. Вам остаётся только согласовывать ключевые решения." },
  { q: "Работаете ли вы с любой нишей?", a: "Мы работаем с большинством ниш: услуги, эксперты, медицина, образование, бьюти, недвижимость и e-commerce. Перед стартом оцениваем потенциал проекта." },
  { q: "Делаете ли вы только ведение или можно заказать отдельные услуги?", a: "Можно как полное ведение, так и отдельные услуги: Reels, съёмку, рекламу, сайт или стратегию." },
  { q: "Есть ли гарантия результата?", a: "Мы не даём “пустых гарантий”, но даём прозрачную систему работы, аналитику и постоянную оптимизацию для роста заявок и прибыли." },
  { q: "Зачем нужен сайт, если есть соцсети?", a: "Сайт усиливает доверие, повышает конверсию и позволяет масштабировать рекламу. При комплексном сопровождении мы создаём его под ключ." },
];

export function FaqAndContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-32 bg-onyx-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ */}
        <div className="mb-32 max-w-3xl mx-auto" id="faq">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Вопросы и <span className="text-onyx-300">ответы</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-bold">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-onyx-300" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="glass-panel p-8 md:p-16 rounded-[3rem] border border-onyx-300/20 max-w-4xl mx-auto">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Начать работать с <span className="text-onyx-300">ONYX SMM</span></h2>
              <p className="text-gray-400">Оставьте заявку, мы свяжемся с вами и проведем аудит.</p>
           </div>
           
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Имя</label>
                    <input type="text" placeholder="Иван Иванов" className="w-full bg-onyx-dark-900 border border-onyx-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-300 transition-colors" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Номер телефона</label>
                    <input type="tel" placeholder="+7 (999) 000-00-00" className="w-full bg-onyx-dark-900 border border-onyx-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-300 transition-colors" />
                 </div>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Telegram</label>
                 <input type="text" placeholder="@username" className="w-full bg-onyx-dark-900 border border-onyx-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-300 transition-colors" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Комментарий к проекту (необязательно)</label>
                 <textarea rows={4} placeholder="Расскажите о вашей задаче..." className="w-full bg-onyx-dark-900 border border-onyx-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-300 transition-colors" />
              </div>
              <button className="w-full bg-onyx-300 text-onyx-dark-900 font-bold text-lg py-4 rounded-xl hover:bg-onyx-200 transition-colors shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                 Отправить заявку
              </button>
           </form>
        </div>

        {/* Partner Block */}
        <div className="mt-20 text-center border-t border-onyx-glass-border pt-16 max-w-2xl mx-auto">
           <h3 className="text-2xl font-bold mb-4">Стать партнером</h3>
           <p className="text-gray-400 mb-6">Мы открыты к сотрудничеству с другими агентствами, продакшенами и фрилансерами. Передавайте нам проектов, которые вы не успеваете взять.</p>
           <button className="px-6 py-2 border border-onyx-300 text-onyx-300 rounded-full hover:bg-onyx-300/10 transition-colors">
              Предложить сотрудничество
           </button>
        </div>

      </div>
    </section>
  );
}
