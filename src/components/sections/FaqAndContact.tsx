import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "Сколько времени занимает запуск проекта?", a: "В среднем на аудит, разработку стратегии и упаковку уходит от 7 до 14 дней в зависимости от сложности проекта. После этого мы начинаем публиковать контент." },
  { q: "Как быстро я получу первые результаты?", a: "Первые заявки и рост охватов обычно видны уже в первый месяц работы. Устойчивый системный результат формируется за 2-3 месяца." },
  { q: "Вы даете гарантии?", a: "Мы гарантируем качественное выполнение KPI по охватам, вовлечению и целевому трафику. Точные цифры мы прописываем в договоре после аудита." },
  { q: "Что от меня нужно для работы?", a: "Ваше участие потребуется на этапе брифинга и согласования стратегии. В дальнейшем — только своевременное предоставление фактуры и согласование контента." },
];

export function FaqAndContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="py-32 bg-onyx-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ */}
        <div className="mb-32 max-w-3xl mx-auto">
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
        <div className="glass-panel p-8 md:p-16 rounded-[3rem] border border-onyx-300/20 max-w-4xl mx-auto">
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
           <p className="text-gray-400 mb-6">Мы открыты к сотрудничеству с другими агентствами, продакшенами и фрилансерами. Передавайте нам проекты, которые вы не успеваете взять.</p>
           <button className="px-6 py-2 border border-onyx-300 text-onyx-300 rounded-full hover:bg-onyx-300/10 transition-colors">
              Предложить сотрудничество
           </button>
        </div>

      </div>
    </section>
  );
}
