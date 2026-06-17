export function Footer() {
  return (
    <footer className="bg-onyx-dark-900 pt-20 pb-10 border-t border-onyx-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-onyx-300 flex items-center justify-center">
                <span className="text-onyx-dark-900 font-display font-bold text-xl">O</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">ONYX SMM</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Получайте клиентов из соцсетей, пока вы занимаетесь бизнесом.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-onyx-300 transition-colors">Услуги</a></li>
              <li><a href="#cases" className="hover:text-onyx-300 transition-colors">Кейсы</a></li>
              <li><a href="#audit" className="hover:text-onyx-300 transition-colors">Бесплатный аудит</a></li>
              <li><a href="#checklist" className="hover:text-onyx-300 transition-colors">Чек-лист по выбору SMM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="tel:+79923767525" className="hover:text-onyx-300 transition-colors">+7 (992) 376-75-25</a></li>
              <li><a href="https://t.me/onyxcoorp" target="_blank" rel="noopener noreferrer" className="hover:text-onyx-300 transition-colors">Telegram: @onyxcoorp</a></li>
              <li><a href="mailto:butatygoth@mail.ru" className="hover:text-onyx-300 transition-colors">butatygoth@mail.ru</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-onyx-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} ONYX SMM. Все права защищены.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Реквизиты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
