 "use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const pricingPlans = [
  {
    name: "Перманент стрілок",
    price: "2000",
    description: "Виразний погляд без зусиль",
    features: [
      "Міжвійкове заповнення",
      "Класичні стрілки",
      "Консультація включена",
      "Корекція через 1 місяць",
      "Тримається до 2 років",
    ],
    popular: false,
  },
  {
    name: "Перманент брів",
    price: "2500",
    description: "Найпопулярніша послуга",
    features: [
      "Пудрові брови / мікроблейдинг",
      "Комбінована техніка",
      "Індивідуальний підбір форми",
      "Корекція через 1 місяць",
      "Тримається до 2 років",
      "Преміум пігменти",
    ],
    popular: true,
  },
  {
    name: "Перманент губ",
    price: "2500",
    description: "Соковиті губи кожного дня",
    features: [
      "Акварельна техніка",
      "Контур з розтушовкою",
      "Підбір ідеального відтінку",
      "Корекція через 1 місяць",
      "Тримається до 2 років",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Прайс</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Вартість <span className="font-semibold italic text-primary">послуг</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary border-2 scale-105 shadow-lg bg-gradient-to-b from-primary/5 to-transparent"
                    : "border-border bg-card"
                }`}
              >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Популярне
                </div>
              )}
              <CardHeader className="text-center pb-2 pt-8">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">грн</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-pink-200 hover:bg-pink-300 text-foreground">
                  <a
                    href="https://instagram.com/anna.permanent_zt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Записатись
                  </a>
                </Button>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
