import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#trust", label: "Почему мы?" },
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#audit", label: "Бесплатный аудит" },
    { href: "#checklist", label: "Чек-лист" }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-onyx-glass-border/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-onyx-300 flex items-center justify-center">
              <span className="text-onyx-dark-900 font-display font-bold text-xl">O</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">ONYX SMM</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-onyx-300 transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-onyx-300 text-onyx-dark-900 font-semibold hover:bg-onyx-200 transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]">
              Обсудить проект
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-onyx-dark-900/95 backdrop-blur-3xl border-t border-onyx-glass-border/30"
          >
            <div className="px-4 pt-8 pb-32 space-y-6 flex flex-col h-full">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-gray-200 hover:text-onyx-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-onyx-glass-border/30">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-block text-center px-6 py-4 rounded-xl bg-onyx-300 text-onyx-dark-900 font-bold text-lg hover:bg-onyx-200 transition-colors"
                >
                  Обсудить проект
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
