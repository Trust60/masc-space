"use client";

import { motion } from "framer-motion";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

export function AutomatorCTA() {
  return (
    <section
      className="py-20 relative cosmic-overlay bg-gradient-space backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-orbitron">
            Готові зробити перший крок?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 font-rajdhani">
            Приєднуйтеся до нашої спільноти та починайте свій шлях до успішної
            кар&apos;єри вже сьогодні
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ContactFormDialog
              trigger={
                <div 
                  className="group relative px-8 py-4 bg-space-cyan text-space-dark font-bold font-orbitron text-lg rounded-none skew-x-[-12deg] hover:bg-white transition-all duration-300 w-full sm:w-auto inline-block cursor-pointer"
                >
                  <div className="skew-x-[12deg] flex items-center gap-2 justify-center">
                    Зареєструватися на консультацію
                  </div>
                  <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                </div>
              }
              courseType="ma"
              buttonText="Зареєструватися на консультацію"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
