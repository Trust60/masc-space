"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Cosmic gradient overlay */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 cosmic-overlay">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-orbitron"
          >
            Створюй{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gradient-space"
            >
              майбутнє
            </motion.span>{" "}
            з MASC
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-rajdhani"
          >
            Школа MASC — це сучасна освіта для тих, хто прагне здобути актуальні
            навички та будувати успішну кар&apos;єру. Відкрий для себе світ
            нових можливостей.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#courses");
              }}
              className="group relative px-8 py-4 bg-space-cyan text-space-dark font-bold font-orbitron text-lg rounded-none skew-x-[-12deg] hover:bg-white transition-all duration-300 w-full sm:w-auto inline-block"
            >
              <div className="skew-x-[12deg] flex items-center gap-2 justify-center">
                Обрати курс <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "1000+", label: "Студентів" },
              { number: "95%", label: "Успішних випускників" },
              { number: "50+", label: "Партнерів" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient-space mb-2 font-orbitron">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-rajdhani">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
