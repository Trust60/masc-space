"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

const pricingPlans = [
  {
    name: "ЗНАННЯ",
    price: "397",
    features: [
      "Доступ до курсу 24/7 на рік",
      "Запис Q&A сесій",
      "Проєкт у портфоліо",
    ],
    popular: false,
  },
  {
    name: "ДОСВІД",
    price: "547",
    features: [
      "Все з тарифу ЗНАННЯ",
      "Доступ до закритої групи студентів",
      "Перевірка домашніх завдань та детальний фідбек",
      "LIVE зідзвони розбору питань по матеріалах курсу",
      "Сертифікат проходження курсу",
      "2 шаблони популярних AI-агентів для N8N",
      "Сесії психологічної підтримки",
    ],
    popular: true,
  },
  {
    name: "МАСТЕРМАЙНД",
    price: "897",
    features: [
      "Все з тарифу ДОСВІД",
      "5 групових сесій з ментором",
      "1 сесія з коучем",
      "3 місяці доступу до клубу англійської",
      "5 шаблонів популярних AI-агентів для N8N",
    ],
    popular: false,
  },
];

export function N8NPricing() {
  return (
    <section className="py-20 relative cosmic-overlay">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-orbitron">
            ПАКЕТИ І ТАРИФИ
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "group" : ""}`}
            >
              {plan.popular && (
                <>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-space text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярний
                  </span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-space-cyan to-space-accent rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              </>
              )}

              <Card
                className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-orbitron">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gradient-space">
                      ${plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground font-rajdhani">
                      вартість в грн: {(Number(plan.price) * 43.5).toFixed(0)}{" "}
                      грн
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-gradient-space mt-1">✓</span>
                        <span className="font-rajdhani">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <ContactFormDialog
                    trigger={
                      <div 
                        className={`group relative w-full py-4 font-bold font-orbitron text-sm rounded-none skew-x-[-12deg] transition-all duration-300 cursor-pointer ${
                          plan.popular 
                            ? "bg-space-cyan text-space-dark hover:bg-white border-2 border-white" 
                            : "border border-space-accent text-white hover:bg-space-accent/20"
                        }`}
                      >
                        <div className="skew-x-[12deg] flex items-center gap-2 justify-center">
                          Обрати тариф
                        </div>
                        {plan.popular && (
                          <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                        )}
                      </div>
                    }
                    courseType="n8n"
                    buttonText="Обрати тариф"
                  />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
