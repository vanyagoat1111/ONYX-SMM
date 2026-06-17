import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-onyx-glass-border/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-onyx-300 flex items-center justify-center">
              <span className="text-onyx-dark-900 font-display font-bold text-xl">O</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">ONYX SMM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-onyx-300 transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-onyx-300 transition-colors">Кейсы</a>
            <a href="#audit" className="hover:text-onyx-300 transition-colors">Бесплатный аудит</a>
            <a href="#checklist" className="hover:text-onyx-300 transition-colors">Чек-лист</a>
          </div>
          <div>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-onyx-300 text-onyx-dark-900 font-semibold hover:bg-onyx-200 transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]">
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
