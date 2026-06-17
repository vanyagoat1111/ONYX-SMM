import { motion } from 'motion/react';
import { ArrowRight, Download, Rss } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-onyx-300/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-onyx-300/30 bg-onyx-300/10 text-onyx-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-onyx-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-onyx-300"></span>
              </span>
              Сайт в подарок при заказе
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Получайте клиентов из <span className="text-transparent bg-clip-text bg-gradient-to-r from-onyx-300 to-onyx-500">соцсетей</span>, пока вы занимаетесь бизнесом.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Мы берём на себя контент, Reels, ведение соцсетей и создание продающего сайта. Без найма команды в штат. <span className="text-white font-medium">Сайт — в подарок.</span>
            </p>
            
            <div className="glass-panel p-6 rounded-2xl mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-12 h-12 rounded-full bg-onyx-300/20 flex items-center justify-center shrink-0">
                <Download className="text-onyx-300 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Гайд: Как нанять сильного специалиста</h3>
                <p className="text-sm text-gray-400">Мы подготовили бесплатный чек-лист по выбору SMM для вашего бизнеса, в котором описаны все нюансы. Благодаря нему вы будете знать, как нанять сильного специалиста!</p>
              </div>
              <a href="#checklist" className="mt-2 sm:mt-0 sm:ml-auto text-sm text-onyx-300 hover:text-white transition-colors whitespace-nowrap shrink-0">
                Читать чек-лист &rarr;
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#audit" className="group px-8 py-4 rounded-full bg-onyx-300 text-onyx-dark-900 font-bold hover:bg-onyx-200 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] flex items-center justify-center gap-2">
                Получить бесплатный аудит
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border border-onyx-glass-border hover:bg-onyx-glass transition-colors font-medium flex items-center justify-center">
                Обсудить проект
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Visual element representing a dashboard or phone mockups */}
             <div className="aspect-[4/3] rounded-3xl glass-panel border-onyx-300/30 overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-onyx-dark-800 to-onyx-dark-900 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-dark-900 via-transparent to-transparent"></div>
                <Rss className="w-32 h-32 text-onyx-300 opacity-20 absolute" />
                
                {/* Abstract UI cards */}
                <div className="absolute top-10 right-10 glass-panel p-4 rounded-xl slide-left animate-bounce duration-1000">
                  <div className="text-xs text-gray-400">Лиды сегодня</div>
                  <div className="text-2xl font-bold text-onyx-300">+48</div>
                </div>
                <div className="absolute bottom-10 left-10 glass-panel p-4 rounded-xl">
                  <div className="text-xs text-gray-400">Конверсия</div>
                  <div className="text-2xl font-bold text-onyx-300">24.5%</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
