 "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Перманент брів",
    description: "Пудрові брови, мікроблейдинг, комбінована техніка. Природний результат, який підкреслить вашу красу.",
    image: "/woman-perfect-eyebrows-after-permanent-makeup-beau.jpg",
  },
  {
    title: "Перманент губ",
    description: "Акварельна техніка, контур з розтушовкою. Соковиті губи з ефектом природного сяйва.",
    image: "/young-woman-beautiful-natural-pink-lips-close-up-p.jpg",
  },
  {
    title: "Перманент стрілок",
    description: "Міжвійкове заповнення, класичні стрілки. Виразний погляд без щоденного макіяжу.",
    image: "/young-model-eyeliner-permanent-makeup.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Послуги
            <Sparkles className="w-4 h-4" />
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Що я <span className="font-semibold italic text-primary">пропоную</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Card className="h-full group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


