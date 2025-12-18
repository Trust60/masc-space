"use client";

import { motion } from "framer-motion";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

export function AIExpertHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Floating feature cards */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/4 left-8 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-sm font-medium text-white">AI Tools</div>
            <div className="text-xs text-white/80">ChatGPT, Claude</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/3 right-8 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm font-medium text-white">$1000+</div>
            <div className="text-xs text-white/80">per month</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-1/3 left-12 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-sm font-medium text-white">4 hours</div>
            <div className="text-xs text-white/80">per day</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-1/4 right-12 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm font-medium text-white">Future</div>
            <div className="text-xs text-white/80">Profession</div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 cosmic-overlay">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-orbitron"
          >
            AI{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gradient-space"
            >
              EXPERT
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed font-rajdhani"
          >
            Професія майбутнього вже сьогодні
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-rajdhani"
          >
            Опануй інструменти AI без складних схем — працюй до 4 годин у день і
            заробляй від $1000+ на місяць
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ContactFormDialog
              trigger={
                <div 
                  className="group relative px-8 py-4 bg-space-cyan text-space-dark font-bold font-orbitron text-lg rounded-none skew-x-[-12deg] hover:bg-white transition-all duration-300 w-full sm:w-auto inline-block cursor-pointer"
                >
                  <div className="skew-x-[12deg] flex items-center gap-2 justify-center">
                    РЕЄСТРАЦІЯ
                  </div>
                  <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                </div>
              }
              courseType="ai"
              buttonText="РЕЄСТРАЦІЯ"
            />
          </motion.div>

          {/* Mobile feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:hidden"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">🤖</div>
              <div className="text-xs font-medium text-white">AI Tools</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">💰</div>
              <div className="text-xs font-medium text-gray-900">$1000+</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">⏰</div>
              <div className="text-xs font-medium text-gray-900">4 hours</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 text-center shadow-lg">
              <div className="text-xl mb-1">🚀</div>
              <div className="text-xs font-medium text-gray-900">Future</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
